import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const habits = await prisma.habit.findMany({
      where: {
        userId: session.user.id,
        isActive: true,
      },
      include: {
        completions: true,
        streaks: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(habits)
  } catch (error) {
    console.error('Error fetching habits:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('API: POST /api/habits called')
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      console.log('API: Unauthorized - no session or user ID')
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    console.log('API: User ID from session:', session.user.id)
    const { name, description, frequency, color, icon } = await request.json()
    console.log('API: Received habit data:', { name, description, frequency, color, icon })

    if (!name) {
      console.log('API: Validation failed - no name provided')
      return NextResponse.json(
        { message: 'Name is required' },
        { status: 400 }
      )
    }

    console.log('API: Creating habit in database...')
    const habit = await prisma.habit.create({
      data: {
        name,
        description,
        frequency: frequency || 'daily',
        color: color || '#3b82f6',
        icon: icon || '🎯',
        userId: session.user.id,
      },
      include: {
        completions: true,
        streaks: true,
      },
    })

    console.log('API: Habit created successfully:', habit.id)

    // Create initial streak record
    console.log('API: Creating streak record...')
    await prisma.streak.create({
      data: {
        habitId: habit.id,
        currentCount: 0,
        longestCount: 0,
      },
    })

    console.log('API: Streak record created successfully')
    return NextResponse.json(habit, { status: 201 })
  } catch (error) {
    console.error('API: Error creating habit:', error)
    return NextResponse.json(
      { message: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 