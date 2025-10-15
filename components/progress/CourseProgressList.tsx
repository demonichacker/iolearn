"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, BookOpen, Play, Brain } from "lucide-react"
import { courses } from "@/data/courses"
import { useProgress } from "@/contexts/ProgressContext"

interface CourseProgressListProps {
  detailed?: boolean
}

export function CourseProgressList({ detailed = false }: CourseProgressListProps) {
  const { getCourseProgress, progress } = useProgress()

  const coursesWithProgress = courses.map((course) => ({
    ...course,
    progress: getCourseProgress(course.id),
    completedLessons: progress.filter((p) => p.courseId === course.id && p.completed).length,
  }))

  // Sort by progress (highest first) for overview, or by title for detailed view
  const sortedCourses = detailed
    ? coursesWithProgress.sort((a, b) => a.title.localeCompare(b.title))
    : coursesWithProgress.sort((a, b) => b.progress - a.progress)

  const displayCourses = detailed ? sortedCourses : sortedCourses.slice(0, 6)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress</CardTitle>
        <CardDescription>{detailed ? "All courses and your progress" : "Your most active courses"}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <div className="text-2xl flex-shrink-0">{course.icon}</div>

              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium truncate">{course.title}</h3>
                  <div className="flex items-center space-x-2">
                    {course.progress === 100 && <CheckCircle className="h-4 w-4 text-green-600" />}
                    <span className="text-sm font-medium">{Math.round(course.progress)}%</span>
                  </div>
                </div>

                <Progress value={course.progress} className="h-2" />

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-3 w-3" />
                      <span>
                        {course.completedLessons}/{course.lessons.length} lessons
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.estimatedTime}</span>
                    </div>
                  </div>

                  {detailed && (
                    <div className="flex items-center space-x-2">
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/courses/${course.id}`}>
                          <Play className="h-3 w-3 mr-1" />
                          Continue
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/quiz/${course.id}`}>
                          <Brain className="h-3 w-3 mr-1" />
                          Quiz
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {!detailed && coursesWithProgress.length > 6 && (
            <div className="text-center pt-4">
              <Button asChild variant="outline">
                <Link href="/progress?tab=courses">View All Courses</Link>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
