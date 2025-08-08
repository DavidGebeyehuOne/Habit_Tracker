import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    console.log('Testing database connection...')
    
    // Test basic database connection
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log('Database connection test result:', result)
    
    // Test if we can query the Habit table
    const habitCount = await prisma.habit.count()
    console.log('Total habits in database:', habitCount)
    
    return NextResponse.json({
      message: 'Database connection successful',
      testResult: result,
      habitCount
    })
  } catch (error) {
    console.error('Database test failed:', error)
    return NextResponse.json(
      { 
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 