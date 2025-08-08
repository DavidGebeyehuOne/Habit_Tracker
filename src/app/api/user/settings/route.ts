import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const { emailReminders, reminderTime, timezone } = await request.json()
  try {
    const user = await prisma.user.findUnique({ where: { email: session.user.email } })
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }
    await prisma.userSettings.upsert({
      where: { userId: user.id },
      update: { emailReminders, reminderTime, timezone },
      create: { userId: user.id, emailReminders, reminderTime, timezone },
    })
    return NextResponse.json({ message: 'Settings updated' }, { status: 200 })
  } catch (error) {
    console.error('Error updating user settings:', error)
    return NextResponse.json({ message: 'Failed to update settings' }, { status: 500 })
  }
}
