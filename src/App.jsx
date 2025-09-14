import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './hooks/useTheme'

// Pages
import Home from './pages/Home'
import Explore from './pages/Explore'
import Dashboard from './pages/Dashboard'
import OrgDashboard from './pages/OrgDashboard'
import ApplyTrack from './pages/ApplyTrack'
import ChatHub from './pages/ChatHub'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/org-dashboard" element={<OrgDashboard />} />
                <Route path="/applications" element={<ApplyTrack />} />
                <Route path="/chat" element={<ChatHub />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App