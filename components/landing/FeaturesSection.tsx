"use client"

import { motion } from "framer-motion"
import { Code, Brain, Trophy, Users, Zap, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Code,
    title: "Interactive Code Playground",
    description:
      "Write, test, and debug code directly in your browser with our advanced code editor and real-time execution.",
    color: "text-blue-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Get personalized learning paths and instant feedback powered by advanced AI algorithms.",
    color: "text-purple-500",
  },
  {
    icon: Trophy,
    title: "Gamified Quizzes",
    description: "Test your knowledge with interactive quizzes featuring instant feedback and celebration animations.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join thousands of learners, share progress, and learn together in our supportive community.",
    color: "text-green-500",
  },
  {
    icon: Zap,
    title: "Fast Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and exportable progress reports.",
    color: "text-orange-500",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "Access structured learning paths covering everything from basics to advanced topics.",
    color: "text-indigo-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
            ✨ Powerful Features
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of learning with our cutting-edge features designed to accelerate your growth and make coding enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20`}>
                    <feature.icon className={`w-7 h-7 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
