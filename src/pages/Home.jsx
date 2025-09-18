import HeroBanner from '@/components/hero/HeroBanner'
import FeatureCards from '@/components/features/FeatureCards'
import JobCard from '@/components/listings/JobCard'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { mockJobs } from '@/lib/mockData'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryChips from '@/components/features/CategoryChips'

const Home = () => {
  return (
    <div className="min-h-screen ">
      <HeroBanner />
      <FeatureCards />

       <CategoryChips />

       
      
      {/* Latest Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
              <Sparkles size={16} className="mr-2" />
              <span className="text-sm font-medium">Fresh Opportunities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover meaningful ways to contribute and grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mockJobs.slice(0, 6).map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="gradient" size="lg" className="group">
              View All Opportunities
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of changemakers already making a difference
            </p>
   <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100 mr-1">
  <Link to="/register?role=volunteer">Sign Up as Volunteer</Link>
</Button>
<Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100 ml-1">
  <Link to="/register?role=organization">Register Organization</Link>
</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home