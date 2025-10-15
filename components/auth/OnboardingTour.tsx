"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ArrowRight, ArrowLeft } from "lucide-react"

interface TourStep {
  id: string
  title: string
  description: string
  target: string
  position: "top" | "bottom" | "left" | "right"
}

const tourSteps: TourStep[] = [
  {
    id: "welcome",
    title: "Welcome to IOLEARN!",
    description: "Let's take a quick tour to get you started on your learning journey.",
    target: "body",
    position: "top",
  },
  {
    id: "courses",
    title: "Explore Courses",
    description: "Browse through our extensive library of courses in programming and school subjects.",
    target: "[data-tour='courses']",
    position: "bottom",
  },
  {
    id: "progress",
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed progress tracking and analytics.",
    target: "[data-tour='progress']",
    position: "bottom",
  },
]

interface OnboardingTourProps {
  isOpen: boolean
  onComplete: () => void
}

export function OnboardingTour({ isOpen, onComplete }: OnboardingTourProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen && currentStep < tourSteps.length) {
      const target = document.querySelector(tourSteps[currentStep].target) as HTMLElement
      setTargetElement(target)

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" })
        target.style.position = "relative"
        target.style.zIndex = "1000"
      }
    }
  }, [isOpen, currentStep])

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    // Reset z-index for all elements
    document.querySelectorAll("[data-tour]").forEach((el) => {
      const element = el as HTMLElement
      element.style.zIndex = ""
      element.style.position = ""
    })

    localStorage.setItem("onboarding-completed", "true")
    onComplete()
  }

  const handleSkip = () => {
    handleComplete()
  }

  if (!isOpen || currentStep >= tourSteps.length) return null

  const step = tourSteps[currentStep]

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 pointer-events-none" />

      {/* Tour Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed z-50 max-w-sm pointer-events-auto"
          style={{
            top: targetElement ? targetElement.offsetTop + targetElement.offsetHeight + 20 : "50%",
            left: targetElement ? targetElement.offsetLeft : "50%",
            transform: !targetElement ? "translate(-50%, -50%)" : "none",
          }}
        >
          <Card className="shadow-lg border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleSkip} className="h-8 w-8 p-0 -mt-2 -mr-2">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {tourSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  {currentStep > 0 && (
                    <Button variant="outline" size="sm" onClick={handlePrevious}>
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back
                    </Button>
                  )}
                  <Button size="sm" onClick={handleNext}>
                    {currentStep === tourSteps.length - 1 ? "Finish" : "Next"}
                    {currentStep < tourSteps.length - 1 && <ArrowRight className="h-4 w-4 ml-1" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
