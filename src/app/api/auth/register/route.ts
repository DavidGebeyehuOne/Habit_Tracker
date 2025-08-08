import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    // If user exists and is already verified, they can't register again
    if (existingUser && existingUser.isEmailVerified && existingUser.name && existingUser.password) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // If user exists but is not fully registered (temporary user from OTP), update them
    if (existingUser && existingUser.isEmailVerified && (!existingUser.name || !existingUser.password)) {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 12)

      // Update the existing user with registration data
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          name,
          password: hashedPassword,
        },
      })

      console.log('User updated:', { id: updatedUser.id, email: updatedUser.email })

      // Create default user settings if they don't exist
      try {
        await prisma.userSettings.upsert({
          where: { userId: updatedUser.id },
          update: {},
          create: {
            userId: updatedUser.id,
          },
        })
        console.log('User settings created/updated for user:', updatedUser.id)
      } catch (settingsError) {
        console.error('Error creating user settings:', settingsError)
        // Don't fail the registration if settings creation fails
      }

      return NextResponse.json(
        { message: 'User created successfully', userId: updatedUser.id },
        { status: 201 }
      )
    }

    // If no user exists, create a new one (this shouldn't happen in normal flow since OTP creates a user)
    if (!existingUser) {
      return NextResponse.json(
        { message: 'Please verify your email with OTP first' },
        { status: 400 }
      )
    }

    // If user exists but email is not verified, they need to verify first
    if (existingUser && !existingUser.isEmailVerified) {
      return NextResponse.json(
        { message: 'Please verify your email with OTP first' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user (this should only happen if somehow no user exists)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        isEmailVerified: true, // Since OTP is already verified
      },
    })

    console.log('User created:', { id: user.id, email: user.email })

    // Create default user settings
    try {
      await prisma.userSettings.create({
        data: {
          userId: user.id,
        },
      })
      console.log('User settings created for user:', user.id)
    } catch (settingsError) {
      console.error('Error creating user settings:', settingsError)
      // Don't fail the registration if settings creation fails
    }

    return NextResponse.json(
      { message: 'User created successfully', userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 