"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Archive, 
  Target,
  Calendar,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { getDaysInStreak, getCompletionRate, formatDate } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

export default function HabitsPage() {
  const { data: session } = useSession()
  const { habits, completions, deleteHabit, updateHabit, fetchHabits, isLoading } = useHabitStore()
  const { toast } = useToast()
  const [selectedHabits, setSelectedHabits] = useState<string[]>([])
  const [showArchived, setShowArchived] = useState(false)

  // Fetch habits on component mount
  useEffect(() => {
    if (session?.user) {
      fetchHabits()
    }
  }, [session?.user, fetchHabits])

  const activeHabits = habits.filter(habit => habit.isActive && !habit.isArchived)
  const archivedHabits = habits.filter(habit => habit.isArchived)
  const displayedHabits = showArchived ? archivedHabits : activeHabits

  const handleToggleSelection = (habitId: string) => {
    setSelectedHabits(prev => 
      prev.includes(habitId) 
        ? prev.filter(id => id !== habitId)
        : [...prev, habitId]
    )
  }

  const handleSelectAll = () => {
    if (selectedHabits.length === displayedHabits.length) {
      setSelectedHabits([])
    } else {
      setSelectedHabits(displayedHabits.map(h => h.id))
    }
  }

  const handleArchiveHabits = () => {
    selectedHabits.forEach(habitId => {
      updateHabit(habitId, { isArchived: true })
    })
    setSelectedHabits([])
    toast({
      title: "Habits archived",
      description: `${selectedHabits.length} habit(s) have been archived.`,
    })
  }

  const handleDeleteHabits = () => {
    selectedHabits.forEach(habitId => {
      deleteHabit(habitId)
    })
    setSelectedHabits([])
    toast({
      title: "Habits deleted",
      description: `${selectedHabits.length} habit(s) have been permanently deleted.`,
    })
  }

  const getHabitStats = (habitId: string) => {
    const habitCompletions = completions.filter(c => c.habitId === habitId)
    const streak = getDaysInStreak(habitCompletions)
    const completionRate = getCompletionRate(habitCompletions)
    
    return { streak, completionRate }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Habits</h1>
          <p className="text-muted-foreground">Manage your daily habits and track your progress</p>
        </div>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button
            variant="outline"
            onClick={() => setShowArchived(!showArchived)}
          >
            {showArchived ? 'Show Active' : 'Show Archived'}
          </Button>
          <Link href="/dashboard/habits/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Habit
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Habits</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
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
            <CardTitle className="text-sm font-medium">Best Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.max(...activeHabits.map(habit => getHabitStats(habit.id).streak), 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              days in a row
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Completion</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeHabits.length > 0 
                ? Math.round(activeHabits.reduce((sum, habit) => sum + getHabitStats(habit.id).completionRate, 0) / activeHabits.length)
                : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bulk Actions */}
      {selectedHabits.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {selectedHabits.length} habit(s) selected
              </p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleArchiveHabits}
                >
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDeleteHabits}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Habits List */}
      {displayedHabits.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                {showArchived ? 'No archived habits' : 'No habits yet'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {showArchived 
                  ? 'Archived habits will appear here'
                  : 'Create your first habit to start tracking your progress'
                }
              </p>
              {!showArchived && (
                <Link href="/dashboard/habits/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Habit
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {displayedHabits.map((habit) => {
            const { streak, completionRate } = getHabitStats(habit.id)
            const isSelected = selectedHabits.includes(habit.id)
            
            return (
              <Card key={habit.id} className="habit-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleToggleSelection(habit.id)}
                      className="h-5 w-5"
                    />
                    {/* Habit Icon and Color */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-sm"
                      style={{ backgroundColor: habit.color }}
                    >
                      {habit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{habit.name}</h3>
                          {habit.description && (
                            <p className="text-sm text-muted-foreground">{habit.description}</p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground capitalize">
                            {habit.frequency}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mt-2">
                        {streak > 0 && (
                          <span className="streak-badge">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {streak} day streak
                          </span>
                        )}
                        <span className="completion-rate">
                          {completionRate}% completion
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Created {formatDate(new Date(habit.createdAt))}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link href={`/dashboard/habits/${habit.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateHabit(habit.id, { isArchived: !habit.isArchived })}
                      >
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          deleteHabit(habit.id)
                          toast({
                            title: "Habit deleted",
                            description: `${habit.name} has been permanently deleted.`,
                          })
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
        </div>
      </div>
    </div>
  )
} 