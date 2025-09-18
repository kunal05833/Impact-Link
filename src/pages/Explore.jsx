// src/pages/Explore.jsx
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import JobCard from '@/components/listings/JobCard'
import SearchBar from '@/components/hero/SearchBar'
import { Button } from '@/components/ui/button'
import { mockJobs } from '@/lib/mockData'
import MapView from '@/components/listings/MapView'
import { MapPin } from 'lucide-react'

export default function Explore() {
  const locationHook = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(locationHook.search)

  const qp = {
    type: params.get('type') || 'all',
    q: params.get('q') || '',
    loc: params.get('loc') || '',
    category: params.get('category') || 'all',
  }

  const [filters, setFilters] = useState(qp)
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    setFilters(qp)
  }, [locationHook.search])

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const typeOK =
        filters.type === 'all' ||
        job.type.toLowerCase().includes(filters.type.replace('jobs', 'job'))

      const qOK =
        !filters.q ||
        job.title.toLowerCase().includes(filters.q.toLowerCase()) ||
        job.organization.toLowerCase().includes(filters.q.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(filters.q.toLowerCase()))

      const locOK =
        !filters.loc ||
        job.location.toLowerCase().includes(filters.loc.toLowerCase()) ||
        (filters.loc.toLowerCase() === 'remote' && job.location.toLowerCase().includes('remote'))

      const catOK =
        filters.category === 'all' ||
        job.category?.toLowerCase() === filters.category.toLowerCase() ||
        job.skills.some((s) => s.toLowerCase() === filters.category.toLowerCase())

      return typeOK && qOK && locOK && catOK
    })
  }, [filters])

  const handleSearch = (payload) => {
    const qs = new URLSearchParams(payload)
    if (filters.category && filters.category !== 'all') qs.set('category', filters.category)
    navigate(`/explore?${qs.toString()}`)
  }

  return (
    <div className="min-h-screen">
      {/* Header + Search */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Explore <span className="gradient-text">Opportunities</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Use tabs, keywords, and location to find the right opportunity
          </p>

          <SearchBar
            defaultType={filters.type}
            defaultQuery={filters.q}
            defaultLocation={filters.loc}
            onSearch={handleSearch}
            compact
            showFilterButton
          />
        </div>
      </section>

      {/* Optional Map View */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold">{filteredJobs.length}</span> opportunities
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowMap((s) => !s)}
                className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-2"
              >
                <MapPin size={16} />
                {showMap ? 'Hide Map' : 'Map View'}
              </button>
              <select
                className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
                onChange={(e) => {
                  const val = e.target.value
                  if (val === 'recent') navigate(locationHook.pathname + locationHook.search)
                }}
              >
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>

          {showMap && (
            <div className="mb-8">
              <MapView opportunities={filteredJobs} />
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}