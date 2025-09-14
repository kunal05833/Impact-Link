import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'default', text = 'Loading...' }) => {
  const sizes = {
    small: { spinner: 32, dot: 4 },
    default: { spinner: 48, dot: 6 },
    large: { spinner: 64, dot: 8 }
  }

  const { spinner, dot } = sizes[size]

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative" style={{ width: spinner, height: spinner }}>
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner spinning gradient */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #8b5cf6, #3b82f6, transparent)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 4px))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 4px))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Center dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="bg-primary-600 rounded-full"
                style={{ width: dot, height: dot }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {text && (
        <motion.p
          className="mt-4 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

export default LoadingSpinner