"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { useProgress } from "@/contexts/ProgressContext"
import { courses } from "@/data/courses"

interface ProgressChartsProps {
  detailed?: boolean
}

export function ProgressCharts({ detailed = false }: ProgressChartsProps) {
  const { progress, quizResults, getCourseProgress } = useProgress()

  // Course progress data
  const courseProgressData = courses.map((course) => ({
    name: course.title.length > 15 ? course.title.substring(0, 15) + "..." : course.title,
    fullName: course.title,
    progress: getCourseProgress(course.id),
    icon: course.icon,
  }))

  // Quiz scores over time
  const quizScoreData = quizResults
    .sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())
    .map((result, index) => ({
      quiz: `Quiz ${index + 1}`,
      score: Math.round((result.score / result.totalQuestions) * 100),
      date: new Date(result.completedAt).toLocaleDateString(),
    }))

  // Category distribution
  const categoryData = [
    {
      name: "Programming",
      value: courses.filter((c) => c.category === "programming").length,
      color: "#3b82f6",
    },
    {
      name: "School",
      value: courses.filter((c) => c.category === "school").length,
      color: "#10b981",
    },
  ]

  // Weekly activity (mock data for demonstration)
  const weeklyActivityData = [
    { day: "Mon", lessons: 2, quizzes: 1 },
    { day: "Tue", lessons: 3, quizzes: 0 },
    { day: "Wed", lessons: 1, quizzes: 2 },
    { day: "Thu", lessons: 4, quizzes: 1 },
    { day: "Fri", lessons: 2, quizzes: 3 },
    { day: "Sat", lessons: 5, quizzes: 2 },
    { day: "Sun", lessons: 1, quizzes: 1 },
  ]

  return (
    <div className="space-y-6">
      {/* Course Progress Chart */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>Your completion progress across all courses</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                progress: {
                  label: "Progress",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseProgressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="progress" fill="var(--color-progress)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>

      {detailed && (
        <>
          {/* Quiz Scores Over Time */}
          {quizScoreData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Performance</CardTitle>
                  <CardDescription>Your quiz scores over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      score: {
                        label: "Score (%)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={quizScoreData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quiz" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="var(--color-score)"
                          strokeWidth={3}
                          dot={{ fill: "var(--color-score)", strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your learning activity throughout the week</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    lessons: {
                      label: "Lessons",
                      color: "hsl(var(--chart-3))",
                    },
                    quizzes: {
                      label: "Quizzes",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="lessons" fill="var(--color-lessons)" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="quizzes" fill="var(--color-quizzes)" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Course Categories</CardTitle>
                <CardDescription>Distribution of courses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    programming: {
                      label: "Programming",
                      color: "#3b82f6",
                    },
                    school: {
                      label: "School",
                      color: "#10b981",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  )
}
