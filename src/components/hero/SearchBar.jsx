import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, MapPin, Filter } from 'lucide-react'

/**
 * Props:
 * - defaultType: 'all' | 'volunteer' | 'jobs' | 'internships'
 * - defaultQuery: string
 * - defaultLocation: string
 * - onSearch: (payload) => void     // optional callback
 * - compact: boolean                // for tighter variant (Explore header)
 * - showFilterButton: boolean       // show Filter icon button (Explore)
 */
const SearchBar = ({
  defaultType = 'all',
  defaultQuery = '',
  defaultLocation = '',
  onSearch,
  compact = false,
  showFilterButton = false,
}) => {
  const navigate = useNavigate()
  const [searchType, setSearchType] = useState(defaultType)
  const [query, setQuery] = useState(defaultQuery)
  const [location, setLocation] = useState(defaultLocation)

  useEffect(() => {
    setSearchType(defaultType)
    setQuery(defaultQuery)
    setLocation(defaultLocation)
  }, [defaultType, defaultQuery, defaultLocation])

  const searchTypes = [
    { id: 'all', label: 'All' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'internships', label: 'Internships' },
  ]

  const handleSearch = () => {
    const payload = { type: searchType, q: query.trim(), loc: location.trim() }
    if (onSearch) onSearch(payload)
    else {
      const qs = new URLSearchParams(payload).toString()
      navigate(`/explore?${qs}`)
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Tabs */}
      <div className={`flex ${compact ? 'gap-2' : 'gap-2'}`}>
        {searchTypes.map((type) => {
          const active = searchType === type.id
          return (
            <button
              key={type.id}
              onClick={() => setSearchType(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${active
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {type.label}
            </button>
          )
        })}
      </div>

      {/* Inputs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`glass rounded-2xl ${compact ? 'p-3' : 'p-4'} shadow-xl`}
      >
        <div className="grid md:grid-cols-[1fr_1fr_auto] gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search by keywords (React, Teaching, Health)..."
              className="pl-9 h-12 bg-white dark:bg-gray-900 border-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Location (Remote, Delhi, Mumbai...)"
              className="pl-9 h-12 bg-white dark:bg-gray-900 border-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {showFilterButton && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                title="Filters"
                className="h-12 w-12"
                onClick={() => {
                  // parent page can handle via onSearch or local state
                  const evt = new CustomEvent('open-filters')
                  window.dispatchEvent(evt)
                }}
              >
                <Filter size={18} />
              </Button>
            )}
            <Button type="button" variant="gradient" className="h-12 px-8" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SearchBar