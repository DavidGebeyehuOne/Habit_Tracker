"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3,
  TrendingUp,
  Target,
  Calendar,
  Award,
  Clock,
  Download,
  Loader2
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { getDaysInStreak, getCompletionRate, formatDate } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { signIn } from 'next-auth/react'

// Dynamically import charts to avoid SSR issues
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const Line = dynamic(() => import('recharts').then(mod => mod.Line), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const PieChart = dynamic(() => import('recharts').then(mod => mod.PieChart), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const Pie = dynamic(() => import('recharts').then(mod => mod.Pie), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})
const Cell = dynamic(() => import('recharts').then(mod => mod.Cell), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})

export default function AnalyticsPage() {
  const { data: session, status } = useSession()
  const { habits, completions, fetchHabits, setCompletions } = useHabitStore()
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const activeHabits = habits.filter(habit => habit.isActive && !habit.isArchived)

  useEffect(() => {
    if (status === 'loading') return
    if (session?.user) {
      fetchAnalyticsData()
    }
  }, [session?.user, status])

  const fetchAnalyticsData = async () => {
    setLoading(true)
    setError(null)
    try {
      await fetchHabits()
      const completionsRes = await fetch('/api/completions')
      if (completionsRes.ok) {
        let completionsData = await completionsRes.json()
        completionsData = completionsData.map((c: any) => ({
          ...c,
          date: new Date(c.date),
          createdAt: c.createdAt ? new Date(c.createdAt) : undefined,
        }))
        setCompletions(completionsData)
      } else {
        const err = await completionsRes.json().catch(() => ({}))
        setError(err.message || 'Failed to fetch completions')
      }
    } catch (e: any) {
      setError(e.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  // Loading state
  if (status === 'loading' || loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">Loading analytics...</p>
      </div>
    )
  }

  // Not authenticated
  if (!session?.user) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="mb-4 text-lg font-semibold">You must be signed in to view analytics.</p>
        <Button onClick={() => signIn()} variant="default">Sign In</Button>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="mb-4 text-lg font-semibold text-red-600">{error}</p>
        <Button onClick={fetchAnalyticsData} variant="outline">Retry</Button>
      </div>
    )
  }

  const getHabitStats = (habitId: string) => {
    const habitCompletions = completions.filter(c => c.habitId === habitId)
    const streak = getDaysInStreak(habitCompletions)
    const completionRate = getCompletionRate(habitCompletions, 
      timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : timeRange === '90d' ? 90 : 365
    )
    
    return { streak, completionRate, totalCompletions: habitCompletions.length }
  }

  const getWeeklyData = () => {
    const weeks = []
    const endDate = new Date()
    const startDate = new Date()
    
    switch (timeRange) {
      case '7d':
        startDate.setDate(endDate.getDate() - 7)
        break
      case '30d':
        startDate.setDate(endDate.getDate() - 30)
        break
      case '90d':
        startDate.setDate(endDate.getDate() - 90)
        break
      case '1y':
        startDate.setFullYear(endDate.getFullYear() - 1)
        break
    }

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + (i * (timeRange === '7d' ? 1 : timeRange === '30d' ? 4 : timeRange === '90d' ? 13 : 52)))
      
             const weekCompletions = completions.filter(c => {
         const completionDate = new Date(c.date)
         return completionDate >= date && completionDate < new Date(date.getTime() + (timeRange === '7d' ? 24*60*60*1000 : timeRange === '30d' ? 4*24*60*60*1000 : timeRange === '90d' ? 13*24*60*60*1000 : 52*24*60*60*1000))
       })

      weeks.push({
        week: `Week ${i + 1}`,
        completions: weekCompletions.length,
        date: formatDate(date)
      })
    }

    return weeks
  }

  const getHabitPerformanceData = () => {
    return activeHabits.map(habit => {
      const stats = getHabitStats(habit.id)
      return {
        name: habit.name,
        completionRate: stats.completionRate,
        streak: stats.streak,
        totalCompletions: stats.totalCompletions,
        color: habit.color
      }
    }).sort((a, b) => b.completionRate - a.completionRate)
  }

  const getBestPerformingHabit = () => {
    if (activeHabits.length === 0) return null
    return activeHabits.reduce((best, habit) => {
      const bestStats = getHabitStats(best.id)
      const habitStats = getHabitStats(habit.id)
      return habitStats.completionRate > bestStats.completionRate ? habit : best
    })
  }

  const getWorstPerformingHabit = () => {
    if (activeHabits.length === 0) return null
    return activeHabits.reduce((worst, habit) => {
      const worstStats = getHabitStats(worst.id)
      const habitStats = getHabitStats(habit.id)
      return habitStats.completionRate < worstStats.completionRate ? habit : worst
    })
  }

  const exportData = () => {
    const data = activeHabits.map(habit => {
      const stats = getHabitStats(habit.id)
      return {
        name: habit.name,
        description: habit.description,
        frequency: habit.frequency,
        completionRate: stats.completionRate,
        currentStreak: stats.streak,
        totalCompletions: stats.totalCompletions,
        createdAt: formatDate(new Date(habit.createdAt))
      }
    })

    const csvContent = [
      ['Habit Name', 'Description', 'Frequency', 'Completion Rate (%)', 'Current Streak', 'Total Completions', 'Created Date'],
      ...data.map(row => [
        row.name,
        row.description || '',
        row.frequency,
        row.completionRate,
        row.currentStreak,
        row.totalCompletions,
        row.createdAt
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `habit-analytics-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into your habit performance</p>
        </div>
        <Button onClick={exportData} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Time Range Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Time Range
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            {[
              { value: '7d', label: '7 Days' },
              { value: '30d', label: '30 Days' },
              { value: '90d', label: '90 Days' },
              { value: '1y', label: '1 Year' }
            ].map((range) => (
              <Button
                key={range.value}
                variant={timeRange === range.value ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range.value as any)}
              >
                {range.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Weekly Progress Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
            <div className="bg-sky-100 p-2 rounded-full">
              <BarChart3 className="h-4 w-4 text-sky-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(() => {
                const weeklyData = getWeeklyData();
                return weeklyData.length > 0 ? weeklyData[weeklyData.length - 1].completions : 0;
              })()}
            </div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Habits</CardTitle>
            <div className="bg-blue-100 p-2 rounded-full">
              <Target className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeHabits.length}</div>
            <p className="text-xs text-muted-foreground">
              Currently tracking
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Completions</CardTitle>
            <div className="bg-green-100 p-2 rounded-full">
              <BarChart3 className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {completions.length}
            </div>
            <p className="text-xs text-muted-foreground">
              All time
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Streak</CardTitle>
            <div className="bg-yellow-100 p-2 rounded-full">
              <TrendingUp className="h-4 w-4 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.max(...activeHabits.map(habit => getHabitStats(habit.id).streak), 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Days in a row
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Completion</CardTitle>
            <div className="bg-purple-100 p-2 rounded-full">
              <Award className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeHabits.length > 0 
                ? Math.round(activeHabits.reduce((sum, habit) => sum + getHabitStats(habit.id).completionRate, 0) / activeHabits.length)
                : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Last {timeRange === '7d' ? '7' : timeRange === '30d' ? '30' : timeRange === '90d' ? '90' : '365'} days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Progress Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>
              Completion trends over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeHabits.length === 0 ? (
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No data to display</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getWeeklyData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completions" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Habit Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Habit Performance</CardTitle>
            <CardDescription>
              Completion rates by habit
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeHabits.length === 0 ? (
              <div className="text-center py-8">
                <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No habits to display</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getHabitPerformanceData()} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="completionRate" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Best and Worst Performers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <Award className="h-5 w-5 mr-2" />
              Best Performer
            </CardTitle>
          </CardHeader>
          <CardContent>
            {getBestPerformingHabit() ? (
              <div className="space-y-2">
                <h3 className="font-medium">{getBestPerformingHabit()?.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {getBestPerformingHabit()?.description}
                </p>
                <div className="flex space-x-4 text-sm">
                  <span className="completion-rate">
                    {getHabitStats(getBestPerformingHabit()!.id).completionRate}% completion
                  </span>
                  <span className="streak-badge">
                    {getHabitStats(getBestPerformingHabit()!.id).streak} day streak
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No habits to compare</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-orange-600">
              <Clock className="h-5 w-5 mr-2" />
              Needs Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            {getWorstPerformingHabit() ? (
              <div className="space-y-2">
                <h3 className="font-medium">{getWorstPerformingHabit()?.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {getWorstPerformingHabit()?.description}
                </p>
                <div className="flex space-x-4 text-sm">
                  <span className="completion-rate">
                    {getHabitStats(getWorstPerformingHabit()!.id).completionRate}% completion
                  </span>
                  <span className="streak-badge">
                    {getHabitStats(getWorstPerformingHabit()!.id).streak} day streak
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No habits to compare</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 