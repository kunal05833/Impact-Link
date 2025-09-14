import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Plus, Users, Briefcase, TrendingUp, Calendar,
  Eye, Edit, Trash2, Download, Filter
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const OrgDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    activeJobs: 12,
    totalApplications: 234,
    activeVolunteers: 45,
    completionRate: 89
  }

  const jobPostings = [
    {
      id: 1,
      title: 'Frontend Developer Volunteer',
      type: 'Volunteer',
      applications: 23,
      views: 156,
      status: 'active',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Community Health Worker',
      type: 'Job',
      applications: 45,
      views: 289,
      status: 'active',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Teaching Assistant',
      type: 'Internship',
      applications: 12,
      views: 98,
      status: 'paused',
      posted: '2 weeks ago'
    }
  ]

  const applicationData = [
    { day: 'Mon', applications: 12 },
    { day: 'Tue', applications: 19 },
    { day: 'Wed', applications: 15 },
    { day: 'Thu', applications: 25 },
    { day: 'Fri', applications: 22 },
    { day: 'Sat', applications: 30 },
    { day: 'Sun', applications: 28 }
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Organization Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your opportunities and track impact
              </p>
            </div>
            <Button variant="gradient">
              <Plus className="w-4 h-4 mr-2" />
              Post New Opportunity
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  <Badge variant="success">+3 this week</Badge>
                </div>
                <h3 className="text-2xl font-bold">{stats.activeJobs}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Postings</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-purple-600" />
                  <Badge variant="success">+23%</Badge>
                </div>
                <h3 className="text-2xl font-bold">{stats.totalApplications}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Applications</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-green-600" />
                  <Badge variant="success">+5</Badge>
                </div>
                <h3 className="text-2xl font-bold">{stats.activeVolunteers}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Volunteers</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                  <Badge variant="success">+2%</Badge>
                </div>
                <h3 className="text-2xl font-bold">{stats.completionRate}%</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="postings">Job Postings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Applications Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Applications This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={applicationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="applications" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'New application received', job: 'Frontend Developer', time: '2 hours ago' },
                      { action: 'Interview scheduled', job: 'Health Worker', time: '4 hours ago' },
                      { action: 'Volunteer onboarded', job: 'Teaching Assistant', time: '1 day ago' },
                      { action: 'Job posting expired', job: 'Data Analyst', time: '2 days ago' }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{activity.job}</p>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="postings">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Job Postings</CardTitle>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobPostings.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {job.views} views
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {job.applications} applications
                            </span>
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={job.status === 'active' ? 'success' : 'warning'}>
                            {job.status}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Applicant</th>
                        <th className="text-left p-4">Position</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Applied</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Priya Sharma', position: 'Frontend Developer', status: 'reviewing', date: '2 hours ago' },
                        { name: 'Rahul Kumar', position: 'Health Worker', status: 'shortlisted', date: '5 hours ago' },
                        { name: 'Anita Singh', position: 'Teaching Assistant', status: 'interviewed', date: '1 day ago' }
                      ].map((app, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                                {app.name.charAt(0)}
                              </div>
                              {app.name}
                            </div>
                          </td>
                          <td className="p-4">{app.position}</td>
                          <td className="p-4">
                            <Badge variant={
                              app.status === 'shortlisted' ? 'success' :
                              app.status === 'interviewed' ? 'warning' : 'default'
                            }>
                              {app.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-gray-600 dark:text-gray-400">{app.date}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">Message</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="volunteers">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Volunteers</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Arjun Patel', role: 'Frontend Developer', hours: 120, projects: 3 },
                    { name: 'Sneha Reddy', role: 'Teacher', hours: 200, projects: 5 },
                    { name: 'Vikram Shah', role: 'Health Worker', hours: 150, projects: 4 }
                  ].map((volunteer, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold mr-3">
                          {volunteer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold">{volunteer.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{volunteer.role}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold">{volunteer.hours}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Hours</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{volunteer.projects}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default OrgDashboard