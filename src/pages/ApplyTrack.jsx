import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileText, Clock, CheckCircle, XCircle, 
  Calendar, MapPin, Building, ArrowRight,
  MessageSquare, Download
} from 'lucide-react'

const ApplyTrack = () => {
  const [activeTab, setActiveTab] = useState('all')

  const applications = [
    {
      id: 1,
      position: 'Frontend Developer Volunteer',
      organization: 'TechForGood NGO',
      location: 'Remote',
      status: 'interview',
      appliedDate: '2024-01-15',
      lastUpdate: '2 days ago',
      progress: 75,
      nextStep: 'Final interview on Jan 25',
      timeline: [
        { stage: 'Applied', date: 'Jan 15', completed: true },
        { stage: 'Screening', date: 'Jan 18', completed: true },
        { stage: 'Interview', date: 'Jan 25', completed: false },
        { stage: 'Decision', date: 'TBD', completed: false }
      ]
    },
    {
      id: 2,
      position: 'Community Health Worker',
      organization: 'HealthFirst Foundation',
      location: 'Delhi, India',
      status: 'reviewing',
      appliedDate: '2024-01-20',
      lastUpdate: '1 day ago',
      progress: 25,
      nextStep: 'Under review',
      timeline: [
        { stage: 'Applied', date: 'Jan 20', completed: true },
        { stage: 'Screening', date: 'In Progress', completed: false },
        { stage: 'Interview', date: 'TBD', completed: false },
        { stage: 'Decision', date: 'TBD', completed: false }
      ]
    },
    {
      id: 3,
      position: 'Teaching Assistant',
      organization: 'EduBright',
      location: 'Mumbai, India',
      status: 'accepted',
      appliedDate: '2024-01-10',
      lastUpdate: '1 week ago',
      progress: 100,
      nextStep: 'Onboarding on Feb 1',
      timeline: [
        { stage: 'Applied', date: 'Jan 10', completed: true },
        { stage: 'Screening', date: 'Jan 12', completed: true },
        { stage: 'Interview', date: 'Jan 15', completed: true },
        { stage: 'Accepted', date: 'Jan 18', completed: true }
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'success'
      case 'rejected': return 'destructive'
      case 'interview': return 'warning'
      default: return 'default'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      case 'interview': return <Calendar className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Application Tracker</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and manage all your applications in one place
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Applied</p>
                </div>
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">In Review</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Interviews</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Accepted</p>
                </div>
                                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Applications</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-6">
              {applications.map((app) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="mb-4 lg:mb-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold">{app.position}</h3>
                            <Badge variant={getStatusColor(app.status)}>
                              {getStatusIcon(app.status)}
                              <span className="ml-1">{app.status}</span>
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {app.organization}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {app.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Applied {app.appliedDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Documents
                          </Button>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Application Progress</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{app.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${app.progress}%` }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          />
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-3">Application Timeline</h4>
                        <div className="flex justify-between">
                          {app.timeline.map((stage, index) => (
                            <div key={index} className="flex-1 text-center">
                              <div className="relative">
                                {index < app.timeline.length - 1 && (
                                  <div className={`absolute top-4 left-1/2 w-full h-0.5 ${
                                    stage.completed ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                                  }`} />
                                )}
                                <div className={`relative z-10 w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                                  stage.completed 
                                    ? 'bg-primary-500 text-white' 
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                                }`}>
                                  {stage.completed ? <CheckCircle size={16} /> : index + 1}
                                </div>
                              </div>
                              <p className="text-xs mt-2 font-medium">{stage.stage}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">{stage.date}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Next Step */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">Next Step</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{app.nextStep}</p>
                          </div>
                          <Button size="sm" variant="gradient">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="text-center py-12">
              <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-400">Active applications will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="interviews">
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-400">Scheduled interviews will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-400">Completed applications will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ApplyTrack