"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Code,
  Brain,
  Trophy,
  Users,
  Zap,
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target
} from "lucide-react"
import Link from "next/link"

const learningFeatures = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Follow carefully designed curricula that take you from beginner to expert level.",
    benefits: ["Step-by-step progression", "Prerequisites mapping", "Skill assessment"]
  },
  {
    icon: Code,
    title: "Interactive Coding Environment",
    description: "Write, test, and debug code directly in your browser with instant feedback.",
    benefits: ["Real-time execution", "Syntax highlighting", "Error explanations"]
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning recommendations based on your progress and goals.",
    benefits: ["Adaptive difficulty", "Smart recommendations", "Progress prediction"]
  },
  {
    icon: Trophy,
    title: "Gamified Experience",
    description: "Earn points, badges, and certificates as you complete challenges and courses.",
    benefits: ["Achievement system", "Leaderboards", "Progress rewards"]
  },
  {
    icon: Users,
    title: "Peer Learning",
    description: "Learn with others through study groups, code reviews, and collaborative projects.",
    benefits: ["Study groups", "Code reviews", "Project collaboration"]
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate feedback on your code and understanding with automated assessments.",
    benefits: ["Automated testing", "Instant results", "Detailed explanations"]
  }
]

const courseShowcase = [
  {
    title: "JavaScript Fundamentals",
    description: "Master the core concepts of JavaScript programming",
    level: "Beginner",
    duration: "6 weeks",
    students: 15420,
    rating: 4.8,
    icon: "🟨",
    featured: true
  },
  {
    title: "React Development",
    description: "Build modern web applications with React",
    level: "Intermediate",
    duration: "8 weeks",
    students: 12890,
    rating: 4.9,
    icon: "⚛️",
    featured: true
  },
  {
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis and machine learning",
    level: "Intermediate",
    duration: "10 weeks",
    students: 9870,
    rating: 4.7,
    icon: "🐍",
    featured: false
  }
]

const learningStats = [
  { label: "Interactive Courses", value: "50+", icon: BookOpen },
  { label: "Coding Challenges", value: "1200+", icon: Code },
  { label: "Learning Hours", value: "500+", icon: Clock },
  { label: "Success Rate", value: "95%", icon: Target }
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            >
              🎓 Master New Skills
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Learn at Your Own Pace
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of education with our interactive learning platform.
              Master programming, mathematics, and more with hands-on projects and instant feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/signup">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning Free
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/courses">
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Learning Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {learningStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          {/* Featured Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start your learning journey with our most popular and highly-rated courses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {courseShowcase.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {course.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}

                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{course.icon}</div>
                        <Badge variant="outline" className="capitalize">
                          {course.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-base">
                        {course.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students.toLocaleString()} students</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <Button className="hover:scale-105 transition-transform">
                          <Play className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Learning Platform?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the features that make learning more effective and enjoyable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-r from-primary/5 via-background to-blue-500/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Ready to Start Your Learning Journey?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of learners who are already mastering new skills with our interactive platform.
                  Get started today with our free courses and premium features.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/signup">
                    Start Learning Free
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/pricing">
                    View All Plans
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}