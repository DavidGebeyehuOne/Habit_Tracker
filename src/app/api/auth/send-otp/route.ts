import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if email is Gmail
    if (!email.toLowerCase().includes('@gmail.com')) {
      return NextResponse.json(
        { message: 'Only Gmail addresses are supported' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser && existingUser.isEmailVerified) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Generate 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString()
    const otpExpires = new Date(Date.now() + 2 * 60 * 1000) // 2 minutes

    // If user exists but not verified, update OTP
    if (existingUser) {
      await prisma.user.update({
        where: { email },
        data: {
          otp,
          otpExpires,
        },
      })
    } else {
      // Create temporary user with OTP
      await prisma.user.create({
        data: {
          email,
          otp,
          otpExpires,
          isEmailVerified: false,
        },
      })
    }

    // Send OTP via email
    try {
      // Check if Gmail credentials are configured
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.log(`🔑 OTP generated for ${email}: ${otp}`)
        console.log('⚠️  Gmail credentials not configured. Please set up GMAIL_USER and GMAIL_APP_PASSWORD in .env.local')
        
        return NextResponse.json(
          { 
            message: 'OTP generated successfully (Gmail not configured)',
            otp,
            note: 'Check console for OTP. Set up Gmail credentials in .env.local for email delivery.'
          },
          { status: 200 }
        )
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      })

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Your HabitTracker Verification Code',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #333; margin-bottom: 10px;">HabitTracker</h1>
              <p style="color: #666; font-size: 16px;">Your verification code is ready</p>
            </div>
            
            <div style="background-color: white; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px;">Verification Code</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <span style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 8px;">${otp}</span>
              </div>
              <p style="color: #666; margin-bottom: 20px;">Enter this code to verify your email address</p>
              <p style="color: #999; font-size: 14px;">This code will expire in 2 minutes</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
              <p>If you didn't request this code, please ignore this email.</p>
              <p>© 2024 HabitTracker. All rights reserved.</p>
            </div>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)
      console.log(`📧 OTP email sent to ${email}`)
      
      return NextResponse.json(
        { 
          message: 'OTP sent to your Gmail address successfully',
          note: 'Please check your email for the verification code'
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      
      // Fallback: return OTP in response if email fails
      console.log(`🔑 OTP generated for ${email}: ${otp}`)
      console.log('⚠️  Email sending failed. Returning OTP in response for testing.')
      
      return NextResponse.json(
        { 
          message: 'OTP generated (email failed)',
          otp,
          note: 'Check console for OTP. Email delivery failed - check Gmail credentials.'
        },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('Send OTP error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 