"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Trophy,
  Star,
  Flame,
  Target,
  Award,
  Lock,
  Unlock,
  Sparkles
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { getDaysInStreak, getBadgeRequirement } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

interface BadgeDefinition {
  id: string
  name: string
  description: string
  icon: string
  type: 'streak' | 'completion' | 'special'
  requirement: number
  color: string
}

const badgeDefinitions: BadgeDefinition[] = [
  { id: 'streak-7', name: 'Week Warrior', description: 'Maintain a 7-day streak', icon: '🔥', type: 'streak', requirement: 7, color: '#f59e0b' },
  { id: 'streak-30', name: 'Monthly Master', description: 'Maintain a 30-day streak', icon: '⚡', type: 'streak', requirement: 30, color: '#8b5cf6' },
  { id: 'streak-100', name: 'Century Club', description: 'Maintain a 100-day streak', icon: '👑', type: 'streak', requirement: 100, color: '#ef4444' },
  { id: 'completion-10', name: 'Getting Started', description: 'Complete 10 habits total', icon: '🎯', type: 'completion', requirement: 10, color: '#3b82f6' },
  { id: 'completion-50', name: 'Consistent', description: 'Complete 50 habits total', icon: '📈', type: 'completion', requirement: 50, color: '#06b6d4' },
  { id: 'first-habit', name: 'First Steps', description: 'Create your first habit', icon: '🚀', type: 'special', requirement: 1, color: '#84cc16' },
]

export default function RewardsPage() {
  const { data: session } = useSession()
  const { habits, completions, badges, addBadge, unlockBadge, fetchHabits } = useHabitStore()
  const { toast } = useToast()
  const [newlyUnlocked, setNewlyUnlocked] = useState<string[]>([])

  // Fetch habits on component mount
  useEffect(() => {
    if (session?.user) {
      fetchHabits()
    }
  }, [session?.user, fetchHabits])

  const activeHabits = habits.filter(habit => habit.isActive && !habit.isArchived)
  const unlockedBadges = badges.filter(badge => badge.unlockedAt)
  const lockedBadges = badgeDefinitions.filter(badge => !badges.find(b => b.id === badge.id))

  useEffect(() => {
    const checkForNewBadges = () => {
      const newUnlocks: string[] = []
      
      badgeDefinitions.forEach(badgeDef => {
        const existingBadge = badges.find(b => b.id === badgeDef.id)
        if (existingBadge?.unlockedAt) return
        
        let shouldUnlock = false
        
        switch (badgeDef.type) {
          case 'streak':
            const maxStreak = Math.max(...activeHabits.map(habit => {
              const habitCompletions = completions.filter(c => c.habitId === habit.id)
              return getDaysInStreak(habitCompletions)
            }), 0)
            shouldUnlock = maxStreak >= badgeDef.requirement
            break
            
          case 'completion':
            shouldUnlock = completions.length >= badgeDef.requirement
            break
            
          case 'special':
            shouldUnlock = habits.length >= 1
            break
        }
        
        if (shouldUnlock) {
          const newBadge = {
            id: badgeDef.id,
            name: badgeDef.name,
            description: badgeDef.description,
            icon: badgeDef.icon,
            type: badgeDef.type,
            requirement: badgeDef.requirement,
            createdAt: new Date(),
            userId: 'current-user'
          }
          
          addBadge(newBadge)
          unlockBadge(badgeDef.id)
          newUnlocks.push(badgeDef.id)
        }
      })
      
      if (newUnlocks.length > 0) {
        setNewlyUnlocked(newUnlocks)
        toast({
          title: "New Badge Unlocked! 🎉",
          description: `You've earned ${newUnlocks.length} new badge${newUnlocks.length > 1 ? 's' : ''}!`,
        })
        
        setTimeout(() => {
          setNewlyUnlocked([])
        }, 5000)
      }
    }
    
    checkForNewBadges()
  }, [habits, completions, badges, addBadge, unlockBadge, toast])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Rewards & Badges</h1>
          <p className="text-muted-foreground">Track your achievements and unlock new badges</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Badges</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{badgeDefinitions.length}</div>
            <p className="text-xs text-muted-foreground">Available to unlock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unlocked</CardTitle>
            <Unlock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unlockedBadges.length}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((unlockedBadges.length / badgeDefinitions.length) * 100)}% complete
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lockedBadges.length}</div>
            <p className="text-xs text-muted-foreground">Still to unlock</p>
          </CardContent>
        </Card>
      </div>

      {unlockedBadges.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Unlock className="h-5 w-5 mr-2" />
              Unlocked Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {unlockedBadges.map((badge) => {
                const badgeDef = badgeDefinitions.find(b => b.id === badge.id)
                if (!badgeDef) return null
                
                return (
                  <div key={badge.id} className="p-4 rounded-lg border-2 border-primary bg-primary/5">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-primary/20">
                        {badgeDef.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{badgeDef.name}</h3>
                        <p className="text-sm text-muted-foreground">{badgeDef.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2" />
            Available Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedBadges.map((badgeDef) => (
              <div key={badgeDef.id} className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl opacity-50">
                    {badgeDef.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium opacity-75">{badgeDef.name}</h3>
                    <p className="text-sm text-muted-foreground">{badgeDef.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 