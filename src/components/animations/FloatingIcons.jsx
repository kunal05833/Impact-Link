import { motion } from 'framer-motion'
import { 
  Heart, Users, Globe, Sparkles, 
  Award, Target, Zap, Star 
} from 'lucide-react'

const FloatingIcons = () => {
  const icons = [
    { Icon: Heart, color: 'text-red-500', size: 24, x: '10%', y: '20%', duration: 20 },
    { Icon: Users, color: 'text-blue-500', size: 20, x: '80%', y: '30%', duration: 25 },
    { Icon: Globe, color: 'text-green-500', size: 28, x: '70%', y: '70%', duration: 30 },
    { Icon: Sparkles, color: 'text-yellow-500', size: 22, x: '20%', y: '60%', duration: 22 },
    { Icon: Award, color: 'text-purple-500', size: 26, x: '90%', y: '10%', duration: 28 },
    { Icon: Target, color: 'text-orange-500', size: 24, x: '50%', y: '80%', duration: 24 },
    { Icon: Zap, color: 'text-indigo-500', size: 20, x: '30%', y: '40%', duration: 26 },
    { Icon: Star, color: 'text-pink-500', size: 22, x: '60%', y: '50%', duration: 23 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.color} opacity-10`}
          style={{ left: icon.x, top: icon.y }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
        >
          <icon.Icon size={icon.size} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingIcons