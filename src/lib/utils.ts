import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date)
}

export function getDaysInStreak(completions: Array<{ date: Date }>): number {
  if (completions.length === 0) return 0
  
  const sortedCompletions = completions
    .map(c => new Date(c.date))
    .sort((a, b) => b.getTime() - a.getTime())
  
  let streak = 0
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  for (let i = 0; i < sortedCompletions.length; i++) {
    const completionDate = new Date(sortedCompletions[i])
    completionDate.setHours(0, 0, 0, 0)
    
    const expectedDate = new Date(today)
    expectedDate.setDate(today.getDate() - i)
    
    if (completionDate.getTime() === expectedDate.getTime()) {
      streak++
    } else {
      break
    }
  }
  
  return streak
}

export function getCompletionRate(completions: Array<{ date: Date }>, days: number = 30): number {
  if (completions.length === 0) return 0
  
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(endDate.getDate() - days)
  
  const relevantCompletions = completions.filter(c => {
    const completionDate = new Date(c.date)
    return completionDate >= startDate && completionDate <= endDate
  })
  
  return Math.round((relevantCompletions.length / days) * 100)
}

export function getHeatmapData(completions: Array<{ date: Date }>, days: number = 365) {
  const data: Array<{ date: string; count: number }> = []
  const endDate = new Date()
  endDate.setHours(0, 0, 0, 0) // Normalize to midnight
  const startDate = new Date(endDate)
  startDate.setDate(endDate.getDate() - (days - 1)) // Include today as the last day

  // Create a map of completion counts by date (normalized to UTC midnight)
  const completionMap = new Map<string, number>()
  completions.forEach(c => {
    const d = new Date(c.date)
    d.setHours(0, 0, 0, 0)
    const dateStr = d.toISOString().split('T')[0]
    completionMap.set(dateStr, (completionMap.get(dateStr) || 0) + 1)
  })

  // Generate data for each day, including today
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    date.setHours(0, 0, 0, 0)
    const dateStr = date.toISOString().split('T')[0]
    const count = completionMap.get(dateStr) || 0
    data.push({
      date: dateStr,
      count
    })
  }

  return data
}

export function getBadgeRequirement(type: string, requirement: number): string {
  switch (type) {
    case 'streak':
      return `${requirement}-day streak`
    case 'completion':
      return `${requirement} total completions`
    case 'special':
      return 'Special achievement'
    default:
      return `${requirement} days`
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
} 