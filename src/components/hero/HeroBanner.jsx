// src/components/hero/HeroBanner.jsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import SearchBar from './SearchBar'
import AnimatedBackground from './AnimatedBackground'
import { Link } from 'react-router-dom'

// SAFE components
import ErrorBoundary from '@/components/animations/ErrorBoundary'
import LottieSafe from '@/components/animations/LottieSafe'

// Fallback animation (known-good)
import loadingAnim from '@/assets/lottie/loading.json'

// If your alias import fails, use relative path:
// import heroJsonUrl from '../../assets/lottie/hero-animation.json?url'
import heroJsonUrl from '@/assets/lottie/hero-animation.json?url'

const HeroBanner = () => {
  const [animData, setAnimData] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        // Fetch JSON via URL to ensure it's parsed as JSON (avoids invalid bundle parsing)
        const res = await fetch(heroJsonUrl)
        const data = await res.json()

        // Basic validation: must have layers[]
        const isValid =
          data && typeof data === 'object' && Array.isArray(data.layers)

        if (!cancelled) {
          if (isValid) {
            setAnimData(data)
            setStatus('ready')
          } else {
            console.error('Hero Lottie invalid: missing layers[]', data)
            setAnimData(loadingAnim)
            setStatus('error')
          }
        }
      } catch (e) {
        console.error('Failed to load hero-animation.json', e)
        if (!cancelled) {
          setAnimData(loadingAnim)
          setStatus('error')
        }
      }
    })()
    return () => { cancelled = true }
  }, [])

  return (
   <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span>1,234 Active Opportunities</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Find Your <span className="gradient-text">Purpose</span>
                <br /> Through Impact
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Connect with NGOs, apply for meaningful jobs, and volunteer globally.
                Make a difference while building your career.
              </p>
            </div>

           

         


<div className="flex flex-wrap gap-4">
  <Button asChild variant="gradient" size="lg" className="group">
    <Link to="/login">Get Started</Link>
  </Button>
 
</div>
          </motion.div>

          {/* Right - SAFE Lottie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl"></div>

            <ErrorBoundary
              fallback={
                <div className="w-full max-w-lg h-80 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                  Animation failed to load
                </div>
              }
            >
              <LottieSafe
                data={animData || loadingAnim}
                loop
                className="w-full max-w-lg mx-auto relative z-10"
              />
            </ErrorBoundary>

            {/* Status indicator (optional) */}
            {status !== 'ready' && (
              <div className="text-center text-xs mt-2 text-gray-500">
                {status === 'loading' ? 'Loading animation...' : 'Showing fallback animation'}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner