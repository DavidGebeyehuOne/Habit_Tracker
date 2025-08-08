import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { habitId: string; date: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { habitId, date } = params

    // Delete the completion
    await prisma.completion.deleteMany({
      where: {
        habitId,
        userId: session.user.id,
        date: new Date(date),
      },
    })

    // Update streak after deletion
    await updateStreak(habitId)

    return NextResponse.json({ message: 'Completion deleted successfully' })
  } catch (error) {
    console.error('Error deleting completion:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function updateStreak(habitId: string) {
  const completions = await prisma.completion.findMany({
    where: { habitId },
    orderBy: { date: 'desc' },
  })

  const completionDates = completions.map(c => c.date)
  let currentStreak = 0
  let longestStreak = 0

  // Calculate current streak
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < completionDates.length; i++) {
    const completionDate = new Date(completionDates[i])
    completionDate.setHours(0, 0, 0, 0)

    const expectedDate = new Date(today)
    expectedDate.setDate(today.getDate() - i)

    if (completionDate.getTime() === expectedDate.getTime()) {
      currentStreak++
    } else {
      break
    }
  }

  // Calculate longest streak
  let tempStreak = 0
  for (let i = 1; i < completionDates.length; i++) {
    const prevDate = new Date(completionDates[i - 1])
    const currDate = new Date(completionDates[i])
    
    const dayDiff = Math.floor((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (dayDiff === 1) {
      tempStreak++
    } else {
      longestStreak = Math.max(longestStreak, tempStreak + 1)
      tempStreak = 0
    }
  }
  longestStreak = Math.max(longestStreak, tempStreak + 1)

  // Update streak record
  await prisma.streak.upsert({
    where: { habitId },
    update: {
      currentCount: currentStreak,
      longestCount: Math.max(longestStreak, currentStreak),
      lastUpdated: new Date(),
    },
    create: {
      habitId,
      currentCount: currentStreak,
      longestCount: longestStreak,
    },
  })
} 