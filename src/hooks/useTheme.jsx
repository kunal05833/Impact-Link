import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    // No stored value -> follow system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // Sync html class
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Optional: react to system changes if user hasn’t chosen manually
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const stored = localStorage.getItem('theme')
      if (!stored) {
        setTheme(mq.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}