import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, useTransform, useScroll } from 'framer-motion'

// Hook for scroll-based animations
export const useScrollAnimation = (options = {}) => {
  const { scrollYProgress } = useScroll(options)
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  
  return { scrollYProgress, scale, opacity, y }
}

// Hook for element in view animations
export const useInViewAnimation = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: options.threshold || 0.1,
    triggerOnce: options.triggerOnce !== false,
    ...options
  })
  
  const variants = {
    hidden: {
      opacity: 0,
      y: options.y || 20,
      scale: options.scale || 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: options.duration || 0.5,
        delay: options.delay || 0,
        ease: options.ease || 'easeOut',
      }
    }
  }
  
  return { ref, inView, variants }
}

// Hook for parallax effects
export const useParallax = (offset = 50) => {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  
  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, offset],
    { clamp: false }
  )
  
  return { ref, y }
}

// Hook for mouse position animations
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return mousePosition
}

// Hook for typewriter effect
export const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    let index = 0
    setIsTyping(true)
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, speed)
    
    return () => clearInterval(interval)
  }, [text, speed])
  
  return { displayText, isTyping }
}