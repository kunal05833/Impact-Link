import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  TrendingUp, Users, Clock, Award, 
  Calendar, Target, Activity, Zap 
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      icon: Clock,
      label: 'Total Hours',
      value: stats?.totalHours || '234',
      change: '+12%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      progress: 75
    },
    {
      icon: Award,
      label: 'Badges Earned',
      value: stats?.badges || '8',
      change: '+2',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      progress: 60
    },
    {
      icon: Users,
      label: 'People Helped',
      value: stats?.peopleHelped || '1.2K',
      change: '+234',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      progress: 85
    },
    {
      icon: Target,
      label: 'Goals Completed',
      value: stats?.goals || '15',
      change: '+3',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      progress: 90
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {stat.label}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>{stat.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${
                      stat.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' :
                      stat.color === 'text-purple-600' ? 'from-purple-500 to-purple-600' :
                      stat.color === 'text-green-600' ? 'from-green-500 to-green-600' :
                      'from-orange-500 to-orange-600'
                    }`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default DashboardStats