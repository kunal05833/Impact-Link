// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme.jsx'
import ProfileMenu from '@/components/layout/ProfileMenu'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Organizations', path: '/organizations' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Chat', path: '/chat' },
  ]

  const linkClass = (path) =>
    [
      'text-sm font-medium transition-colors',
      location.pathname === path
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400',
    ].join(' ')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={[
          'h-16 flex items-center border-b transition-colors duration-300',
          scrolled
            ? 'backdrop-blur-md bg-white/90 dark:bg-[#0a0b10]/90 border-gray-200/70 dark:border-white/10 shadow-sm'
            : 'backdrop-blur-md bg-white/50 dark:bg-[#0a0b10]/50 border-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-bold">IC</span>
            </div>
            <span className="font-bold text-lg gradient-text">InternCell</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className={linkClass(l.path)}>
                {l.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            <Button asChild variant="gradient" className="shadow-lg" onClick={() => navigate('/login')}>
              <Link to="/login">Get Started</Link>
            </Button>

            {/* Popup user menu (no duplicate logo) */}
            <ProfileMenu />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((s) => !s)}
              className="text-gray-800 dark:text-gray-200"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0a0b10]/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
          <div className="px-4 pb-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setIsOpen(false)}
                className={[
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === l.path
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
                ].join(' ')}
              >
                {l.name}
              </Link>
            ))}

            {/* Quick actions */}
            <div className="pt-2 flex gap-2">
              <Button
                asChild
                className="flex-1"
                variant="gradient"
                onClick={() => {
                  setIsOpen(false)
                  navigate('/login')
                }}
              >
                <Link to="/login">Get Started</Link>
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
                aria-label="Profile"
              >
                <Link to="/profile"> <User size={16} /> </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}