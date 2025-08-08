import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json()

    if (!email || !otp) {
      return NextResponse.json(
        { message: 'Email and OTP are required' },
        { status: 400 }
      )
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    // Check if OTP matches and is not expired
    if (user.otp !== otp) {
      return NextResponse.json(
        { message: 'Invalid OTP' },
        { status: 400 }
      )
    }

    if (user.otpExpires && new Date() > user.otpExpires) {
      return NextResponse.json(
        { message: 'OTP has expired' },
        { status: 400 }
      )
    }

    // Mark email as verified
    await prisma.user.update({
      where: { email },
      data: {
        isEmailVerified: true,
        otp: null,
        otpExpires: null,
      },
    })

    return NextResponse.json(
      { message: 'OTP verified successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Verify OTP error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 