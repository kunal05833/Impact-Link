import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, Target, TrendingUp, Shield, Globe, Zap,
  Heart, Award, BookOpen, MessageCircle
} from 'lucide-react'

const FeatureCards = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: Users,
      title: "Smart Matching",
      description: "AI-powered algorithm matches you with perfect opportunities based on skills and interests",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Target,
      title: "Impact Tracking",
      description: "Track your volunteer hours, see your impact metrics, and earn verified certificates",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with NGOs and volunteers worldwide, collaborate on international projects",
      color: "from-green-500 to-teal-500",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Verified Organizations",
      description: "All organizations are verified and background-checked for your safety",
      color: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: Zap,
      title: "Quick Apply",
      description: "One-click applications with saved profiles and AI-generated cover letters",
      color: "from-indigo-500 to-purple-500",
      delay: 0.4
    },
    {
      icon: Award,
      title: "Skill Badges",
      description: "Earn digital badges for skills developed through volunteering",
      color: "from-yellow-500 to-orange-500",
      delay: 0.5
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">ImpactLink</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're not just another job board. We're building a movement of changemakers.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureCards