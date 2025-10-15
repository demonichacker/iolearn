"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-primary/3 via-transparent to-primary/3" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            Start Your Journey Today
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight"
          >
            Ready to Level Up Your Skills?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of developers who are advancing their careers with our interactive learning platform. Start
            with our free courses and unlock your potential today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button asChild size="lg" className="text-lg px-10 py-7 group shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            No credit card required • Free forever plan available
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
