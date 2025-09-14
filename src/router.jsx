import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Dashboard from './pages/Dashboard'
import OrgDashboard from './pages/OrgDashboard'
import ApplyTrack from './pages/ApplyTrack'
import ChatHub from './pages/ChatHub'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'explore',
        element: <Explore />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'org-dashboard',
        element: <OrgDashboard />
      },
      {
        path: 'applications',
        element: <ApplyTrack />
      },
      {
        path: 'chat',
        element: <ChatHub />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

export default router