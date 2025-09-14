import { useState } from 'react'
import { motion } from 'framer-motion'
import JobCard from '@/components/listings/JobCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockJobs } from '@/lib/mockData'
import { 
  Search, Filter, MapPin, Briefcase, Clock, 
  ChevronDown, X, SlidersHorizontal 
} from 'lucide-react'

const Explore = () => {
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    location: 'all',
    category: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)

  const categories = ['All', 'Technology', 'Healthcare', 'Education', 'Environment', 'Social Work']
  const types = ['All', 'Volunteer', 'Job', 'Internship']
  const locations = ['All', 'Remote', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai']

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="gradient-text">Opportunities</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Find the perfect opportunity to make a difference
          </p>

          {/* Search Bar */}
          <div className="glass p-4 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by title, organization, or skill..."
                  className="pl-10 h-12"
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12"
              >
                <SlidersHorizontal size={20} className="mr-2" />
                Filters
                <ChevronDown size={16} className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
              <Button variant="gradient" className="h-12">
                Search
              </Button>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Type</label>
                    <select className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      {types.map(type => (
                        <option key={type} value={type.toLowerCase()}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <select className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      {locations.map(loc => (
                        <option key={loc} value={loc.toLowerCase()}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <select className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      {categories.map(cat => (
                        <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold">{mockJobs.length}</span> opportunities
            </p>
            <select className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Closing Soon</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Explore