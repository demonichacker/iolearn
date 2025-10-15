"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, BookOpen, Code } from "lucide-react"
import { useProgress } from "@/contexts/ProgressContext"
import type { Course } from "@/types"

interface LessonSidebarProps {
  course: Course
  currentLessonIndex: number
  onLessonSelect: (index: number) => void
}

export function LessonSidebar({ course, currentLessonIndex, onLessonSelect }: LessonSidebarProps) {
  const { progress } = useProgress()

  const isLessonCompleted = (lessonId: string) => {
    return progress.some((p) => p.courseId === course.id && p.lessonId === lessonId && p.completed)
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "theory":
        return <BookOpen className="h-4 w-4" />
      case "practice":
        return <Code className="h-4 w-4" />
      case "quiz":
        return <Circle className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case "theory":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "practice":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "quiz":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Course header */}
      <div className="p-4 border-b bg-sidebar">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{course.icon}</div>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading font-semibold text-lg truncate">{course.title}</h2>
              <p className="text-sm text-muted-foreground">{course.lessons.length} lessons</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge
              variant="outline"
              className={`text-xs ${
                course.difficulty === "beginner"
                  ? "border-green-500 text-green-700"
                  : course.difficulty === "intermediate"
                    ? "border-yellow-500 text-yellow-700"
                    : "border-red-500 text-red-700"
              }`}
            >
              {course.difficulty}
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {course.estimatedTime}
            </Badge>
          </div>
        </div>
      </div>

      {/* Lessons list */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {course.lessons.map((lesson, index) => {
            const isCompleted = isLessonCompleted(lesson.id)
            const isCurrent = index === currentLessonIndex
            const isAccessible = index === 0 || isLessonCompleted(course.lessons[index - 1].id)

            return (
              <Button
                key={lesson.id}
                variant={isCurrent ? "secondary" : "ghost"}
                className={`w-full justify-start h-auto p-3 text-left ${
                  !isAccessible && !isCurrent ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => isAccessible && onLessonSelect(index)}
                disabled={!isAccessible && !isCurrent}
              >
                <div className="flex items-start space-x-3 w-full">
                  <div className="flex-shrink-0 mt-0.5">
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium truncate">
                        {index + 1}. {lesson.title}
                      </span>
                      <Badge className={`text-xs ml-2 ${getLessonTypeColor(lesson.type)}`}>{lesson.type}</Badge>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      {getLessonIcon(lesson.type)}
                      <span>{lesson.duration} min</span>
                    </div>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
