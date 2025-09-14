import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const StatsCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: 10234, label: 'Active Volunteers', suffix: '+', prefix: '' },
    { value: 567, label: 'Partner Organizations', suffix: '+', prefix: '' },
    { value: 45678, label: 'Hours Contributed', suffix: '', prefix: '' },
    { value: 95, label: 'Success Rate', suffix: '%', prefix: '' },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter