"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Clock, BookOpen, Brain } from "lucide-react"
import { useProgress } from "@/contexts/ProgressContext"

export function ProgressStats() {
  const { getStats } = useProgress()
  const stats = getStats()

  const statCards = [
    {
      title: "Lessons Completed",
      value: stats.totalLessonsCompleted,
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      description: "Total lessons finished",
    },
    {
      title: "Quizzes Taken",
      value: stats.totalQuizzesTaken,
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      description: "Knowledge assessments",
    },
    {
      title: "Average Score",
      value: `${Math.round(stats.averageScore)}%`,
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
      description: "Quiz performance",
    },
    {
      title: "Time Spent",
      value: `${Math.floor(stats.totalTimeSpent / 3600)}h`,
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900",
      description: "Learning hours",
    },
  ]

  const getPerformanceBadge = () => {
    const avgScore = stats.averageScore
    if (avgScore >= 90)
      return { label: "Excellent", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" }
    if (avgScore >= 80) return { label: "Good", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" }
    if (avgScore >= 70)
      return { label: "Fair", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" }
    return { label: "Improving", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" }
  }

  const performanceBadge = getPerformanceBadge()

  return (
    <div className="space-y-6">
      {/* Performance Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <Badge className={`text-lg px-4 py-2 ${performanceBadge.color}`}>
          <Trophy className="h-4 w-4 mr-2" />
          {performanceBadge.label} Performance
        </Badge>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
