import { isToday, isYesterday, subDay } from './date'

export function calculateStreak(completions: Date[]): number {
  if (completions.length === 0) return 0

  const sortedCompletions = completions
    .map(date => new Date(date))
    .sort((a, b) => b.getTime() - a.getTime())

  let streak = 0
  let currentDate = new Date()

  // Check if today is completed
  if (sortedCompletions.some(date => isToday(date))) {
    streak = 1
    currentDate = subDay(currentDate, 1)
  } else if (sortedCompletions.some(date => isYesterday(date))) {
    // If today is not completed but yesterday is, start from yesterday
    streak = 1
    currentDate = subDay(currentDate, 2)
  } else {
    // If neither today nor yesterday is completed, streak is 0
    return 0
  }

  // Continue checking consecutive days
  for (let i = 1; i < sortedCompletions.length; i++) {
    const expectedDate = subDay(new Date(), i + 1)
    const hasCompletion = sortedCompletions.some(date => 
      date.getDate() === expectedDate.getDate() &&
      date.getMonth() === expectedDate.getMonth() &&
      date.getFullYear() === expectedDate.getFullYear()
    )

    if (hasCompletion) {
      streak++
    } else {
      break
    }
  }

  return streak
}

export function getLongestStreak(completions: Date[]): number {
  if (completions.length === 0) return 0

  const sortedCompletions = completions
    .map(date => new Date(date))
    .sort((a, b) => a.getTime() - b.getTime())

  let longestStreak = 0
  let currentStreak = 1

  for (let i = 1; i < sortedCompletions.length; i++) {
    const prevDate = sortedCompletions[i - 1]
    const currDate = sortedCompletions[i]
    
    const dayDiff = Math.floor((currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (dayDiff === 1) {
      currentStreak++
    } else {
      longestStreak = Math.max(longestStreak, currentStreak)
      currentStreak = 1
    }
  }

  return Math.max(longestStreak, currentStreak)
}

export function calculateCompletionRate(completions: Date[], totalDays: number): number {
  if (totalDays === 0) return 0
  
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - totalDays + 1)
  
  // Count how many days in the last totalDays period have completions
  let completedDays = 0
  
  for (let i = 0; i < totalDays; i++) {
    const checkDate = new Date(startDate)
    checkDate.setDate(startDate.getDate() + i)
    
    const hasCompletion = completions.some(completion => {
      const completionDate = new Date(completion)
      return completionDate.getDate() === checkDate.getDate() &&
             completionDate.getMonth() === checkDate.getMonth() &&
             completionDate.getFullYear() === checkDate.getFullYear()
    })
    
    if (hasCompletion) {
      completedDays++
    }
  }
  
  return Math.round((completedDays / totalDays) * 100)
} 