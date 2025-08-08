import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { name, description, frequency, color, icon, isActive, isArchived } = await request.json()

    // Check if habit belongs to user
    const existingHabit = await prisma.habit.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    })

    if (!existingHabit) {
      return NextResponse.json({ message: 'Habit not found' }, { status: 404 })
    }

    const updatedHabit = await prisma.habit.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        description,
        frequency,
        color,
        icon,
        isActive,
        isArchived,
        updatedAt: new Date(),
      },
      include: {
        completions: true,
        streaks: true,
      },
    })

    return NextResponse.json(updatedHabit)
  } catch (error) {
    console.error('Error updating habit:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Check if habit belongs to user
    const existingHabit = await prisma.habit.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    })

    if (!existingHabit) {
      return NextResponse.json({ message: 'Habit not found' }, { status: 404 })
    }

    // Delete the habit (this will cascade delete completions and streaks)
    await prisma.habit.delete({
      where: {
        id: params.id,
      },
    })

    return NextResponse.json({ message: 'Habit deleted successfully' })
  } catch (error) {
    console.error('Error deleting habit:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 