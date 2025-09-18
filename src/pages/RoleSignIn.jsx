import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Chrome, Mail, User, Building2 } from 'lucide-react'
import SideArt from '@/assets/images/auth/login-illustration.png'

export default function RoleSignIn() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const initialRole = params.get('role') === 'organization' ? 'organization' : 'volunteer'
  const redirectTo = params.get('redirect') || '/dashboard'

  const [role, setRole] = useState(initialRole)

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get('role')
    if (r === 'organization' || r === 'volunteer') setRole(r)
  }, [search])

  const onGoogle = () => {
    // TODO: integrate Google OAuth
    navigate(redirectTo)
  }

  const onEmail = () => {
    navigate(`/login?role=${role}&redirect=${encodeURIComponent(redirectTo)}`)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Explore opportunities and grow your impact network
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Continue with Google, or choose your role and sign in with email.
            </p>

            {/* Role toggle */}
            <div className="mt-6 inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <button
                onClick={() => setRole('volunteer')}
                className={[
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  role === 'volunteer'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300',
                ].join(' ')}
              >
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" /> Volunteer
                </span>
              </button>
              <button
                onClick={() => setRole('organization')}
                className={[
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  role === 'organization'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300',
                ].join(' ')}
              >
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Organization
                </span>
              </button>
            </div>

            {/* CTAs */}
            <div className="mt-6 space-y-3">
              <button
                onClick={onGoogle}
                className="w-full h-12 rounded-full bg-[#0A66C2] hover:bg-[#0a5ab0] text-white font-medium
                           inline-flex items-center justify-center gap-2"
              >
                <Chrome className="h-5 w-5" />
                Continue with Google
              </button>

              <button
                onClick={onEmail}
                className="w-full h-12 rounded-full border border-gray-300 dark:border-gray-700
                           text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5 text-gray-500" />
                Sign in with email
              </button>
            </div>

            {/* Legal + Join */}
            <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-3">
              By clicking Continue or Sign in, you agree to our{' '}
              <Link to="/terms" className="underline">User Agreement</Link>,{' '}
              <Link to="/privacy" className="underline">Privacy Policy</Link> and{' '}
              <Link to="/cookies" className="underline">Cookie Policy</Link>.
            </p>

            <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              New to InternCell?{' '}
              <Link
                to={`/register?role=${role}`}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Join now
              </Link>
            </div>
          </div>

          {/* RIGHT illustration */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-secondary-500/10 blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
              <img
                src={SideArt}
                alt="People collaborating illustration"
                className="w-full h-full object-cover bg-white dark:bg-gray-900"
              />
            </div>

            <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
              Find internships, jobs and volunteering opportunities that matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}