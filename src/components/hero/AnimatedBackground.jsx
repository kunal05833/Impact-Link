import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const floatingElements = [
    { size: 300, duration: 20, delay: 0, x: '10%', y: '20%', color: 'primary' },
    { size: 200, duration: 25, delay: 5, x: '80%', y: '60%', color: 'secondary' },
    { size: 150, duration: 30, delay: 10, x: '50%', y: '80%', color: 'primary' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      
      {/* Floating Orbs */}
      {floatingElements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-20 ${
            element.color === 'primary' 
              ? 'bg-primary-500' 
              : 'bg-secondary-500'
          }`}
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

export default AnimatedBackground