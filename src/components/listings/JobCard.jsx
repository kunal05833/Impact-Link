import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin, Clock, DollarSign, Users, Calendar,
  Heart, Share2, Bookmark, ArrowRight 
} from 'lucide-react'
import { useState } from 'react'

const JobCard = ({ job }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                {job.organization.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-primary-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.organization}</p>
              </div>
            </div>
            <Badge variant={job.type === 'Volunteer' ? 'success' : 'default'}>
              {job.type}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {job.description}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock size={16} className="mr-2" />
              {job.duration}
            </div>
            {job.salary && (
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <DollarSign size={16} className="mr-2" />
                {job.salary}
              </div>
            )}
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              {job.posted}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? 'text-red-500' : ''}
              >
                <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? 'text-yellow-500' : ''}
              >
                <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 size={18} />
              </Button>
            </div>
            <Button variant="gradient" className="group">
              Apply Now
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default JobCard