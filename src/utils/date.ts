import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, addDays, subDays } from 'date-fns'

export function formatDate(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

export function formatDateDisplay(date: Date): string {
  return format(date, 'MMM dd, yyyy')
}

export function getWeekDates(date: Date = new Date()) {
  const start = startOfWeek(date, { weekStartsOn: 1 })
  const end = endOfWeek(date, { weekStartsOn: 1 })
  return eachDayOfInterval({ start, end })
}

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date())
}

export function isYesterday(date: Date): boolean {
  return isSameDay(date, subDays(new Date(), 1))
}

export function getDaysInRange(startDate: Date, endDate: Date): Date[] {
  return eachDayOfInterval({ start: startDate, end: endDate })
}

export function addDay(date: Date, days: number): Date {
  return addDays(date, days)
}

export function subDay(date: Date, days: number): Date {
  return subDays(date, days)
} 