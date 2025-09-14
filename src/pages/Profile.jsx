import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProfileCard from '@/components/dashboard/ProfileCard'
import { 
  Camera, Edit2, Save, X, Plus, Trash2,
  Award, Clock, Users, Target, Link2
} from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  
  const [profileData, setProfileData] = useState({
    name: 'Arjun Kumar',
    role: 'Full Stack Developer & Volunteer',
    bio: 'Passionate about using technology for social good. Active volunteer in education and healthcare sectors.',
    location: 'Bangalore, India',
    email: 'arjun@example.com',
    phone: '+91 98765 43210',
    skills: ['React', 'Node.js', 'Teaching', 'Healthcare', 'Project Management'],
    languages: ['English', 'Hindi', 'Kannada'],
    availability: 'Weekends',
    interests: ['Education', 'Healthcare', 'Technology', 'Environment']
  })

  const achievements = [
    {
      id: 1,
      title: 'Top Contributor',
      description: 'Contributed 200+ hours in 2023',
      icon: '🏆',
      date: 'Dec 2023'
    },
    {
      id: 2,
      title: 'Tech Mentor',
      description: 'Mentored 50+ students in web development',
      icon: '👨‍🏫',
      date: 'Nov 2023'
    },
    {
      id: 3,
      title: '100 Hours Badge',
      description: 'Completed 100 volunteer hours',
      icon: '⏰',
      date: 'Oct 2023'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'Education Portal Development',
      organization: 'EduBright',
      role: 'Frontend Developer',
      duration: '3 months',
      impact: '500+ students',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Health Awareness Campaign',
      organization: 'HealthFirst',
      role: 'Tech Coordinator',
      duration: '2 months',
      impact: '1000+ people',
      status: 'ongoing'
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Button
              variant={isEditing ? "outline" : "gradient"}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard user={profileData} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Bio */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Bio</label>
                      {isEditing ? (
                        <textarea
                          value={profileData.bio}
                          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                          rows={4}
                        />
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{profileData.bio}</p>
                      )}
                    </div>

                    {/* Skills */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Skills</label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                            {isEditing && (
                              <button className="ml-2 text-red-500">
                                <X size={14} />
                              </button>
                            )}
                          </Badge>
                        ))}
                        {isEditing && (
                          <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Skill
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Languages</label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.languages.map((lang, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Availability</label>
                      {isEditing ? (
                        <select className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                          <option>Weekends</option>
                          <option>Weekdays</option>
                          <option>Flexible</option>
                          <option>Full-time</option>
                        </select>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{profileData.availability}</p>
                      )}
                    </div>

                    {isEditing && (
                      <div className="flex justify-end space-x-3">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button variant="gradient">
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>My Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <motion.div
                          key={achievement.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{achievement.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {achievement.description}
                              </p>
                              <p className="text-xs text-gray-500 mt-2">{achievement.date}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.map((project) => (
                        <div key={project.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{project.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {project.organization} • {project.role}
                              </p>
                            </div>
                            <Badge variant={project.status === 'completed' ? 'success' : 'default'}>
                              {project.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                              <span className="ml-2 font-medium">{project.duration}</span>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Impact:</span>
                              <span className="ml-2 font-medium">{project.impact}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Privacy Settings</h3>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span>Show profile to recruiters</span>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </label>
                        <label className="flex items-center justify-between">
                          <span>Receive opportunity notifications</span>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </label>
                        <label className="flex items-center justify-between">
                          <span>Make achievements public</span>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4">Connected Accounts</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Link2 className="w-4 h-4 mr-2" />
                          Connect LinkedIn
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Link2 className="w-4 h-4 mr-2" />
                          Connect GitHub
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4 text-red-600">Danger Zone</h3>
                      <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile