import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme.jsx'

export default function Navbar() {
  const location = useLocation()
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
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Chat', path: '/chat' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={[
          'h-16 flex items-center border-b transition-colors duration-300',
          scrolled
            ? // Scrolled -> solid surface (dark is actually dark)
              'backdrop-blur-md bg-white/90 dark:bg-[#0a0b10]/90 border-gray-200/70 dark:border-white/10 shadow-sm'
            : // At top -> still slightly translucent (but dark variant is dark)
              'backdrop-blur-md bg-white/50 dark:bg-[#0a0b10]/50 border-transparent'
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <span className="font-bold text-lg gradient-text">ImpactLink</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={[
                  'text-sm font-medium transition-colors',
                  location.pathname === l.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                ].join(' ')}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen((s) => !s)}
              className="text-gray-800 dark:text-gray-200"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Optional top scrim when at top for readability on bright hero */}
      {!scrolled && (
        <div className="pointer-events-none fixed top-16 inset-x-0 h-10 bg-gradient-to-b from-white/70 dark:from-black/40 to-transparent z-40" />
      )}

      {/* Mobile Sheet */}
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
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                ].join(' ')}
              >
                {l.name}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Button className="flex-1" variant="gradient">Get Started</Button>
              <Button variant="outline" size="icon" onClick={toggleTheme}
                className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}