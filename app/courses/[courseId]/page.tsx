"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { LearningLayout } from "@/components/learning/LearningLayout"
import { LessonContent } from "@/components/learning/LessonContent"
import { courses } from "@/data/courses"
import { useProgress } from "@/contexts/ProgressContext"
import type { Course, Lesson } from "@/types"

export default function CoursePage() {
  const params = useParams()
  const courseId = params.courseId as string
  const [course, setCourse] = useState<Course | null>(null)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const { progress, updateProgress } = useProgress()

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId)
    if (foundCourse) {
      setCourse(foundCourse)

      // Find the last completed lesson or start from beginning
      const courseProgress = progress.filter((p) => p.courseId === courseId)
      const lastCompletedIndex = courseProgress
        .filter((p) => p.completed)
        .reduce((max, p) => {
          const lessonIndex = foundCourse.lessons.findIndex((l) => l.id === p.lessonId)
          return Math.max(max, lessonIndex)
        }, -1)

      setCurrentLessonIndex(Math.min(lastCompletedIndex + 1, foundCourse.lessons.length - 1))
    }
  }, [courseId, progress])

  const handleLessonSelect = (lessonIndex: number) => {
    setCurrentLessonIndex(lessonIndex)
  }

  const handleLessonComplete = (lesson: Lesson, timeSpent: number) => {
    if (!course) return

    updateProgress({
      userId: "current-user", // In real app, get from auth context
      courseId: course.id,
      lessonId: lesson.id,
      completed: true,
      timeSpent,
      completedAt: new Date(),
    })

    // Auto-advance to next lesson if available
    if (currentLessonIndex < course.lessons.length - 1) {
      setTimeout(() => {
        setCurrentLessonIndex(currentLessonIndex + 1)
      }, 1000)
    }
  }

  if (!course) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-heading">Course not found</h1>
            <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  const currentLesson = course.lessons[currentLessonIndex]

  return (
    <ProtectedRoute>
      <LearningLayout course={course} currentLessonIndex={currentLessonIndex} onLessonSelect={handleLessonSelect}>
        <motion.div
          key={currentLesson.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <LessonContent
            lesson={currentLesson}
            course={course}
            onComplete={(timeSpent) => handleLessonComplete(currentLesson, timeSpent)}
            isCompleted={progress.some(
              (p) => p.courseId === course.id && p.lessonId === currentLesson.id && p.completed,
            )}
          />
        </motion.div>
      </LearningLayout>
    </ProtectedRoute>
  )
}
