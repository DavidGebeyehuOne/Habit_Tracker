'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  Target,
  Calendar,
  BarChart3,
  Award,
  Settings,
  LogOut,
  Plus,
} from 'lucide-react'

const navItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Habits',
    href: '/dashboard/habits',
    icon: Target,
  },
  {
    title: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Rewards',
    href: '/dashboard/rewards',
    icon: Award,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="flex-1 space-y-1 p-4">
      <div className="mb-4">
        <Link href="/dashboard/habits/new">
          <Button className="w-full transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-foreground" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Habit
          </Button>
        </Link>
      </div>

      <div className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-foreground',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>

      <div className="pt-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-foreground transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-md hover:bg-stone-200 dark:hover:bg-stone-700"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </nav>
  )
} 