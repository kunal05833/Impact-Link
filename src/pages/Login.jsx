import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Lock } from 'lucide-react'

// Use your provided image here
import SideArt from '@/assets/images/auth/login-illustration.png'

function GoogleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.7-2.6-5.7-5.8S8.9 5.8 12 5.8c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.8 3.3 14.6 2.4 12 2.4 6.9 2.4 2.8 6.5 2.8 11.6S6.9 20.8 12 20.8c6.9 0 9.2-4.8 8.5-9.1H12z"/>
    </svg>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [recentEmail, setRecentEmail] = useState('')

  useEffect(() => {
    const r = localStorage.getItem('recentEmail') || ''
    setRecentEmail(r)
  }, [])

  const handleEmailSignIn = (e) => {
    e.preventDefault()
    if (!email || !password) return
    localStorage.setItem('recentEmail', email)
    // TODO: integrate real auth
    navigate('/dashboard')
  }

  const handleGoogle = () => {
    // TODO: integrate Google OAuth
    navigate('/dashboard')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text + Actions (LinkedIn-like) */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Explore opportunities and grow your impact network
            </motion.h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Continue with Google or sign in using your email to get started.
            </p>

            {/* Continue with Google (blue pill) */}
            <div className="mt-8 space-y-3">
              <Button
                onClick={handleGoogle}
                className="w-full h-12 rounded-full bg-[#0A66C2] hover:bg-[#0a5ab0]"
              >
                <GoogleIcon className="w-5 h-5 mr-2" />
                Continue with Google
              </Button>

              {/* Continue as recent (if any) */}
              {recentEmail ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full h-12 rounded-full border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center justify-between px-4"
                >
                  <span className="flex items-center">
                    <span className="mr-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                      {recentEmail.charAt(0).toUpperCase()}
                    </span>
                    Continue as {recentEmail}
                  </span>
                  <span className="text-gray-400">⋯</span>
                </button>
              ) : null}

              {/* Toggle email form */}
              <button
                onClick={() => setShowEmailForm((s) => !s)}
                className="w-full h-12 rounded-full border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Sign in with email
              </button>

              {/* Email form */}
              <AnimatePresence initial={false}>
                {showEmailForm && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card className="mt-4">
                      <CardContent className="pt-6">
                        <form onSubmit={handleEmailSignIn} className="space-y-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <div className="relative mt-1">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                className="pl-10 h-11"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                            <div className="relative mt-1">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                              <Input
                                type="password"
                                placeholder="••••••••"
                                className="pl-10 h-11"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <input type="checkbox" className="rounded" />
                              Remember me
                            </label>
                            <Link to="/forgot-password" className="text-primary-600 dark:text-primary-400 hover:underline">
                              Forgot password?
                            </Link>
                          </div>

                          <Button type="submit" variant="gradient" className="w-full h-11 rounded-full">
                            Sign in
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Legal + Join */}
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-3">
                By clicking Continue or Sign in, you agree to our{' '}
                <Link to="/terms" className="underline">User Agreement</Link>,{' '}
                <Link to="/privacy" className="underline">Privacy Policy</Link> and{' '}
                <Link to="/cookies" className="underline">Cookie Policy</Link>.
              </p>

              <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                New to InternCell?{' '}
                <Link to="/register" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  Join now
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Illustration (your provided image) */}
          <div className="relative hidden md:block">
            {/* Soft gradient blob behind image */}
            <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-secondary-500/10 blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
              <img
                src={SideArt}
                alt="People collaborating illustration"
                className="w-full h-full object-cover bg-white dark:bg-gray-900"
              />
            </div>

            {/* caption */}
            <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
              Find internships, jobs and volunteering opportunities that matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}