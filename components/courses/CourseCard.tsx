"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Play, Brain } from "lucide-react"
import type { Course } from "@/types"

interface CourseCardProps {
  course: Course
  progress: number
}

export function CourseCard({ course, progress }: CourseCardProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="text-3xl">{course.icon}</div>
            <Badge className={difficultyColors[course.difficulty]}>{course.difficulty}</Badge>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-xl font-heading line-clamp-2">{course.title}</CardTitle>
            <CardDescription className="line-clamp-3">{course.description}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.estimatedTime}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {course.lessons.length} lessons
            </div>
          </div>

          {progress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="flex gap-2">
            <Button asChild className="flex-1">
              <Link href={`/courses/${course.id}`}>
                <Play className="mr-2 h-4 w-4" />
                {progress > 0 ? "Continue" : "Start Course"}
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href={`/quiz/${course.id}`}>
                <Brain className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
