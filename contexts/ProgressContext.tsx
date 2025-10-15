"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { Progress, QuizResult } from "@/types"

interface ProgressContextType {
  progress: Progress[]
  quizResults: QuizResult[]
  updateProgress: (progress: Progress) => void
  addQuizResult: (result: QuizResult) => void
  getCourseProgress: (courseId: string) => number
  exportProgress: () => string
  getStats: () => {
    totalLessonsCompleted: number
    totalQuizzesTaken: number
    averageScore: number
    totalTimeSpent: number
  }
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])

  useEffect(() => {
    const storedProgress = localStorage.getItem("progress")
    const storedQuizResults = localStorage.getItem("quizResults")

    if (storedProgress) {
      try {
        setProgress(JSON.parse(storedProgress))
      } catch (error) {
        console.error("Failed to parse stored progress")
      }
    }

    if (storedQuizResults) {
      try {
        setQuizResults(JSON.parse(storedQuizResults))
      } catch (error) {
        console.error("Failed to parse stored quiz results")
      }
    }
  }, [])

  const updateProgress = (newProgress: Progress) => {
    setProgress((prev) => {
      const updated = prev.filter((p) => !(p.courseId === newProgress.courseId && p.lessonId === newProgress.lessonId))
      updated.push(newProgress)
      localStorage.setItem("progress", JSON.stringify(updated))
      return updated
    })
  }

  const addQuizResult = (result: QuizResult) => {
    setQuizResults((prev) => {
      const updated = [...prev, result]
      localStorage.setItem("quizResults", JSON.stringify(updated))
      return updated
    })
  }

  const getCourseProgress = (courseId: string): number => {
    const courseProgress = progress.filter((p) => p.courseId === courseId)
    const completed = courseProgress.filter((p) => p.completed).length
    return courseProgress.length > 0 ? (completed / courseProgress.length) * 100 : 0
  }

  const exportProgress = (): string => {
    const exportData = {
      progress,
      quizResults,
      exportedAt: new Date().toISOString(),
      stats: getStats(),
    }
    return JSON.stringify(exportData, null, 2)
  }

  const getStats = () => {
    const totalLessonsCompleted = progress.filter((p) => p.completed).length
    const totalQuizzesTaken = quizResults.length
    const averageScore =
      quizResults.length > 0 ? quizResults.reduce((sum, result) => sum + result.score, 0) / quizResults.length : 0
    const totalTimeSpent = progress.reduce((sum, p) => sum + p.timeSpent, 0)

    return {
      totalLessonsCompleted,
      totalQuizzesTaken,
      averageScore,
      totalTimeSpent,
    }
  }

  return (
    <ProgressContext.Provider
      value={{
        progress,
        quizResults,
        updateProgress,
        addQuizResult,
        getCourseProgress,
        exportProgress,
        getStats,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}
