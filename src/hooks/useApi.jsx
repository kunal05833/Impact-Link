import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Custom hook for API calls
export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await api.get(endpoint)
      setData(response.data)
      setError(null)
    } catch (err) {
      setError(err.message)
      toast.error('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!options.manual) {
      fetchData()
    }
  }, [endpoint])

  return { data, loading, error, refetch: fetchData }
}

// Hook for GET requests with React Query
export const useApiQuery = (key, endpoint, options = {}) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await api.get(endpoint)
      return response.data
    },
    ...options
  })
}

// Hook for mutations (POST, PUT, DELETE)
export const useApiMutation = (method, endpoint, options = {}) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api[method](endpoint, data)
      return response.data
    },
    onSuccess: (data) => {
      toast.success(options.successMessage || 'Operation successful')
      options.onSuccess?.(data)
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Operation failed')
      options.onError?.(error)
    },
    ...options
  })
}

export default api