export interface User {
  id: string
  name?: string | null
  email: string
  image?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Habit {
  id: string
  name: string
  description?: string | null
  frequency: 'daily' | 'weekly' | 'monthly'
  color: string
  icon: string
  isActive: boolean
  isArchived: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
  completions?: Completion[]
  streaks?: Streak[]
}

export interface Completion {
  id: string
  date: Date
  createdAt: Date
  habitId: string
  userId: string
  habit?: Habit
  user?: User
}

export interface Streak {
  id: string
  habitId: string
  currentCount: number
  longestCount: number
  lastUpdated: Date
  habit?: Habit
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: Date
  userId: string
  user?: User
}

export interface UserSettings {
  id: string
  userId: string
  emailReminders: boolean
  reminderTime: string
  timezone: string
  theme: 'light' | 'dark' | 'system'
  user?: User
}

export interface HabitFormData {
  name: string
  description?: string
  frequency: 'daily' | 'weekly' | 'monthly'
  color: string
  icon: string
}

export interface AnalyticsData {
  totalCompletions: number
  currentStreak: number
  longestStreak: number
  completionRate: number
  weeklyData: { date: string; completions: number }[]
  monthlyData: { month: string; completions: number }[]
}

export interface HeatmapData {
  date: string
  count: number
}

export interface BadgeRequirement {
  name: string
  description: string
  icon: string
  requirement: number
  type: 'streak' | 'completion' | 'special'
} 