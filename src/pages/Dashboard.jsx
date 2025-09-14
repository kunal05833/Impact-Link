import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, Clock, Award, TrendingUp, Calendar,
  FileText, Users, Target, Activity
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const stats = [
    { icon: Clock, label: 'Total Hours', value: '234', change: '+12%', color: 'text-blue-600' },
    { icon: Award, label: 'Badges Earned', value: '8', change: '+2', color: 'text-purple-600' },
    { icon: Users, label: 'People Helped', value: '1.2K', change: '+234', color: 'text-green-600' },
    { icon: Target, label: 'Goals Completed', value: '15', change: '+3', color: 'text-orange-600' },
  ]

  const activityData = [
    { month: 'Jan', hours: 20 },
    { month: 'Feb', hours: 35 },
    { month: 'Mar', hours: 28 },
    { month: 'Apr', hours: 45 },
    { month: 'May', hours: 52 },
    { month: 'Jun', hours: 48 },
  ]

  const applications = [
    { id: 1, position: 'Frontend Developer', org: 'TechForGood', status: 'pending', date: '2 days ago' },
    { id: 2, position: 'Teaching Assistant', org: 'EduBright', status: 'accepted', date: '1 week ago' },
    { id: 3, position: 'Health Worker', org: 'HealthFirst', status: 'interview', date: '3 days ago' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, Arjun! 👋</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's your impact summary and recent activities
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="success" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Volunteer Activity</span>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Applications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Applications</span>
                  <FileText className="w-5 h-5 text-gray-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div>
                        <p className="font-medium">{app.position}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{app.org}</p>
                      </div>
                      <Badge
                        variant={
                          app.status === 'accepted' ? 'success' :
                          app.status === 'interview' ? 'warning' : 'default'
                        }
                      >
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">
                  View All Applications →
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col">
                  <Calendar className="mb-2" />
                                    <span>Schedule Interview</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <FileText className="mb-2" />
                  <span>Update Resume</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <Award className="mb-2" />
                  <span>View Certificates</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard