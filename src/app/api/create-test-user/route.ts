import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { 
          message: 'User already exists',
          user: { id: existingUser.id, email: existingUser.email, name: existingUser.name }
        },
        { status: 200 }
      )
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12)
    
    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        emailVerified: new Date()
      }
    })
    
    return NextResponse.json(
      { 
        message: 'Test user created successfully',
        user: { id: user.id, email: user.email, name: user.name }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create test user error:', error)
    return NextResponse.json(
      { 
        message: 'Failed to create test user',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 