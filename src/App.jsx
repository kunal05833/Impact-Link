import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './hooks/useTheme.jsx'
import Organizations from '@/pages/Organizations'


// Layout
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Pages (non-critical pages normal import)
import Home from '@/pages/Home'
import Explore from '@/pages/Explore'
import Dashboard from '@/pages/Dashboard'
import OrgDashboard from '@/pages/OrgDashboard'
import ApplyTrack from '@/pages/ApplyTrack'
import ChatHub from '@/pages/ChatHub'
import Profile from '@/pages/Profile'


// Lazy load Login/Register so they load only on click
const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))

const queryClient = new QueryClient()

function NotFound() {
  return (
    <div className="pt-16 p-6">
      <h1 className="text-2xl font-bold">404 - Page not found</h1>
      <p className="text-gray-600 dark:text-gray-400">The page you are looking for doesn’t exist.</p>
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Navbar />

        {/* Navbar fixed: push content down */}
        <main className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-950">
          <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/org-dashboard" element={<OrgDashboard />} />
              <Route path="/applications" element={<ApplyTrack />} />
              <Route path="/chat" element={<ChatHub />} />
              <Route path="/profile" element={<Profile />} />

              {/* These two load only when route hits */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
               

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <Footer />
        </main>

        <Toaster position="top-right" />
      </ThemeProvider>
    </QueryClientProvider>
  )
}