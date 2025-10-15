"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Code,
  Trophy,
  Clock,
  TrendingUp,
  Play,
  CheckCircle,
  Star,
  Target,
  Calendar
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const { user } = useAuth()

  // Mock data - in a real app, this would come from your backend
  const userStats = {
    coursesCompleted: 3,
    totalCourses: 8,
    currentStreak: 7,
    totalHours: 24,
    achievements: 5,
    level: 2
  }

  const recentCourses = [
    {
      id: "1",
      title: "JavaScript Fundamentals",
      progress: 75,
      lastAccessed: "2 hours ago",
      nextLesson: "Functions & Scope"
    },
    {
      id: "2",
      title: "React Basics",
      progress: 45,
      lastAccessed: "1 day ago",
      nextLesson: "Components & Props"
    },
    {
      id: "3",
      title: "Python for Beginners",
      progress: 90,
      lastAccessed: "3 days ago",
      nextLesson: "File Handling"
    }
  ]

  const achievements = [
    { name: "First Steps", description: "Completed your first lesson", icon: "🎯" },
    { name: "Week Warrior", description: "7 day learning streak", icon: "🔥" },
    { name: "Code Master", description: "Completed 5 coding challenges", icon: "💻" },
    { name: "Quick Learner", description: "Finished a course in 3 days", icon: "⚡" },
    { name: "Consistent", description: "30 days of learning", icon: "📅" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to continue your learning journey? Here's what's happening with your progress.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.coursesCompleted}</div>
                <p className="text-sm text-muted-foreground">Courses Completed</p>
                <Progress value={(userStats.coursesCompleted / userStats.totalCourses) * 100} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.currentStreak}</div>
                <p className="text-sm text-muted-foreground">Day Streak</p>
                <div className="text-lg">🔥</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.totalHours}h</div>
                <p className="text-sm text-muted-foreground">Learning Time</p>
                <div className="text-lg">⏰</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.achievements}</div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <div className="text-lg">🏆</div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Continue Learning */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Continue Learning
                  </CardTitle>
                  <CardDescription>
                    Pick up where you left off in your courses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={course.progress} className="flex-1" />
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/courses/${course.id}`}>
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Link>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col gap-2" asChild>
                      <Link href="/courses">
                        <BookOpen className="h-6 w-6" />
                        Browse Courses
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2" asChild>
                      <Link href="/playground">
                        <Code className="h-6 w-6" />
                        Code Playground
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2" asChild>
                      <Link href="/quizzes">
                        <Trophy className="h-6 w-6" />
                        Take Quiz
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2" asChild>
                      <Link href="/progress">
                        <TrendingUp className="h-6 w-6" />
                        View Progress
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Level {userStats.level}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to Level {userStats.level + 1}</span>
                      <span>2,450 / 3,000 XP</span>
                    </div>
                    <Progress value={81.7} />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <p className="font-medium text-sm">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">React Workshop</p>
                      <p className="text-xs text-muted-foreground">Tomorrow at 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Code Review Session</p>
                      <p className="text-xs text-muted-foreground">Friday at 10:00 AM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}