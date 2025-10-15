"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Trophy,
  Target,
  Clock,
  Star,
  Zap,
  BookOpen,
  Users,
  Lock,
  Sparkles
} from "lucide-react"
import Link from "next/link"

const quizFeatures = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Questions adjust to your skill level for optimal challenge"
  },
  {
    icon: Trophy,
    title: "Instant Feedback",
    description: "Get immediate results and detailed explanations"
  },
  {
    icon: Target,
    title: "Progress Tracking",
    description: "Monitor your improvement across all subjects"
  },
  {
    icon: Clock,
    title: "Timed Challenges",
    description: "Race against time for extra excitement"
  }
]

const sampleQuizzes = [
  {
    title: "JavaScript Fundamentals",
    questions: 25,
    difficulty: "Intermediate",
    timeLimit: "30 min",
    rating: 4.8,
    attempts: 1250
  },
  {
    title: "React Components Quiz",
    questions: 20,
    difficulty: "Advanced",
    timeLimit: "25 min",
    rating: 4.9,
    attempts: 890
  },
  {
    title: "CSS Grid Mastery",
    questions: 15,
    difficulty: "Beginner",
    timeLimit: "20 min",
    rating: 4.7,
    attempts: 2100
  }
]

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            >
              🎯 Interactive Quizzes
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Test Your Knowledge
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Challenge yourself with our comprehensive quiz collection. From programming fundamentals to advanced concepts,
              our adaptive quizzes help you master new skills and track your progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/signup">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Learning Free
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/login">
                  Sign In to Continue
                </Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quizFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Sample Quizzes Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Popular Quizzes</h2>
              <p className="text-muted-foreground text-lg">See what our community is testing themselves on</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleQuizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                    {/* Lock overlay for non-authenticated users */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="text-center space-y-3">
                        <Lock className="h-8 w-8 text-muted-foreground mx-auto" />
                        <p className="text-sm font-medium">Sign up to unlock</p>
                        <Button size="sm" asChild>
                          <Link href="/signup">Get Started</Link>
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="outline">{quiz.questions} questions</Badge>
                            <Badge variant="outline">{quiz.difficulty}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{quiz.rating}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{quiz.timeLimit}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{quiz.attempts.toLocaleString()} attempts</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full w-3/4"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">75% avg score</span>
                        </div>
                      </div>
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
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Ready to Test Your Skills?</h3>
                <p className="text-lg text-muted-foreground">
                  Join thousands of developers who are leveling up their skills with our interactive quiz platform.
                  Track your progress, earn certificates, and climb the leaderboards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/signup">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Quizzing Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/courses">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Browse Courses First
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Quizzes Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50k+</div>
                  <div className="text-sm text-muted-foreground">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}