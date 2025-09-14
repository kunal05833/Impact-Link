import axios from 'axios'
import { mockJobs, mockOrganizations, mockStats } from './mockData'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Mock API functions (replace with real API calls)
const api = {
  // Auth
  auth: {
    login: async (credentials) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        user: {
          id: 1,
          name: 'Arjun Kumar',
          email: credentials.email,
          role: 'volunteer'
        },
        token: 'mock-jwt-token'
      }
    },
    
    register: async (userData) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        user: {
          id: 2,
          ...userData
        },
        token: 'mock-jwt-token'
      }
    },
    
    logout: async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return { success: true }
    }
  },

  // Jobs/Opportunities
  jobs: {
    getAll: async (filters = {}) => {
      await new Promise(resolve => setTimeout(resolve, 800))
      return mockJobs
    },
    
    getById: async (id) => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return mockJobs.find(job => job.id === parseInt(id))
    },
    
    apply: async (jobId, applicationData) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        success: true,
        applicationId: Math.random().toString(36).substr(2, 9)
      }
    },
    
    search: async (query) => {
      await new Promise(resolve => setTimeout(resolve, 600))
      return mockJobs.filter(job => 
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.organization.toLowerCase().includes(query.toLowerCase())
      )
    }
  },

  // Organizations
  organizations: {
    getAll: async () => {
      await new Promise(resolve => setTimeout(resolve, 800))
      return mockOrganizations
    },
    
    getById: async (id) => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return mockOrganizations.find(org => org.id === parseInt(id))
    }
  },

  // User
  user: {
    getProfile: async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return {
        id: 1,
        name: 'Arjun Kumar',
        email: 'arjun@example.com',
        role: 'volunteer',
        stats: {
          hours: 234,
          projects: 15,
          badges: 8
        }
      }
    },
    
    updateProfile: async (updates) => {
      await new Promise(resolve => setTimeout(resolve, 800))
      return { success: true, ...updates }
    },
    
    getApplications: async () => {
      await new Promise(resolve => setTimeout(resolve, 700))
      return [
        {
          id: 1,
          jobId: 1,
          status: 'pending',
          appliedDate: '2024-01-15'
        }
      ]
    }
  },

  // Stats
  stats: {
    getDashboard: async () => {
      await new Promise(resolve => setTimeout(resolve, 600))
      return mockStats
    },
    
    getActivity: async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return {
        monthly: [
          { month: 'Jan', hours: 20 },
          { month: 'Feb', hours: 35 },
          { month: 'Mar', hours: 28 },
          { month: 'Apr', hours: 45 },
          { month: 'May', hours: 52 },
          { month: 'Jun', hours: 48 },
        ]
      }
    }
  },

  // Chat
  chat: {
    getConversations: async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return [
        {
          id: 1,
          participant: 'TechForGood NGO',
          lastMessage: 'Great! Looking forward to the interview',
          unread: 2
        }
      ]
    },
    
    sendMessage: async (conversationId, message) => {
      await new Promise(resolve => setTimeout(resolve, 300))
      return {
        id: Math.random().toString(36).substr(2, 9),
        message,
        timestamp: new Date()
      }
    }
  }
}

export default api