"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className = "text-4xl md:text-5xl font-bold text-primary"
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (hasAnimated) return // Prevent multiple animations

    // Start animation either when in view or after a short delay as fallback
    const startAnimation = () => {
      setHasAnimated(true)
      const steps = 60
      const increment = value / steps
      let step = 0

      const timer = setInterval(() => {
        step++
        const current = Math.min(value, step * increment)

        if (step >= steps || current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }

    if (isInView) {
      startAnimation()
    } else {
      // Fallback: start animation after 500ms if not triggered by intersection observer
      const fallbackTimer = setTimeout(() => {
        if (!hasAnimated) { // Only start if animation hasn't begun
          startAnimation()
        }
      }, 500)

      return () => clearTimeout(fallbackTimer)
    }
  }, [value, duration, isInView, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}