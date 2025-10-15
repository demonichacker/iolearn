"use client"

import { useState, Suspense } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, BookOpen, Code, Play, Loader2 } from "lucide-react"
import type { Course, Lesson } from "@/types"

// Dynamically import CodePlayground for better performance
const CodePlayground = dynamic(() => import("@/components/code/CodePlayground"), {
  loading: () => (
    <Card className="w-full">
      <CardContent className="flex items-center justify-center p-8">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading Code Playground...</span>
        </div>
      </CardContent>
    </Card>
  ),
  ssr: false
})

interface LessonContentProps {
  lesson: Lesson
  course: Course
  onComplete: (timeSpent: number) => void
  isCompleted: boolean
}

export function LessonContent({ lesson, course, onComplete, isCompleted }: LessonContentProps) {
  const [startTime] = useState(Date.now())
  const [showPlayground, setShowPlayground] = useState(false)

  const handleComplete = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    onComplete(timeSpent)
  }

  const getLessonTypeIcon = (type: string) => {
    switch (type) {
      case "theory":
        return <BookOpen className="h-5 w-5" />
      case "practice":
        return <Code className="h-5 w-5" />
      case "quiz":
        return <Play className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
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
      {/* Lesson header */}
      <div className="border-b bg-card p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge className={getLessonTypeColor(lesson.type)}>
                  {getLessonTypeIcon(lesson.type)}
                  <span className="ml-1 capitalize">{lesson.type}</span>
                </Badge>
                {isCompleted && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>

              <h1 className="text-2xl font-heading font-bold text-balance">{lesson.title}</h1>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{lesson.duration} minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          {/* Main content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardContent className="p-8">
                <div
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: lesson.content }}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Code example for programming lessons */}
          {lesson.codeExample && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5" />
                    <span>Try It Yourself</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Practice what you've learned with this interactive code playground.
                    </p>

                    {!showPlayground ? (
                      <Button onClick={() => setShowPlayground(true)} className="w-full">
                        <Play className="mr-2 h-4 w-4" />
                        Open Code Playground
                      </Button>
                    ) : (
                      <CodePlayground
                        initialCode={lesson.codeExample}
                        language={course.category === "programming" ? "javascript" : "html"}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Completion section */}
          {!isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-heading font-semibold">Ready to continue?</h3>
                      <p className="text-sm text-muted-foreground">
                        Mark this lesson as complete to unlock the next one.
                      </p>
                    </div>
                    <Button onClick={handleComplete} size="lg">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Complete Lesson
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
