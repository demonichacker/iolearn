"use client"

import { Header } from "@/components/layout/Header"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { Footer } from "@/components/landing/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="h-4 w-4" />
              <span>Discover Our Features</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              Powerful Features for
              <br />
              Modern Learning
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Experience the future of education with our comprehensive suite of tools designed to accelerate your learning journey and make coding enjoyable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/signup">
                  Get Started Free
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8">
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of learners who are already using our platform to accelerate their coding journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/signup">
                  Start Learning Today
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8">
                <Link href="/courses">
                  Browse Courses
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}