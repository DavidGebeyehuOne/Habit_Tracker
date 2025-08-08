'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Plus,
  CheckCircle,
  Clock,
  Sparkles,
  Zap
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { calculateStreak, getLongestStreak, calculateCompletionRate } from '@/utils/streak'
import { formatDate, isToday } from '@/utils/date'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function DashboardClient() {
  const { data: session } = useSession()
  const router = useRouter()
  const { habits, completions, setCompletions, addCompletion, removeCompletion, fetchHabits, isLoading, initialLoading } = useHabitStore()

  useEffect(() => {
    if (session?.user?.id) {
      fetchDashboardData()
    }
  }, [session])

  const fetchDashboardData = async () => {
    try {
      await fetchHabits(true) // initial load
      const completionsRes = await fetch('/api/completions')
      if (completionsRes.ok) {
        const completionsData = await completionsRes.json()
        setCompletions(completionsData)
      }
    } catch (error) {
      toast.error('Failed to load dashboard data')
    }
  }

  const handleToggleHabit = async (habitId: string) => {
    const today = formatDate(new Date())
    const isCompleted = completions.some(
      c => c.habitId === habitId && isToday(c.date)
    )
    try {
      if (isCompleted) {
        // Remove completion
        const response = await fetch(`/api/completions/${habitId}/${today}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          removeCompletion(habitId, today)
          toast.success('Habit unchecked')
        }
      } else {
        // Add completion
        const response = await fetch('/api/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ habitId, date: today }),
        })
        if (response.ok) {
          const newCompletion = await response.json()
          addCompletion(newCompletion)
          toast.success('Habit completed!')
        }
      }
    } catch (error) {
      toast.error('Failed to update habit')
    }
  }

  const getHabitStats = (habitId: string) => {
    const habitCompletions = completions.filter(c => c.habitId === habitId)
    const completionDates = habitCompletions.map(c => new Date(c.date))
    return {
      currentStreak: calculateStreak(completionDates),
      longestStreak: getLongestStreak(completionDates),
      completionRate: calculateCompletionRate(completionDates, 30), // Last 30 days
      isCompletedToday: completions.some(c => c.habitId === habitId && isToday(c.date))
    }
  }

  const getOverallStats = () => {
    const totalHabits = habits.length
    const completedToday = habits.filter(habit => {
      const stats = getHabitStats(habit.id)
      return stats.isCompletedToday
    }).length
    const totalCompletions = completions.length
    const averageStreak = habits.length > 0 
      ? habits.reduce((sum, habit) => sum + getHabitStats(habit.id).currentStreak, 0) / habits.length
      : 0
    return {
      totalHabits,
      completedToday,
      totalCompletions,
      averageStreak: Math.round(averageStreak)
    }
  }

  const overallStats = getOverallStats()

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center min-h-[100px] mt-12">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border-2 border-primary/30"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header with enhanced styling */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Welcome back, {session?.user?.name || 'User'}! 👋
              </h1>
              <p className="text-amber-100 text-lg">
                Ready to crush your goals today?
              </p>
            </div>
            <Button 
              size="lg"
              onClick={() => router.push('/dashboard/habits/new')}
              className="mt-4 sm:mt-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Habit
            </Button>
          </div>
        </div>
        {/* Enhanced Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <CardTitle className="text-sm font-medium text-stone-600 dark:text-stone-300">Total Habits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-stone-900 dark:text-white">{overallStats.totalHabits}</div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Active habits
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-sm font-medium text-stone-600 dark:text-stone-300">Completed Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-stone-900 dark:text-white">{overallStats.completedToday}</div>
              <div className="space-y-2">
                <p className="text-xs text-stone-500 dark:text-stone-400">of {overallStats.totalHabits} habits</p>
                {overallStats.totalHabits > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span>Progress</span>
                      <span>{Math.round((overallStats.completedToday / overallStats.totalHabits) * 100)}%</span>
                    </div>
                    <Progress value={(overallStats.completedToday / overallStats.totalHabits) * 100} className="h-2" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-sm font-medium text-stone-600 dark:text-stone-300">Total Completions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-stone-900 dark:text-white">{overallStats.totalCompletions}</div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                All time completions
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <CardTitle className="text-sm font-medium text-stone-600 dark:text-stone-300">Avg. Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-stone-900 dark:text-white">{overallStats.averageStreak}</div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                days per habit
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Enhanced Today's Habits Section */}
        <Card className="border-0 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-stone-900 dark:text-white">Today's Habits</CardTitle>
                <CardDescription className="text-stone-600 dark:text-stone-400">
                  Mark your habits as completed for today
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {habits.length === 0 ? (
              <div className="text-center py-12">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                  <Target className="w-24 h-24 text-stone-400 relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">No habits yet</h3>
                <p className="text-stone-600 dark:text-stone-400 mb-6 max-w-md mx-auto">
                  Create your first habit to start tracking your progress and building better routines
                </p>
                <Button 
                  size="lg"
                  onClick={() => router.push('/dashboard/habits/new')}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Habit
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {habits.map((habit, index) => {
                  const stats = getHabitStats(habit.id)
                  return (
                    <div
                      key={habit.id}
                      className={`group relative overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-stone-700/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-stone-700/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                        stats.isCompletedToday ? 'ring-2 ring-orange-500/50 bg-orange-50/50 dark:bg-orange-900/20' : ''
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <Checkbox
                                checked={stats.isCompletedToday}
                                onCheckedChange={() => handleToggleHabit(habit.id)}
                                className="w-6 h-6 border-2 border-stone-300 dark:border-stone-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                              />
                              {stats.isCompletedToday && (
                                <div className="absolute inset-0 animate-ping rounded-full bg-orange-400 opacity-75"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-semibold text-lg ${stats.isCompletedToday ? 'text-orange-700 dark:text-orange-300' : 'text-stone-900 dark:text-white'}`}>
                                {habit.name}
                              </h3>
                              {habit.description && (
                                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                                  {habit.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="flex items-center space-x-2">
                                <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                                  <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                </div>
                                <span className="text-sm font-semibold text-stone-900 dark:text-white">
                                  {stats.currentStreak}
                                </span>
                              </div>
                              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                                day{stats.currentStreak !== 1 ? 's' : ''} streak
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center space-x-2">
                                <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                                  <Zap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                                </div>
                                <span className="text-sm font-semibold text-stone-900 dark:text-white">
                                  {stats.completionRate}%
                                </span>
                              </div>
                              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                                completion rate
                              </p>
                            </div>
                            {/* Completion indicator - moved to the right */}
                            {stats.isCompletedToday && (
                              <div className="text-center ml-auto">
                                <div className="flex items-center space-x-2">
                                  <div className="p-1.5 rounded-lg bg-green-100 dark:bg-green-900/30">
                                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  </div>
                                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                                    Completed
                                  </span>
                                </div>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                                  today
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}