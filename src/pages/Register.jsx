import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Chrome, User, Building2, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import SideArt from '@/assets/images/auth/login-illustration.png'

export default function Register() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const initialRole = params.get('role') === 'organization' ? 'organization' : 'volunteer'

  const [role, setRole] = useState(initialRole)
  const [showPassword, setShowPassword] = useState(false)
  const [agree, setAgree] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
  })

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get('role')
    if (r === 'organization' || r === 'volunteer') setRole(r)
  }, [search])

  const updateRole = (r) => {
    setRole(r)
    const qs = new URLSearchParams({ role: r }).toString()
    navigate(`/register?${qs}`, { replace: true })
  }

  const onGoogle = () => {
    // TODO: integrate Google OAuth
    navigate(role === 'organization' ? '/org-dashboard' : '/dashboard')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!agree) return
    // TODO: integrate your API
    navigate(role === 'organization' ? '/org-dashboard' : '/dashboard')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Create your {role === 'organization' ? 'organization' : 'volunteer'} account
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Join the community of changemakers and start making an impact.
            </p>

            {/* Role toggle */}
            <div className="mt-6 inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <button
                onClick={() => updateRole('volunteer')}
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
                onClick={() => updateRole('organization')}
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

            {/* Google button */}
            <div className="mt-6">
              <button
                onClick={onGoogle}
                className="w-full h-12 rounded-full bg-[#0A66C2] hover:bg-[#0a5ab0] text-white font-medium
                           inline-flex items-center justify-center gap-2"
              >
                <Chrome className="h-5 w-5" />
                Continue with Google
              </button>
            </div>

            {/* OR */}
            <div className="my-4 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
              or sign up with email
              <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            </div>

            {/* Email form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="John Doe"
                    className="pl-10 h-11"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              {role === 'organization' && (
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Organization Name</label>
                  <div className="relative mt-1">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      placeholder="Your NGO/Company"
                      className="pl-10 h-11"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-11"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-11"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  className="mt-1 rounded"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-600 dark:text-primary-400 underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-600 dark:text-primary-400 underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <Button type="submit" variant="gradient" className="w-full h-11 rounded-full" disabled={!agree}>
                Create Account
              </Button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to={`/login?role=${role}`}
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT */}
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