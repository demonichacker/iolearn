"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  Star,
  Award,
  BookOpen,
  CheckCircle,
  BarChart3,
  Zap,
  Medal,
  Crown
} from "lucide-react"

const userStats = {
  totalCourses: 12,
  completedCourses: 8,
  totalHours: 156,
  currentStreak: 15,
  badges: 23,
  rank: 1247,
  totalStudents: 25300
}

const currentCourses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    timeSpent: "12h 30m",
    nextLesson: "Higher-Order Components",
    category: "Frontend"
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    timeSpent: "8h 45m",
    nextLesson: "Authentication & JWT",
    category: "Backend"
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    progress: 60,
    totalLessons: 28,
    completedLessons: 17,
    timeSpent: "15h 20m",
    nextLesson: "Dynamic Programming",
    category: "Algorithms"
  }
]

const completedCourses = [
  {
    id: 4,
    title: "JavaScript Fundamentals",
    completedDate: "2024-01-15",
    grade: "A+",
    timeSpent: "25h 30m",
    certificate: true
  },
  {
    id: 5,
    title: "CSS Grid & Flexbox",
    completedDate: "2024-01-08",
    grade: "A",
    timeSpent: "18h 15m",
    certificate: true
  },
  {
    id: 6,
    title: "Python Basics",
    completedDate: "2023-12-20",
    grade: "A-",
    timeSpent: "22h 45m",
    certificate: true
  }
]

const achievements = [
  { id: 1, title: "First Course Completed", description: "Completed your first course", icon: "🎓", unlocked: true, date: "2023-12-01" },
  { id: 2, title: "Week Streak", description: "7 days learning streak", icon: "🔥", unlocked: true, date: "2023-12-08" },
  { id: 3, title: "Speed Learner", description: "Complete a course in under 2 weeks", icon: "⚡", unlocked: true, date: "2023-12-15" },
  { id: 4, title: "Perfect Score", description: "Get 100% on a quiz", icon: "💯", unlocked: false, progress: 85 },
  { id: 5, title: "Community Helper", description: "Help 50 fellow learners", icon: "🤝", unlocked: false, progress: 32 },
  { id: 6, title: "Master Coder", description: "Complete 50 courses", icon: "👑", unlocked: false, progress: 16 }
]

const weeklyActivity = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.1 },
  { day: "Fri", hours: 2.9 },
  { day: "Sat", hours: 5.2 },
  { day: "Sun", hours: 3.7 }
]

export default function ProgressPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Learning Progress
              </h1>
              <p className="text-muted-foreground mt-2">
                Track your achievements and continue your learning journey
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>
                <Trophy className="h-4 w-4 mr-2" />
                View Certificates
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{userStats.completedCourses}/{userStats.totalCourses}</p>
                    <p className="text-sm text-muted-foreground">Courses Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold">{userStats.totalHours}h</p>
                    <p className="text-sm text-muted-foreground">Hours Learned</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Zap className="h-8 w-8 text-orange-500" />
                  <div>
                    <p className="text-2xl font-bold">{userStats.currentStreak}</p>
                    <p className="text-sm text-muted-foreground">Day Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-8 w-8 text-purple-500" />
                  <div>
                    <p className="text-2xl font-bold">#{userStats.rank}</p>
                    <p className="text-sm text-muted-foreground">Global Rank</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Current Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Current Learning Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentCourses.map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{course.title}</h4>
                          <Badge variant="outline">{course.progress}%</Badge>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.timeSpent}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Weekly Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Weekly Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklyActivity.map((day, index) => (
                        <div key={day.day} className="flex items-center justify-between">
                          <span className="text-sm font-medium w-8">{day.day}</span>
                          <div className="flex-1 mx-4">
                            <div className="bg-muted rounded-full h-2">
                              <div
                                className="bg-primary rounded-full h-2 transition-all duration-500"
                                style={{ width: `${(day.hours / 6) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12">{day.hours}h</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {achievements.filter(a => a.unlocked).slice(0, 3).map((achievement) => (
                      <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentCourses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            Next: {course.nextLesson} • {course.timeSpent} spent
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Progress value={course.progress} className="flex-1 h-2" />
                            <span className="text-xs text-muted-foreground">{course.progress}%</span>
                          </div>
                        </div>
                        <Button>Continue</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Completed Courses</CardTitle>
                    <CardDescription>Your learning achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {completedCourses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              Completed {course.completedDate} • Grade: {course.grade}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{course.timeSpent}</Badge>
                          {course.certificate && (
                            <Button variant="outline" size="sm">
                              <Award className="h-3 w-3 mr-1" />
                              Certificate
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className={`relative ${achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20' : 'opacity-60'}`}>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>

                      {achievement.unlocked ? (
                        <Badge className="bg-green-500 hover:bg-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Unlocked
                        </Badge>
                      ) : (
                        <div className="space-y-2">
                          <Progress value={achievement.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">{achievement.progress}% complete</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Study Time</span>
                      <span className="font-semibold">{userStats.totalHours} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Courses Completed</span>
                      <span className="font-semibold">{userStats.completedCourses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Grade</span>
                      <span className="font-semibold">A-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Global Rank</span>
                      <span className="font-semibold">#{userStats.rank}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>January</span>
                        <span>8 courses</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>February</span>
                        <span>6 courses</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>March</span>
                        <span>4 courses</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>April</span>
                        <span>7 courses</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
