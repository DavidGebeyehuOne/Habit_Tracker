"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  ArrowLeft,
  Target,
  Palette,
  Calendar,
  FileText,
  Save,
  Trash2
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

const habitColors = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#10b981', // green
  '#f59e0b', // yellow
  '#8b5cf6', // purple
  '#06b6d4', // cyan
  '#f97316', // orange
  '#ec4899', // pink
]

const habitIcons = [
  '🏃‍♂️', '💪', '🧘‍♀️', '📚', '💧', '🥗', '😴', '🎯',
  '🏋️‍♂️', '🚴‍♂️', '🧠', '✍️', '🎨', '🎵', '🌱', '🌟'
]

export default function EditHabitPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const params = useParams()
  const habitId = params.id as string
  
  const { habits, updateHabit, deleteHabit, fetchHabits } = useHabitStore()
  const { toast } = useToast()

  // Fetch habits on component mount
  useEffect(() => {
    if (session?.user) {
      fetchHabits()
    }
  }, [session?.user, fetchHabits])
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: 'daily' as 'daily' | 'weekly' | 'monthly',
    color: '#3b82f6',
    icon: '🎯'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Find the habit to edit
  const habit = habits.find(h => h.id === habitId)

  useEffect(() => {
    if (habit) {
      setFormData({
        name: habit.name,
        description: habit.description || '',
        frequency: habit.frequency as 'daily' | 'weekly' | 'monthly',
        color: habit.color,
        icon: habit.icon || '🎯'
      })
    }
    setIsLoading(false)
  }, [habit])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter a habit name.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      await updateHabit(habitId, {
        name: formData.name.trim(),
        description: formData.description.trim() || undefined,
        frequency: formData.frequency,
        color: formData.color,
        icon: formData.icon,
      })
      
      toast({
        title: "Habit updated!",
        description: `${formData.name} has been updated successfully.`,
      })
      
      router.push('/dashboard/habits')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update habit. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this habit? This action cannot be undone.')) {
      try {
        await deleteHabit(habitId)
        toast({
          title: "Habit deleted",
          description: "The habit has been permanently deleted.",
        })
        router.push('/dashboard/habits')
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete habit. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-6"></div>
          <div className="space-y-4">
            <div className="h-32 bg-muted rounded"></div>
            <div className="h-32 bg-muted rounded"></div>
            <div className="h-32 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!habit) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center py-12">
          <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">Habit not found</h3>
          <p className="text-muted-foreground mb-4">
            The habit you're looking for doesn't exist or has been deleted.
          </p>
          <Link href="/dashboard/habits">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Habits
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#f5e9da', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto space-y-6 px-4">
        {/* Back Button and Header Card */}
        <div className="flex justify-end mb-4">
          <Link href="/dashboard/habits">
            <Button variant="ghost" size="sm" className="border border-gray-400" style={{ borderWidth: 1 }}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Habits
            </Button>
          </Link>
        </div>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Edit Habit</CardTitle>
            <CardDescription>Modify your habit settings and preferences</CardDescription>
          </CardHeader>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Update your habit name and description
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Habit Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Morning Exercise, Read 30 minutes, Drink Water"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  placeholder="Add more details about your habit..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Frequency */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Frequency
              </CardTitle>
              <CardDescription>
                How often do you want to do this habit?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'daily', label: 'Daily', description: 'Every day' },
                  { value: 'weekly', label: 'Weekly', description: 'Once a week' },
                  { value: 'monthly', label: 'Monthly', description: 'Once a month' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, frequency: option.value as any }))}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      formData.frequency === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Customization
              </CardTitle>
              <CardDescription>
                Choose a color and icon for your habit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Color Selection */}
              <div className="space-y-3">
                <Label>Color</Label>
                <div className="grid grid-cols-8 gap-2">
                  {habitColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, color }))}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        formData.color === color
                          ? 'border-foreground scale-110'
                          : 'border-border hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Icon Selection */}
              <div className="space-y-3">
                <Label>Icon</Label>
                <div className="grid grid-cols-8 gap-2">
                  {habitIcons.map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, icon }))}
                      className={`w-8 h-8 text-lg rounded border-2 transition-all flex items-center justify-center ${
                        formData.icon === icon
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:bg-accent'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Habit
            </Button>
            
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 