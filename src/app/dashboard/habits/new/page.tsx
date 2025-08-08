"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  ArrowLeft,
  Target,
  Palette,
  Calendar,
  FileText
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import toast from 'react-hot-toast'
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

export default function NewHabitPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { addHabit } = useHabitStore()
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: 'daily' as 'daily' | 'weekly' | 'monthly',
    color: '#3b82f6',
    icon: '🎯'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form submitted with data:', formData)
    
    if (!formData.name.trim()) {
      console.log('Validation failed: No habit name')
      toast.error('Please enter a habit name.')
      return
    }

    setIsSubmitting(true)
    console.log('Starting habit creation...')
    
    try {
      const habitData = {
        name: formData.name.trim(),
        description: formData.description.trim() || undefined,
        frequency: formData.frequency,
        color: formData.color,
        icon: formData.icon,
        isActive: true,
        isArchived: false,
      }
      
      console.log('Calling addHabit with data:', habitData)
      await addHabit(habitData)
      
      console.log('Habit created successfully!')
      toast.success(`${formData.name} has been added to your habits!`)
      
      // Add a small delay to ensure the toast is visible
      setTimeout(() => {
        router.push('/dashboard/habits')
      }, 1000)
    } catch (error) {
      console.error('Error creating habit:', error)
      toast.error('Failed to create habit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
      {/* Back Button */}
      <div className="flex justify-end">
        <Link href="/dashboard/habits">
          <Button variant="outline" size="sm" className="border-2 border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Habits
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Create New Habit</h1>
        <p className="text-muted-foreground">Set up a new habit to track and build consistency</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Basic Information
            </CardTitle>
            <CardDescription>
              Give your habit a name and description
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
            <div className="space-y-2">
              <Label>Color</Label>
              <div className="flex flex-wrap gap-2">
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
            <div className="space-y-2">
              <Label>Icon</Label>
              <div className="flex flex-wrap gap-2">
                {habitIcons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, icon }))}
                    className={`w-10 h-10 rounded-lg border-2 text-lg transition-all ${
                      formData.icon === icon
                        ? 'border-primary bg-primary/5'
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

        {/* Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                style={{ backgroundColor: formData.color }}
              >
                {formData.icon}
              </div>
              <div>
                <h3 className="font-medium">{formData.name || 'Your Habit Name'}</h3>
                {formData.description && (
                  <p className="text-sm text-muted-foreground">{formData.description}</p>
                )}
                <span className="text-xs text-muted-foreground capitalize">
                  {formData.frequency}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex justify-end space-x-4">
          <Link href="/dashboard/habits">
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Link>
          <Button 
            type="submit" 
            disabled={isSubmitting || !formData.name.trim()}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Creating Habit...
              </>
            ) : (
              'Create Habit'
            )}
          </Button>
        </div>
      </form>
        </div>
      </div>
    </div>
  )
} 