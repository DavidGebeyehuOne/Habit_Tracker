import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, TrendingUp, Calendar, Award, Bell, BarChart3 } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20">
      {/* Navigation */}
      <nav className="w-full px-4 py-6 border-b-4 border-amber-200 dark:border-amber-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-stone-900 dark:text-white">HabitTracker</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button variant="outline" className="border-2 border-amber-300 dark:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-700 dark:text-amber-300 transition-all duration-75 ease-out">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-75 ease-out">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 w-full animate-fade-in relative flex justify-center items-center">
            <div className="relative w-full max-w-6xl h-64 md:h-80 lg:h-96 transition-all duration-700 ease-out group">
              {/* Gradient overlay for extra visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              <Image
                src="/hero-image.svg"
                alt="Habit tracking and personal growth"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              
              {/* Floating particles effect */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-2 h-2 bg-amber-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-orange-200 rounded-full opacity-40 animate-ping"></div>
                <div className="absolute bottom-6 left-1/4 w-1.5 h-1.5 bg-red-200 rounded-full opacity-50 animate-bounce"></div>
                <div className="absolute bottom-12 right-1/3 w-1 h-1 bg-amber-300 rounded-full opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Decorative accent elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 dark:text-white mb-6 animate-gradient-shimmer bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Track Your Habits,
            <span className="text-amber-600 dark:text-amber-400"> Build Your Future</span>
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
            Transform your daily routines into powerful habits with our comprehensive tracking app. 
            Stay motivated with streaks, earn rewards, and visualize your progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-75 ease-out">
                Start Tracking Today
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-stone-300 text-stone-700 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800 transition-all duration-75 ease-out">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Everything You Need to Build Better Habits
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Our comprehensive suite of features helps you stay consistent and motivated on your journey to self-improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            0, 1, 2, 3, 4, 5
          ].map((i) => (
            <div key={i} className="animate-fade-in-up delay-['+i*100+']">
              {[
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle>Streak Tracking</CardTitle>
                    <CardDescription>
                      Build momentum with visual streak counters and never lose your progress with streak protection.
                    </CardDescription>
                  </CardHeader>
                </Card>,
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle>Visual Analytics</CardTitle>
                    <CardDescription>
                      See your progress with beautiful heatmaps and detailed analytics to understand your patterns.
                    </CardDescription>
                  </CardHeader>
                </Card>,
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle>Gamified Rewards</CardTitle>
                    <CardDescription>
                      Unlock badges and achievements as you reach milestones, keeping you motivated and engaged.
                    </CardDescription>
                  </CardHeader>
                </Card>,
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Bell className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle>Smart Reminders</CardTitle>
                    <CardDescription>
                      Never miss a habit with customizable email reminders and smart notification scheduling.
                    </CardDescription>
                  </CardHeader>
                </Card>,
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle>Detailed Insights</CardTitle>
                    <CardDescription>
                      Get comprehensive analytics on your habits, including completion rates and trend analysis.
                    </CardDescription>
                  </CardHeader>
                </Card>,
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle>Easy Management</CardTitle>
                    <CardDescription>
                      Create, edit, and organize your habits with an intuitive interface designed for productivity.
                    </CardDescription>
                  </CardHeader>
                </Card>
              ][i]}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-700 dark:via-orange-700 dark:to-red-700 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Habits?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already improved their lives with consistent habit tracking.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-75 ease-out">
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-stone-200 dark:border-stone-700">
        <div className="text-center text-stone-600 dark:text-stone-400">
          <p>&copy; 2024 HabitTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 