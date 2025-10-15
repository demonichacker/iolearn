"use client"

import type React from "react"

import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { GradientButton } from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"
import { DemoQuizModal } from "@/components/quiz/DemoQuizModal"
import { BookOpen, Play, Users, Award } from "lucide-react"
import { FloatingLessonCards } from "./FloatingLessonCards"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import Link from "next/link"

export function LandingHero3D() {
  const [showDemoQuiz, setShowDemoQuiz] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Content Overlay - Static version for SSR */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-heading font-bold text-balance leading-tight"
                  >
                    Master Skills with{" "}
                    <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                      Interactive Learning
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl text-muted-foreground text-pretty max-w-2xl"
                  >
                    From school subjects to programming languages, learn at your own pace with hands-on coding
                    playgrounds, interactive quizzes, and personalized progress tracking.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <GradientButton size="lg" className="text-lg px-8 py-4" asChild>
                    <Link href="/signup">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Learning
                    </Link>
                  </GradientButton>

                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 bg-transparent"
                    onClick={() => setShowDemoQuiz(true)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Try Demo Quiz
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="grid grid-cols-3 gap-2 md:gap-8 pt-8"
                >
                  <div className="text-center">
                    <AnimatedCounter
                      value={50}
                      suffix="+"
                      className="text-lg md:text-xl lg:text-2xl font-bold text-primary"
                    />
                    <div className="text-xs text-muted-foreground">Courses</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter
                      value={10000}
                      suffix="+"
                      className="text-lg md:text-xl lg:text-2xl font-bold text-primary"
                    />
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter
                      value={95}
                      suffix="%"
                      className="text-lg md:text-xl lg:text-2xl font-bold text-primary"
                    />
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Feature Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6"
              >
                <FeatureCard
                  icon={<BookOpen className="h-8 w-8 text-primary" />}
                  title="Interactive Lessons"
                  description="Learn with hands-on coding exercises and real-time feedback"
                  delay={0.2}
                />

                <FeatureCard
                  icon={<Users className="h-8 w-8 text-primary" />}
                  title="Personalized Learning"
                  description="Adaptive content that adjusts to your learning pace and style"
                  delay={0.4}
                />

                <FeatureCard
                  icon={<Award className="h-8 w-8 text-primary" />}
                  title="Track Progress"
                  description="Monitor your achievements and export your learning journey"
                  delay={0.6}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Demo Quiz Modal */}
        <DemoQuizModal open={showDemoQuiz} onOpenChange={setShowDemoQuiz} />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Environment preset="sunset" />
            {/* @ts-ignore */}
            <ambientLight intensity={0.5} />
            {/* @ts-ignore */}
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/* Floating Lesson Cards */}
            <FloatingLessonCards />

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-heading font-bold text-balance leading-tight"
                >
                  Master Skills with{" "}
                  <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                    Interactive Learning
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-muted-foreground text-pretty max-w-2xl"
                >
                  From school subjects to programming languages, learn at your own pace with hands-on coding
                  playgrounds, interactive quizzes, and personalized progress tracking.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <GradientButton size="lg" className="text-lg px-8 py-4" asChild>
                  <Link href="/signup">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Learning
                  </Link>
                </GradientButton>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                  onClick={() => setShowDemoQuiz(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try Demo Quiz
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-3 gap-2 md:gap-8 pt-8"
              >
                <div className="text-center">
                  <AnimatedCounter
                    value={50}
                    suffix="+"
                    className="text-lg md:text-xl lg:text-2xl font-bold text-primary"
                  />
                  <div className="text-xs text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    value={10000}
                    suffix="+"
                    className="text-lg md:text-xl lg:text-2xl font-bold text-primary"
                  />
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    value={95}
                    suffix="%"
                    className="text-lg md:text-xl lg:text-2xl font-bold text-primary"
                  />
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Interactive Lessons"
                description="Learn with hands-on coding exercises and real-time feedback"
                delay={0.2}
              />

              <FeatureCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Personalized Learning"
                description="Adaptive content that adjusts to your learning pace and style"
                delay={0.4}
              />

              <FeatureCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Track Progress"
                description="Monitor your achievements and export your learning journey"
                delay={0.6}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Demo Quiz Modal */}
      <DemoQuizModal open={showDemoQuiz} onOpenChange={setShowDemoQuiz} />
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-card/80 backdrop-blur-sm border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-lg">{title}</h3>
          <p className="text-muted-foreground text-pretty">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
