"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, Brain, Zap } from "lucide-react"
import type { QuizQuestion } from "@/types"

interface QuizEngineProps {
  questions: QuizQuestion[]
  onComplete: (answers: number[], score: number, timeSpent: number) => void
}

export function QuizEngine({ questions, onComplete }: QuizEngineProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [startTime] = useState(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowFeedback(true)
    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === currentQ.answerIndex) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setQuestionStartTime(Date.now())
    } else {
      // Quiz complete
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      onComplete(answers, score, timeSpent)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return <Brain className="h-3 w-3" />
      case "medium":
        return <Zap className="h-3 w-3" />
      case "hard":
        return <Zap className="h-3 w-3" />
      default:
        return <Brain className="h-3 w-3" />
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge className={getDifficultyColor(currentQ.difficulty)}>
              {getDifficultyIcon(currentQ.difficulty)}
              <span className="ml-1 capitalize">{currentQ.difficulty}</span>
            </Badge>
            <Badge variant="outline">
              <Clock className="h-3 w-3 mr-1" />
              Score: {score}/{questions.length}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-pretty leading-relaxed">{currentQ.question}</h3>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentQ.answerIndex
                const isWrong = showFeedback && isSelected && !isCorrect

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                      isSelected
                        ? showFeedback
                          ? isCorrect
                            ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                            : "border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                          : "border-primary bg-primary/10"
                        : showFeedback && isCorrect
                          ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                          : "border-border hover:border-primary/50 hover:bg-accent"
                    }`}
                    disabled={showFeedback}
                    whileHover={{ scale: showFeedback ? 1 : 1.02 }}
                    whileTap={{ scale: showFeedback ? 1 : 0.98 }}
                    animate={isWrong ? { x: [-5, 5, -5, 5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-pretty">{option}</span>
                      {showFeedback && isCorrect && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </motion.div>
                      )}
                      {showFeedback && isWrong && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                        >
                          <XCircle className="h-5 w-5 text-red-600" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showFeedback && currentQ.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-muted rounded-lg border-l-4 border-l-primary"
              >
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Explanation</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{currentQ.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          {!showFeedback ? (
            <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} size="lg" className="px-8">
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} size="lg" className="px-8">
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
