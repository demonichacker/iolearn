"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Share2 } from "lucide-react"
import { quizQuestions } from "@/data/courses"
import type { QuizQuestion } from "@/types"
import { ConfettiEffect } from "@/components/ui/confetti-effect"

interface DemoQuizModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoQuizModal({ open, onOpenChange }: DemoQuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [demoQuestions, setDemoQuestions] = useState<QuizQuestion[]>([])
  const [showConfetti, setShowConfetti] = useState(false)

  // Generate 3 random questions for demo
  useEffect(() => {
    if (open) {
      const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random())
      setDemoQuestions(shuffled.slice(0, 3))
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setScore(0)
      setIsComplete(false)
      setShowConfetti(false)
    }
  }, [open])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowFeedback(true)

    if (selectedAnswer === demoQuestions[currentQuestion].answerIndex) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < demoQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setIsComplete(true)
      // Show confetti for high scores (2/3 or better)
      if (score >= 2) {
        setShowConfetti(true)
      }
    }
  }

  const handleRestart = () => {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random())
    setDemoQuestions(shuffled.slice(0, 3))
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setIsComplete(false)
    setShowConfetti(false)
  }

  const handleShare = () => {
    const text = `I just scored ${score}/3 on the IOLEARN demo quiz! 🎉 Ready to start your learning journey?`
    if (navigator.share) {
      navigator.share({
        title: "IOLEARN Quiz Results",
        text,
        url: window.location.origin,
      })
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.origin}`)
      // You could show a toast here
    }
  }

  if (demoQuestions.length === 0) return null

  const currentQ = demoQuestions[currentQuestion]
  const progress = ((currentQuestion + (showFeedback ? 1 : 0)) / demoQuestions.length) * 100

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">{isComplete ? "Quiz Complete!" : "Demo Quiz"}</DialogTitle>
          </DialogHeader>

          {!isComplete ? (
            <div className="space-y-6">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>
                    Question {currentQuestion + 1} of {demoQuestions.length}
                  </span>
                  <span>
                    Score: {score}/{demoQuestions.length}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-pretty">{currentQ.question}</h3>

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
                          <span>{option}</span>
                          {showFeedback && isCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                          {showFeedback && isWrong && <XCircle className="h-5 w-5 text-red-600" />}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showFeedback && currentQ.explanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-muted rounded-lg"
                    >
                      <p className="text-sm text-muted-foreground">
                        <strong>Explanation:</strong> {currentQ.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                {!showFeedback ? (
                  <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="px-6">
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} className="px-6">
                    {currentQuestion < demoQuestions.length - 1 ? "Next Question" : "View Results"}
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {score}/{demoQuestions.length}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading">
                    {score === 3 ? "Perfect Score! 🎉" : score >= 2 ? "Great Job! 👏" : "Good Try! 💪"}
                  </h3>
                  <p className="text-muted-foreground">
                    {score === 3
                      ? "You're ready to tackle any course!"
                      : score >= 2
                        ? "You're well on your way to mastery!"
                        : "Practice makes perfect - keep learning!"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={handleShare} variant="outline" className="px-6 bg-transparent">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Results
                </Button>
                <Button onClick={handleRestart} variant="outline" className="px-6 bg-transparent">
                  Try Again
                </Button>
                <Button onClick={() => onOpenChange(false)} className="px-6">
                  Start Learning
                </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Confetti Effect */}
      {showConfetti && <ConfettiEffect />}
    </>
  )
}
