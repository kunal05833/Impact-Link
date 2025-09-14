import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, MapPin, Briefcase, Filter } from 'lucide-react'

const SearchBar = () => {
  const [searchType, setSearchType] = useState('all')

  const searchTypes = [
    { id: 'all', label: 'All' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'internships', label: 'Internships' },
  ]

  return (
    <div className="w-full space-y-4">
      {/* Search Type Tabs */}
      <div className="flex space-x-2">
        {searchTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSearchType(type.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              searchType === type.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Search Inputs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-4 rounded-2xl shadow-xl"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search keywords..."
              className="pl-10 h-12 bg-white dark:bg-gray-800 border-0"
            />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Location"
              className="pl-10 h-12 bg-white dark:bg-gray-800 border-0"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Filter size={20} />
            </Button>
            <Button variant="gradient" className="flex-1 h-12">
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SearchBar