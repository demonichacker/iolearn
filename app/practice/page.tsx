"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Zap,
  Trophy,
  Target,
  Play,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Brain,
  Puzzle,
  TrendingUp,
  Award,
  Users
} from "lucide-react"
import Link from "next/link"

const practiceCategories = [
  {
    id: "algorithms",
    title: "Algorithms & Data Structures",
    description: "Master fundamental computer science concepts",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    challenges: 150,
    difficulty: "Intermediate",
    popular: true
  },
  {
    id: "javascript",
    title: "JavaScript Challenges",
    description: "Practice modern JavaScript programming",
    icon: Code,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    challenges: 200,
    difficulty: "Beginner to Advanced",
    popular: true
  },
  {
    id: "react",
    title: "React Components",
    description: "Build and test React components",
    icon: Puzzle,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    challenges: 120,
    difficulty: "Intermediate",
    popular: false
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Design scalable software systems",
    icon: Target,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    challenges: 80,
    difficulty: "Advanced",
    popular: false
  }
]

const featuredChallenges = [
  {
    id: 1,
    title: "Two Sum Problem",
    description: "Find two numbers in an array that add up to a target sum",
    difficulty: "Easy",
    category: "Algorithms",
    completions: 15420,
    avgTime: "15 min",
    points: 10,
    tags: ["Array", "Hash Table"]
  },
  {
    id: 2,
    title: "Binary Tree Traversal",
    description: "Implement inorder, preorder, and postorder traversal",
    difficulty: "Medium",
    category: "Data Structures",
    completions: 8920,
    avgTime: "25 min",
    points: 25,
    tags: ["Tree", "Recursion"]
  },
  {
    id: 3,
    title: "React Todo App",
    description: "Build a fully functional todo application with React",
    difficulty: "Medium",
    category: "React",
    completions: 12340,
    avgTime: "45 min",
    points: 50,
    tags: ["React", "State Management", "CRUD"]
  }
]

const practiceStats = [
  { label: "Coding Challenges", value: "500+", icon: Code },
  { label: "Practice Hours", value: "1000+", icon: Clock },
  { label: "Success Rate", value: "87%", icon: Target },
  { label: "Active Solvers", value: "25k+", icon: Users }
]

const userProgress = {
  totalSolved: 47,
  totalChallenges: 500,
  currentStreak: 12,
  bestStreak: 28,
  totalPoints: 2840,
  rank: 1250,
  percentile: 78
}

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

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
              🏆 Sharpen Your Skills
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Practice Makes Perfect
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Challenge yourself with our extensive collection of coding problems, algorithmic puzzles,
              and interactive exercises. Track your progress and climb the leaderboards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/signup">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Practicing
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/challenges">
                  Browse Challenges
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Practice Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {practiceStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Practice Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Practice Categories</h2>
                  <p className="text-muted-foreground">
                    Choose your focus area and start building your skills
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {practiceCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                              <category.icon className={`h-6 w-6 ${category.color}`} />
                            </div>
                            {category.popular && (
                              <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {category.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                            <span>{category.challenges} challenges</span>
                            <span>{category.difficulty}</span>
                          </div>
                          <Button className="w-full group-hover:scale-105 transition-transform">
                            Start Practicing
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Featured Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Featured Challenges</h2>
                  <p className="text-muted-foreground">
                    Try these popular challenges to test your skills
                  </p>
                </div>

                <div className="space-y-4">
                  {featuredChallenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                              <p className="text-muted-foreground text-sm mb-3">{challenge.description}</p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {challenge.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Badge
                              variant={challenge.difficulty === "Easy" ? "default" : challenge.difficulty === "Medium" ? "secondary" : "destructive"}
                              className="ml-4"
                            >
                              {challenge.difficulty}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4" />
                                <span>{challenge.completions.toLocaleString()} solved</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{challenge.avgTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{challenge.points} points</span>
                            </div>
                          </div>

                          <Button className="w-full hover:scale-105 transition-transform">
                            <Play className="h-4 w-4 mr-2" />
                            Solve Challenge
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Challenges Solved</span>
                      <span className="font-semibold">{userProgress.totalSolved}/{userProgress.totalChallenges}</span>
                    </div>
                    <Progress value={(userProgress.totalSolved / userProgress.totalChallenges) * 100} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{userProgress.currentStreak}</div>
                      <div className="text-xs text-muted-foreground">Current Streak</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{userProgress.totalPoints}</div>
                      <div className="text-xs text-muted-foreground">Total Points</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center text-sm">
                      <span>Global Rank</span>
                      <span className="font-semibold">#{userProgress.rank}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span>Percentile</span>
                      <span className="font-semibold">{userProgress.percentile}th</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Zap className="h-4 w-4 mr-2" />
                    Daily Challenge
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Trophy className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Award className="h-4 w-4 mr-2" />
                    Achievements
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Target className="h-4 w-4 mr-2" />
                    Practice Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Difficulty Levels */}
              <Card>
                <CardHeader>
                  <CardTitle>Difficulty Levels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Easy</span>
                    </div>
                    <span className="text-sm text-muted-foreground">120 solved</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">Medium</span>
                    </div>
                    <span className="text-sm text-muted-foreground">45 solved</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Hard</span>
                    </div>
                    <span className="text-sm text-muted-foreground">12 solved</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

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
                <h3 className="text-3xl font-bold">Ready to Test Your Skills?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of developers who are sharpening their coding skills daily.
                  Start with easy challenges and work your way up to complex problems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/signup">
                    Start Practicing
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/challenges">
                    Browse All Challenges
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