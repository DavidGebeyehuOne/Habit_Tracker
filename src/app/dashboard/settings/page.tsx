"use client"

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { 
  Settings,
  User,
  Bell,
  Palette,
  Trash2,
  LogOut,
  Save,
  AlertTriangle
} from 'lucide-react'
import { useHabitStore } from '@/lib/store'
import { useToast } from '@/hooks/use-toast'

export default function SettingsPage() {
  const { data: session } = useSession()
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()
  
  const [emailReminders, setEmailReminders] = useState(true)
  const [reminderTime, setReminderTime] = useState('09:00')
  const [timezone, setTimezone] = useState('UTC')
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveSettings = async () => {
    setIsSaving(true)
    try {
      const res = await fetch('/api/user/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emailReminders,
          reminderTime,
          timezone,
        }),
      })
      if (res.ok) {
        toast({
          title: 'Settings saved',
          description: 'Your preferences have been updated successfully.',
        })
      } else {
        const data = await res.json()
        toast({
          title: 'Error',
          description: data.message || 'Failed to save settings',
          variant: 'destructive',
        })
      }
    } catch (error) {
    toast({
        title: 'Error',
        description: 'Failed to save settings',
        variant: 'destructive',
    })
    }
    setIsSaving(false)
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Handle account deletion
      toast({
        title: "Account deletion requested",
        description: "Your account will be deleted within 30 days.",
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and settings</p>
        </div>
      </div>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            Account Information
          </CardTitle>
          <CardDescription>
            Your profile and account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-medium">{session?.user?.name}</h3>
              <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Email Reminders
          </CardTitle>
          <CardDescription>
            Configure when and how you receive reminders
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Daily Email Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Receive daily emails to remind you about your habits
              </p>
            </div>
            <Switch
              checked={emailReminders}
              onCheckedChange={setEmailReminders}
            />
          </div>
          
          {emailReminders && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reminder-time">Reminder Time</Label>
                <Input
                  id="reminder-time"
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time</option>
                  <option value="America/Chicago">Central Time</option>
                  <option value="America/Denver">Mountain Time</option>
                  <option value="America/Los_Angeles">Pacific Time</option>
                  <option value="Europe/London">London</option>
                  <option value="Europe/Paris">Paris</option>
                  <option value="Asia/Tokyo">Tokyo</option>
                  <option value="Africa/Nairobi">E. Africa Standard Time</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Palette className="h-5 w-5 mr-2" />
            Appearance
          </CardTitle>
          <CardDescription>
            Customize the look and feel of the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Theme</Label>
              <div className="flex space-x-2 mt-2">
                {[
                  { value: 'light', label: 'Light' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'system', label: 'System' }
                ].map((themeOption) => (
                  <Button
                    key={themeOption.value}
                    variant={theme === themeOption.value ? "default" : "outline"}
                    size="sm"
                    className={
                      'transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-amber-900 hover:text-foreground ' +
                      (theme === themeOption.value ? 'hover:bg-stone-200 dark:hover:bg-amber-900 hover:text-foreground' : '')
                    }
                    onClick={() => setTheme(themeOption.value as any)}
                  >
                    {themeOption.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center text-destructive">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible and destructive actions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
            <div>
              <h3 className="font-medium">Delete Account</h3>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data
              </p>
            </div>
            <Button
              variant="destructive"
              className="transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-amber-900 hover:text-foreground"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
            <div>
              <h3 className="font-medium">Sign Out</h3>
              <p className="text-sm text-muted-foreground">
                Sign out of your current session
              </p>
            </div>
            <Button
              variant="outline"
              className="transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-amber-900 hover:text-foreground"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button 
          className="transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-amber-900 hover:text-foreground" 
          onClick={handleSaveSettings} 
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </>
          )}
        </Button>
      </div>
    </div>
  )
} 