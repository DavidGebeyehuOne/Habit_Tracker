import { create } from 'zustand'
import { Habit, Completion, Badge } from '@/types'

interface HabitStore {
  habits: Habit[]
  completions: Completion[]
  badges: Badge[]
  isLoading: boolean
  initialLoading: boolean // NEW: for first dashboard load
  setHabits: (habits: Habit[]) => void
  addHabit: (habit: Omit<Habit, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) => Promise<void>
  updateHabit: (id: string, updates: Partial<Habit>) => Promise<void>
  deleteHabit: (id: string) => Promise<void>
  setCompletions: (completions: Completion[]) => void
  addCompletion: (completion: Completion) => void
  removeCompletion: (habitId: string, date: string) => void
  setBadges: (badges: Badge[]) => void
  addBadge: (badge: Badge) => void
  unlockBadge: (badgeId: string) => void
  setLoading: (loading: boolean) => void
  setInitialLoading: (loading: boolean) => void // NEW
  fetchHabits: (isInitial?: boolean) => Promise<void> // NEW param
}

export const useHabitStore = create<HabitStore>((set, get) => ({
  habits: [],
  completions: [],
  badges: [],
  isLoading: false,
  initialLoading: true, // NEW
  setHabits: (habits) => set({ habits }),
  addHabit: async (habitData) => {
    try {
      set({ isLoading: true })
      console.log('Store: Sending habit data to API:', habitData)
      
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(habitData),
      })

      console.log('Store: API response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Store: API error response:', errorData)
        throw new Error(`Failed to create habit: ${errorData.message || response.statusText}`)
      }

      const newHabit = await response.json()
      console.log('Store: Created habit successfully:', newHabit)
      set((state) => ({ 
        habits: [...state.habits, newHabit],
        isLoading: false 
      }))
    } catch (error) {
      set({ isLoading: false })
      console.error('Store: Error in addHabit:', error)
      throw error
    }
  },
  updateHabit: async (id, updates) => {
    try {
      set({ isLoading: true })
      const response = await fetch(`/api/habits/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error('Failed to update habit')
      }

      const updatedHabit = await response.json()
      set((state) => ({
        habits: state.habits.map((habit) =>
          habit.id === id ? updatedHabit : habit
        ),
        isLoading: false
      }))
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },
  deleteHabit: async (id) => {
    try {
      set({ isLoading: true })
      const response = await fetch(`/api/habits/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete habit')
      }

      set((state) => ({
        habits: state.habits.filter((habit) => habit.id !== id),
        isLoading: false
      }))
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },
  setCompletions: (completions) => set({
    completions: completions.map((c: any) => ({
      ...c,
      date: c.date instanceof Date ? c.date : new Date(c.date),
      createdAt: c.createdAt ? (c.createdAt instanceof Date ? c.createdAt : new Date(c.createdAt)) : undefined,
    }))
  }),
  addCompletion: (completion) =>
    set((state) => ({ completions: [...state.completions, completion] })),
  removeCompletion: (habitId, date) =>
    set((state) => ({
      completions: state.completions.filter(
        (completion) =>
          !(completion.habitId === habitId && completion.date.toISOString().split('T')[0] === date)
      ),
    })),
  setBadges: (badges) => set({ badges }),
  addBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
  unlockBadge: (badgeId) => {
    set((state) => ({
      badges: state.badges.map((badge) =>
        badge.id === badgeId ? { ...badge, unlockedAt: new Date() } : badge
      ),
    }));
  },
  setLoading: (loading) => set({ isLoading: loading }),
  setInitialLoading: (loading) => set({ initialLoading: loading }), // NEW
  fetchHabits: async (isInitial = false) => {
    try {
      if (isInitial) set({ initialLoading: true })
      else set({ isLoading: true })
      const response = await fetch('/api/habits')
      
      if (!response.ok) {
        throw new Error('Failed to fetch habits')
      }

      const habits = await response.json()
      set({ habits, isLoading: false, initialLoading: false })
    } catch (error) {
      set({ isLoading: false, initialLoading: false })
      console.error('Error fetching habits:', error)
    }
  },
})) 