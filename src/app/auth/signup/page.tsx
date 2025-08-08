'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Mail, Lock, User, ArrowLeft, Shield, Clock } from 'lucide-react'
import toast from 'react-hot-toast'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [otp, setOtp] = useState('')
  const [isOtpVerified, setIsOtpVerified] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [receivedOtp, setReceivedOtp] = useState('')
  const router = useRouter()

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [countdown])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSendOtp = async () => {
    if (!email || email.trim().length === 0) {
      toast.error('Please enter a valid email address')
      return
    }

    // Check if email is Gmail
    if (!email.toLowerCase().includes('@gmail.com')) {
      toast.error('Only Gmail addresses are supported')
      return
    }

    setIsSendingOtp(true)

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsOtpSent(true)
        setCountdown(120) // 2 minutes
        
        // Handle fallback OTP display when Gmail is not configured
        if (data.otp) {
          setReceivedOtp(data.otp)
          toast.success('OTP generated! Check below for your code (Gmail not configured).')
        } else {
          toast.success('OTP sent to your Gmail address! Please check your email.')
        }
      } else {
        toast.error(data.message || 'Failed to send OTP')
      }
    } catch (error) {
      console.error('Send OTP error:', error)
      toast.error('Failed to send OTP. Please try again.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error('Please enter the OTP')
      return
    }

    setIsVerifyingOtp(true)
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      })

      if (response.ok) {
        setIsOtpVerified(true)
        toast.success('Email verified successfully!')
      } else {
        const data = await response.json()
        toast.error(data.message || 'Invalid OTP')
      }
    } catch (error) {
      console.error('Verify OTP error:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isOtpVerified) {
      toast.error('Please verify your email with OTP first')
      return
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }

    setIsSubmitting(true)

    try {
      console.log('Starting registration process...')
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      console.log('Registration response status:', response.status)

      if (response.ok) {
        const responseData = await response.json()
        console.log('Registration successful:', responseData)
        toast.success('Account created successfully!')
        
        // Add a small delay to ensure the user is fully created in the database
        console.log('Waiting for database sync...')
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Try to sign in the user automatically
        console.log('Attempting automatic sign-in...')
        try {
          const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
          })

          console.log('Sign-in result:', result)

          if (result?.error) {
            console.log('Auto sign-in failed:', result.error)
            toast.info('Account created successfully! Please sign in with your credentials.')
            // Pre-fill the signin page with the email
            router.push(`/auth/signin?email=${encodeURIComponent(email)}`)
          } else {
            console.log('Auto sign-in successful, redirecting to dashboard...')
            router.push('/dashboard')
          }
        } catch (signInError) {
          console.error('Sign-in error:', signInError)
          toast.info('Account created! Please sign in with your credentials.')
          router.push('/auth/signin')
        }
      } else {
        const data = await response.json()
        console.log('Registration failed:', data)
        toast.error(data.message || 'Failed to create account')
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <Card className="border-2 border-stone-200 dark:border-stone-700 shadow-2xl bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-stone-900 dark:text-white">Create Account</CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              Start your habit tracking journey today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {/* Google Sign Up Button */}
            <Button
              type="button"
              variant="outline"
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="w-full border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 border-stone-300 dark:border-stone-600 focus:border-amber-500 dark:focus:border-amber-400"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Gmail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-stone-300 dark:border-stone-600 focus:border-amber-500 dark:focus:border-amber-400"
                    required
                    disabled={isOtpSent}
                  />
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Only Gmail addresses are supported for OTP verification
                </p>
                {!isOtpSent && (
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={!email || email.trim().length === 0 || isSendingOtp}
                    className="w-full bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-800 hover:to-orange-900 text-white font-medium py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSendingOtp ? 'Sending OTP...' : 'Send OTP to Gmail'}
                  </Button>
                )}
              </div>

              {isOtpSent && !isOtpVerified && (
                <div className="space-y-2">
                  <label htmlFor="otp" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    OTP Verification
                  </label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="pl-10 border-stone-300 dark:border-stone-600 focus:border-amber-500 dark:focus:border-amber-400"
                      maxLength={6}
                      required
                    />
                                    </div>
                  

                  
                  {/* Display OTP when Gmail is not configured */}
                  {receivedOtp && (
                    <div className="flex items-center justify-center p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-3">
                      <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2" />
                      <span className="text-amber-700 dark:text-amber-300 text-sm font-medium mr-2">
                        Your OTP (Gmail not configured):
                      </span>
                      <span className="text-amber-800 dark:text-amber-200 text-lg font-bold tracking-wider">
                        {receivedOtp}
                      </span>
                    </div>
                  )}
                  
                  {/* Countdown Timer */}
                  {countdown > 0 && (
                    <div className="flex items-center justify-center p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2" />
                      <span className="text-amber-700 dark:text-amber-300 text-sm font-medium">
                        Code expires in: {formatTime(countdown)}
                      </span>
                    </div>
                  )}

                  <Button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={!otp || otp.length !== 6 || isVerifyingOtp || countdown === 0}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isVerifyingOtp ? 'Verifying...' : countdown === 0 ? 'OTP Expired' : 'Verify OTP'}
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={isSendingOtp || countdown > 0}
                    variant="outline"
                    className="w-full border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700"
                  >
                    {isSendingOtp ? 'Sending...' : countdown > 0 ? 'Resend OTP' : 'Resend OTP'}
                  </Button>
                </div>
              )}

              {isOtpVerified && (
                <div className="flex items-center justify-center p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">
                    Email verified successfully!
                  </span>
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-stone-300 dark:border-stone-600 focus:border-amber-500 dark:focus:border-amber-400"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 border-stone-300 dark:border-stone-600 focus:border-amber-500 dark:focus:border-amber-400"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting || !isOtpVerified}
              >
                {isSubmitting ? 'Creating account...' : isOtpVerified ? 'Create Account' : 'Verify Email First'}
              </Button>
            </form>



            <div className="text-center text-sm text-stone-600 dark:text-stone-400">
              Already have an account?{' '}
              <Link href="/auth/signin" className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 