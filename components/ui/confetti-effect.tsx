"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ConfettiPiece {
  id: number
  x: number
  color: string
  delay: number
}

export function ConfettiEffect() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = ["#fbbf24", "#3b82f6", "#ef4444", "#10b981", "#8b5cf6", "#f59e0b"]
    const pieces: ConfettiPiece[] = []

    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
      })
    }

    setConfetti(pieces)

    // Clean up after animation
    const timer = setTimeout(() => {
      setConfetti([])
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: "-10px",
          }}
          initial={{ y: -10, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 10,
            rotate: 720,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
