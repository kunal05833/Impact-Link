import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { 
  Edit, Share2, Award, Clock, Users, 
  MapPin, Mail, Phone, Linkedin, Github 
} from 'lucide-react'

const ProfileCard = ({ user }) => {
  const userData = user || {
    name: 'Arjun Kumar',
    role: 'Full Stack Developer & Volunteer',
    location: 'Bangalore, India',
    email: 'arjun@example.com',
    phone: '+91 98765 43210',
    avatar: 'AK',
    level: 5,
    badges: ['Top Contributor', 'Tech Mentor', '100 Hours'],
    stats: {
      hours: 234,
      projects: 15,
      impact: '1.2K people'
    },
    skills: ['React', 'Node.js', 'Teaching', 'Healthcare'],
    bio: 'Passionate about using technology for social good. Active volunteer in education and healthcare sectors.'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
        
        <CardContent className="relative pt-16 pb-6">
          {/* Avatar */}
          <div className="absolute -top-12 left-6">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
                {userData.avatar}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button variant="outline" size="icon">
              <Edit size={16} />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 size={16} />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <Badge variant="gradient">Level {userData.level}</Badge>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">{userData.role}</p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-2" />
                {userData.location}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                {userData.email}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Phone size={16} className="mr-2" />
                {userData.phone}
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {userData.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-1 text-primary-600" />
                <p className="text-xl font-bold">{userData.stats.hours}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Hours</p>
              </div>
              <div className="text-center">
                <Award className="w-6 h-6 mx-auto mb-1 text-primary-600" />
                <p className="text-xl font-bold">{userData.stats.projects}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-1 text-primary-600" />
                <p className="text-xl font-bold">{userData.stats.impact}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Impact</p>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {userData.badges.map((badge, i) => (
                  <Badge key={i} variant="outline">
                    🏆 {badge}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProfileCard