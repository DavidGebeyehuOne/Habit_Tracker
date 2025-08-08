"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calendar as CalendarIcon,
  Target,
  TrendingUp,
  Filter
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { getHeatmapData, formatDate } from '@/lib/utils'
import dynamic from 'next/dynamic'

// Dynamically import the heatmap component to avoid SSR issues
const CalendarHeatmap = dynamic(() => import('react-calendar-heatmap'), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})

// Custom CSS for the heatmap
const heatmapStyles = `
  .react-calendar-heatmap {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-month-label {
    font-size: 8px;
    font-weight: 500;
    fill: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label {
    font-size: 8px;
    font-weight: 500;
    fill: #9ca3af;
    text-transform: uppercase;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(odd),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(even) {
    display: block !important;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label[style*="display: none"] {
    display: block !important;
  }
  
  /* Force all weekday labels to be visible */
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(1),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(2),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(3),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(4),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(5),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(6),
  .react-calendar-heatmap .react-calendar-heatmap-weekday-label:nth-child(7) {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  
  .react-calendar-heatmap .color-scale-1 {
    fill: #f3f4f6;
  }
  
  .react-calendar-heatmap .color-scale-2 {
    fill: #fbbf24;
  }
  
  .react-calendar-heatmap .color-scale-3 {
    fill: #f59e0b;
  }
  
  .react-calendar-heatmap .color-scale-4 {
    fill: #d97706;
  }
  
  .react-calendar-heatmap .color-scale-5 {
    fill: #b45309;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-day {
    stroke: #e5e7eb;
    stroke-width: 1px;
    width: 8px !important;
    height: 8px !important;
    margin: 1px !important;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-day:hover {
    stroke: #f59e0b;
    stroke-width: 2px;
  }
  
  .react-calendar-heatmap svg {
    width: 100%;
    height: auto;
    min-width: 600px;
  }
  
     .react-calendar-heatmap rect {
     width: 8px !important;
     height: 8px !important;
     margin: 1px !important;
   }

                                                               /* Custom weekday labels styling */
       .weekday-label {
         background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
         border: 2px solid #6b7280;
         border-radius: 6px;
         box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
         transition: all 0.3s ease;
         position: relative;
         overflow: visible;
         cursor: pointer;
         font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
         letter-spacing: 0.3px;
         font-weight: 700;
         color: #1f2937;
         min-width: 24px;
         min-height: 24px;
         text-align: center;
         display: flex;
         align-items: center;
         justify-content: center;
       }

     .weekday-label::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
       pointer-events: none;
     }

     .weekday-label:hover {
       background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
       transform: translateY(-1px);
       box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
       border-color: #9ca3af;
     }

     .weekday-label:active {
       transform: translateY(0);
       box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
     }

     /* Dark mode support */
     .dark .weekday-label {
       background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
       border: 2px solid #6b7280;
       color: #f9fafb !important;
     }

     .dark .weekday-label::before {
       background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
     }

     .dark .weekday-label:hover {
       background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%);
       border-color: #9ca3af;
     }

    /* Animation for weekday labels container */
    .weekday-labels-container {
      animation: slideInDown 0.5s ease-out;
    }

    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive design for weekday labels */
    @media (max-width: 768px) {
      .weekday-label {
        font-size: 6px !important;
        width: 8px !important;
        padding: 1px 0 !important;
      }
    }
`

const monthlyCalendarDayStyles = `
  .monthly-calendar-day {
    border-radius: 8px;
    border: 2px solid #e5e7eb;
    background: #f9fafb;
    color: #374151;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0 auto;
    transition: background 0.2s, border 0.2s, color 0.2s;
    box-sizing: border-box;
  }
  .monthly-calendar-day.completed {
    background: #a16207; /* brown background */
    color: #fff;
    border-color: #854d0e; /* darker brown border */
  }
  .monthly-calendar-day.today {
    background: #f59e0b; /* gold background for today */
    color: #fff;
    border-color: #d97706; /* darker gold border */
  }
  .monthly-calendar-day:not(.completed):not(.today):hover {
    background: #e0e7ef;
    border-color: #a5b4fc;
    color: #1e293b;
    cursor: pointer;
  }
`;

export default function CalendarPage() {
  const { data: session } = useSession()
  const { habits, completions, fetchHabits, setCompletions } = useHabitStore()
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null)
  const [heatmapData, setHeatmapData] = useState<any[]>([])

  const activeHabits = habits.filter(habit => habit.isActive && !habit.isArchived)

  // Fetch habits and completions on component mount
  useEffect(() => {
    if (session?.user) {
      fetchCalendarData()
    }
  }, [session?.user])

  const fetchCalendarData = async () => {
    try {
      await fetchHabits()
      const completionsRes = await fetch('/api/completions')
      if (completionsRes.ok) {
        const completionsData = await completionsRes.json()
        setCompletions(completionsData)
      }
    } catch (error) {
      console.error('Failed to load calendar data:', error)
    }
  }

  useEffect(() => {
    if (selectedHabit) {
      const habitCompletions = completions.filter(c => c.habitId === selectedHabit)
      const data = getHeatmapData(habitCompletions)
      setHeatmapData(data)
    } else {
      // Show all habits combined
      const data = getHeatmapData(completions)
      setHeatmapData(data)
    }
  }, [selectedHabit, completions])

  const getMaxCount = () => {
    if (heatmapData.length === 0) return 0
    return Math.max(...heatmapData.map(d => d.count))
  }

  const getColorClass = (count: number) => {
    const max = getMaxCount()
    if (max === 0) return 'color-scale-1'
    
    const ratio = count / max
    if (ratio === 0) return 'color-scale-1'
    if (ratio <= 0.2) return 'color-scale-2'
    if (ratio <= 0.4) return 'color-scale-3'
    if (ratio <= 0.6) return 'color-scale-4'
    return 'color-scale-5'
  }

  const getTooltipData = (data: any) => {
    if (!data || !data.date) return null
    
    const date = new Date(data.date)
    const formattedDate = formatDate(date)
    const count = data.count || 0
    
    if (selectedHabit) {
      const habit = habits.find(h => h.id === selectedHabit)
      return `${formattedDate}: ${count} completion${count !== 1 ? 's' : ''} of ${habit?.name}`
    }
    
    return `${formattedDate}: ${count} habit completion${count !== 1 ? 's' : ''}`
  }

  // Weekly habit tracking functions
  const getCurrentWeekData = () => {
    const now = new Date()
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay() + 1) // Monday
    startOfWeek.setHours(0, 0, 0, 0)
    
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 6) // Sunday
    endOfWeek.setHours(23, 59, 59, 999)
    
    // Filter completions by selected habit if one is selected
    const relevantCompletions = selectedHabit 
      ? completions.filter(c => c.habitId === selectedHabit)
      : completions
    
    const weekCompletions = relevantCompletions.filter(completion => {
      const completionDate = new Date(completion.date)
      return completionDate >= startOfWeek && completionDate <= endOfWeek
    })
    
    return {
      startOfWeek,
      endOfWeek,
      weekCompletions,
      totalDays: 7,
      completedDays: new Set(weekCompletions.map(c => new Date(c.date).toDateString())).size
    }
  }

  const getWeekProgress = () => {
    const weekData = getCurrentWeekData()
    return Math.round((weekData.completedDays / weekData.totalDays) * 100)
  }

  const getWeekStreak = () => {
    const weekData = getCurrentWeekData()
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const completedDays = new Set(weekData.weekCompletions.map(c => new Date(c.date).toDateString()))
    
    let streak = 0
    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(weekData.startOfWeek)
      dayDate.setDate(weekData.startOfWeek.getDate() + i)
      if (completedDays.has(dayDate.toDateString())) {
        streak++
      } else {
        break
      }
    }
    return streak
  }

  // Monthly habit tracking functions
  const getCurrentMonthData = () => {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    endOfMonth.setHours(23, 59, 59, 999)
    
    // Filter completions by selected habit if one is selected
    const relevantCompletions = selectedHabit 
      ? completions.filter(c => c.habitId === selectedHabit)
      : completions
    
    const monthCompletions = relevantCompletions.filter(completion => {
      const completionDate = new Date(completion.date)
      return completionDate >= startOfMonth && completionDate <= endOfMonth
    })
    
    const totalDaysInMonth = endOfMonth.getDate()
    const completedDays = new Set(monthCompletions.map(c => new Date(c.date).toDateString())).size
    
    return {
      startOfMonth,
      endOfMonth,
      monthCompletions,
      totalDays: totalDaysInMonth,
      completedDays
    }
  }

  const getMonthProgress = () => {
    const monthData = getCurrentMonthData()
    return Math.round((monthData.completedDays / monthData.totalDays) * 100)
  }

  const getMonthStreak = () => {
    const monthData = getCurrentMonthData()
    const completedDays = new Set(monthData.monthCompletions.map(c => new Date(c.date).toDateString()))
    
    let streak = 0
    for (let i = 1; i <= monthData.totalDays; i++) {
      const dayDate = new Date(monthData.startOfMonth)
      dayDate.setDate(i)
      if (completedDays.has(dayDate.toDateString())) {
        streak++
      } else {
        break
      }
    }
    return streak
  }

  const getMonthName = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[new Date().getMonth()]
  }

  // Add auto-refresh logic
  useEffect(() => {
    if (!session?.user) return;
    fetchCalendarData();
    const interval = setInterval(() => {
      fetchCalendarData();
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [session?.user]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20">
      <style dangerouslySetInnerHTML={{ __html: heatmapStyles }} />
      <style dangerouslySetInnerHTML={{ __html: monthlyCalendarDayStyles }} />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Visualize your habit consistency over time</p>
        </div>
      </div>

      {/* Habit Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Habit Filter
          </CardTitle>
          <CardDescription>
            Select a specific habit or view all habits combined
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedHabit === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedHabit(null)}
            >
              All Habits
            </Button>
            {activeHabits.map((habit) => (
              <Button
                key={habit.id}
                variant={selectedHabit === habit.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedHabit(habit.id)}
                className="flex items-center space-x-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: habit.color }}
                />
                <span>{habit.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
              </Card>

        {/* Weekly Habit Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              This Week's Progress
            </CardTitle>
            <CardDescription>
              Track your habit consistency for the current week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Weekly Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Weekly Progress</span>
                  <span className="text-muted-foreground">{getWeekProgress()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getWeekProgress()}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Weekly Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{getCurrentWeekData().completedDays}/7</div>
                  <div className="text-xs text-orange-600">Days Completed</div>
                </div>
                <div className="text-center p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{getWeekStreak()}</div>
                  <div className="text-xs text-red-600">Day Streak</div>
                </div>
              </div>
              
              {/* Weekly Day Checkboxes */}
              <div className="space-y-2">
                <div className="text-sm font-medium">Daily Check-in:</div>
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                    const weekData = getCurrentWeekData()
                    const dayDate = new Date(weekData.startOfWeek)
                    dayDate.setDate(weekData.startOfWeek.getDate() + index)
                    const isCompleted = weekData.weekCompletions.some(completion => {
                      const completionDate = new Date(completion.date) // FIXED: was completion.completedAt
                      return completionDate.toDateString() === dayDate.toDateString()
                    })
                    
                    return (
                      <div key={day} className="text-center">
                        <div className={`w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                          isCompleted 
                            ? 'bg-green-500 border-green-500 text-white dark:bg-green-700 dark:border-green-700' 
                            : 'bg-gray-100 border-gray-300 text-gray-500 dark:bg-gray-700 dark:border-gray-700'
                        }`}>
                          {isCompleted ? '✓' : day.charAt(0)}
                        </div>
                        <div className="text-xs mt-1 text-gray-600">{day}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Habit Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              {getMonthName()} Progress
            </CardTitle>
            <CardDescription>
              Track your habit consistency for the current month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Monthly Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Monthly Progress</span>
                  <span className="text-muted-foreground">{getMonthProgress()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getMonthProgress()}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Monthly Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{getCurrentMonthData().completedDays}/{getCurrentMonthData().totalDays}</div>
                  <div className="text-xs text-blue-600">Days Completed</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{getMonthStreak()}</div>
                  <div className="text-xs text-purple-600">Day Streak</div>
                </div>
              </div>
              
              {/* Monthly Calendar Grid */}
              <div className="space-y-2">
                <div className="text-sm font-medium">Monthly Calendar:</div>
                <div className="grid grid-cols-7 gap-1">
                  {/* Day headers */}
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar days */}
                  {(() => {
                    const monthData = getCurrentMonthData()
                    const firstDayOfMonth = new Date(monthData.startOfMonth)
                    const startingDayOfWeek = firstDayOfMonth.getDay()
                    const completedDays = new Set(monthData.monthCompletions.map(c => new Date(c.date).toDateString())) // FIXED: was c.completedAt
                    
                    const days = []
                    
                    // Add empty cells for days before the month starts
                    for (let i = 0; i < startingDayOfWeek; i++) {
                      days.push(<div key={`empty-${i}`} className="h-6 dark:bg-stone-800"></div>)
                    }
                    
                    // Add days of the month
                    for (let day = 1; day <= monthData.totalDays; day++) {
                      const dayDate = new Date(monthData.startOfMonth)
                      dayDate.setDate(day)
                      const isCompleted = completedDays.has(dayDate.toDateString())
                      const isToday = dayDate.toDateString() === new Date().toDateString()
                      
                      days.push(
                        <div key={day} className="text-center">
                          <div className={`monthly-calendar-day${isCompleted ? ' completed' : ''}${isToday ? ' today' : ''} relative dark:bg-stone-800 dark:border-stone-700 dark:text-white ${isCompleted ? 'dark:bg-green-700 dark:border-green-700' : ''} ${isToday ? 'dark:bg-yellow-700 dark:border-yellow-700' : ''}`}> {/* relative for positioning */}
                            {day}
                            {isCompleted && (
                              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow" style={{transform: 'translate(40%,-40%)'}}>
                                ✓
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    }
                    
                    return days
                  })()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2" />
            {selectedHabit 
              ? `${habits.find(h => h.id === selectedHabit)?.name} - Activity Heatmap`
              : 'All Habits - Activity Heatmap'
            }
          </CardTitle>
          <CardDescription>
            GitHub-style heatmap showing your completion consistency over the past year
          </CardDescription>
        </CardHeader>
        <CardContent>
          {activeHabits.length === 0 ? (
            <div className="text-center py-12">
              <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No habits to display</h3>
              <p className="text-muted-foreground">
                Create some habits first to see your activity heatmap
              </p>
            </div>
          ) : (
            <div className="space-y-4">
                             {/* Day Labels Above Heatmap */}
               {/* Removed days of the week labels */}
              {/* Heatmap Box with Prominent Border */}
              <div className="overflow-x-auto rounded-lg p-4 bg-white dark:bg-gray-800 border-2 border-orange-400 shadow-lg">
                <CalendarHeatmap
                  startDate={new Date(new Date().getFullYear(), 0, 1)}
                  endDate={new Date(new Date().getFullYear(), 11, 31)}
                  values={heatmapData}
                  classForValue={(value) => {
                    if (!value || !value.count) return 'color-scale-1'
                    return getColorClass(value.count)
                  }}
                  titleForValue={(value) => {
                    const tooltip = getTooltipData(value)
                    return tooltip || 'No data'
                  }}
                  tooltipDataAttrs={(value) => {
                    const tooltip = getTooltipData(value)
                    return {
                      'data-tooltip': tooltip || 'No data'
                    }
                  }}
                  showMonthLabels={true}
                  showWeekdayLabels={false}
                  monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  weekdayLabelWidth={0}
                  monthLabelWidth={50}
                  content={(value) => {
                    // Only mark if count is 30 or more
                    if (value && value.count >= 30) {
                      return (
                        <span style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          background: '#f59e0b',
                          color: 'white',
                          borderRadius: '50%',
                          fontSize: '10px',
                          width: '16px',
                          height: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          transform: 'translate(30%,-30%)',
                          zIndex: 2
                        }}>{value.count}</span>
                      )
                    }
                    return null
                  }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Completions</CardTitle>
            <div className="p-2 bg-amber-100 rounded-lg">
              <Target className="h-4 w-4 text-amber-600" />
            </div>   
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {heatmapData.reduce((sum, day) => sum + (day.count || 0), 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              In the past year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Days</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg">
              <CalendarIcon className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {heatmapData.filter(day => day.count && day.count > 0).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Days with completions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consistency Rate</CardTitle>
            <div className="p-2 bg-yellow-100 rounded-lg">
              <TrendingUp className="h-4 w-4 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((heatmapData.filter(day => day.count && day.count > 0).length / heatmapData.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Of days with activity
            </p>
          </CardContent>
        </Card>
      </div>
        </div>
      </div>
    </div>
  )
} 