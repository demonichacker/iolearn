"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const stats = [
  { label: "Developers", value: 25000, suffix: "+" },
  { label: "Countries", value: 120, suffix: "+" },
  { label: "Companies", value: 500, suffix: "+" },
  { label: "Projects Built", value: 150000, suffix: "+" },
]

export function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-r from-primary/5 via-background to-blue-500/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-primary/2 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
          >
            📊 Growing Community
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our growing community of learners who are advancing their careers with our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                <div className="mb-2 md:mb-4">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary"
                  />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
                {/* Decorative element */}
                <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto mt-2 md:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
