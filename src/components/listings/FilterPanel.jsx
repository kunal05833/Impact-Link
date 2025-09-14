import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  SlidersHorizontal, X, MapPin, Briefcase, 
  Clock, DollarSign, Award, Filter,
  ChevronDown, ChevronUp, Search
} from 'lucide-react'

const FilterPanel = ({ onFilterChange, onClose, isOpen = true }) => {
  const [filters, setFilters] = useState({
    type: [],
    location: [],
    duration: [],
    skills: [],
    salary: { min: 0, max: 100000 },
    remote: false,
    urgentHiring: false
  })

  const [expandedSections, setExpandedSections] = useState({
    type: true,
    location: true,
    duration: true,
    skills: true,
    salary: true,
    additional: true
  })

  const filterOptions = {
    type: ['Volunteer', 'Job', 'Internship', 'Fellowship', 'Part-time', 'Full-time'],
    location: ['Remote', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad'],
    duration: ['< 1 month', '1-3 months', '3-6 months', '6-12 months', '1+ year', 'Flexible'],
    skills: ['Teaching', 'Healthcare', 'Technology', 'Marketing', 'Design', 'Writing', 'Management', 'Finance']
  }

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }))
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const clearFilters = () => {
    setFilters({
      type: [],
      location: [],
      duration: [],
      skills: [],
      salary: { min: 0, max: 100000 },
      remote: false,
      urgentHiring: false
    })
  }

  const applyFilters = () => {
    onFilterChange(filters)
    if (window.innerWidth < 768) {
      onClose()
    }
  }

  const activeFiltersCount = 
    filters.type.length + 
    filters.location.length + 
    filters.duration.length + 
    filters.skills.length +
    (filters.remote ? 1 : 0) +
    (filters.urgentHiring ? 1 : 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <SlidersHorizontal className="mr-2" size={20} />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="default" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={20} />
              </Button>
            </div>

            {/* Search within filters */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <Input
                placeholder="Search filters..."
                className="pl-9 h-9"
              />
            </div>
          </div>

          {/* Filter Sections */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Type Filter */}
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleSection('type')}
                className="flex items-center justify-between w-full mb-3 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium flex items-center">
                  <Briefcase size={16} className="mr-2" />
                  Opportunity Type
                </h3>
                {expandedSections.type ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                                {expandedSections.type && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {filterOptions.type.map(type => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer hover:text-primary-600 transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Location Filter */}
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleSection('location')}
                className="flex items-center justify-between w-full mb-3 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Location
                </h3>
                {expandedSections.location ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {expandedSections.location && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {filterOptions.location.map(location => (
                      <label key={location} className="flex items-center space-x-2 cursor-pointer hover:text-primary-600 transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.location.includes(location)}
                          onChange={() => toggleFilter('location', location)}
                          className="rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm">{location}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Duration Filter */}
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleSection('duration')}
                className="flex items-center justify-between w-full mb-3 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium flex items-center">
                  <Clock size={16} className="mr-2" />
                  Duration
                </h3>
                {expandedSections.duration ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {expandedSections.duration && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {filterOptions.duration.map(duration => (
                      <label key={duration} className="flex items-center space-x-2 cursor-pointer hover:text-primary-600 transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.duration.includes(duration)}
                          onChange={() => toggleFilter('duration', duration)}
                          className="rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm">{duration}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Skills Filter */}
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleSection('skills')}
                className="flex items-center justify-between w-full mb-3 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium flex items-center">
                  <Award size={16} className="mr-2" />
                  Skills Required
                </h3>
                {expandedSections.skills ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {expandedSections.skills && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filterOptions.skills.map(skill => (
                        <Badge
                          key={skill}
                          variant={filters.skills.includes(skill) ? "default" : "outline"}
                          className="cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => toggleFilter('skills', skill)}
                        >
                          {skill}
                          {filters.skills.includes(skill) && (
                            <X size={12} className="ml-1" />
                          )}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Salary Range (for jobs) */}
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleSection('salary')}
                className="flex items-center justify-between w-full mb-3 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium flex items-center">
                  <DollarSign size={16} className="mr-2" />
                  Salary Range (Monthly)
                </h3>
                {expandedSections.salary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {expandedSections.salary && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          Min: ₹{filters.salary.min.toLocaleString()}
                        </label>
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          Max: ₹{filters.salary.max.toLocaleString()}
                        </label>
                      </div>
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="5000"
                          value={filters.salary.min}
                          onChange={(e) => setFilters(prev => ({
                            ...prev,
                            salary: { ...prev.salary, min: parseInt(e.target.value) }
                          }))}
                          className="w-full accent-primary-600"
                        />
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="5000"
                          value={filters.salary.max}
                          onChange={(e) => setFilters(prev => ({
                            ...prev,
                            salary: { ...prev.salary, max: parseInt(e.target.value) }
                          }))}
                          className="w-full accent-primary-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Additional Filters */}
            <div>
              <button
                onClick={() => toggleSection('additional')}
                className="flex items-center justify-between w-full mb-3 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium flex items-center">
                  <Filter size={16} className="mr-2" />
                  Additional Filters
                </h3>
                {expandedSections.additional ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {expandedSections.additional && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 overflow-hidden"
                  >
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm">Remote Opportunities Only</span>
                      <input
                        type="checkbox"
                        checked={filters.remote}
                        onChange={(e) => setFilters(prev => ({ ...prev, remote: e.target.checked }))}
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm">Urgent Hiring</span>
                      <input
                        type="checkbox"
                        checked={filters.urgentHiring}
                        onChange={(e) => setFilters(prev => ({ ...prev, urgentHiring: e.target.checked }))}
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
            <Button onClick={applyFilters} variant="gradient" className="w-full">
              Apply Filters
              {activeFiltersCount > 0 && ` (${activeFiltersCount})`}
            </Button>
            <Button onClick={clearFilters} variant="outline" className="w-full">
              Clear All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FilterPanel