'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-full justify-start transition-colors hover:bg-stone-200 dark:hover:bg-stone-700 hover:shadow-md"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 mr-3" />
      ) : (
        <Sun className="w-4 h-4 mr-3" />
      )}
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
} 