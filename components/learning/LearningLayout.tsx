"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LessonSidebar } from "./LessonSidebar"
import { Menu, X, ArrowLeft, User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useProgress } from "@/contexts/ProgressContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Course } from "@/types"

interface LearningLayoutProps {
  course: Course
  currentLessonIndex: number
  onLessonSelect: (index: number) => void
  children: React.ReactNode
}

export function LearningLayout({ course, currentLessonIndex, onLessonSelect, children }: LearningLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const { getCourseProgress } = useProgress()

  const courseProgress = getCourseProgress(course.id)

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>

          {/* Back to courses */}
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Back to Courses</span>
            </Link>
          </Button>

          {/* Course info */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="text-2xl">{course.icon}</div>
            <div className="min-w-0 flex-1">
              <h1 className="font-heading font-semibold text-sm sm:text-base truncate">{course.title}</h1>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>
                  Lesson {currentLessonIndex + 1} of {course.lessons.length}
                </span>
                <span>•</span>
                <span>{Math.round(courseProgress)}% complete</span>
              </div>
            </div>
          </div>

          {/* Header actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/progress" data-tour="progress">
                      Progress
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pb-2">
          <Progress value={courseProgress} className="h-1" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || window.innerWidth >= 768) && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 left-0 z-30 w-80 bg-sidebar border-r md:relative md:translate-x-0"
              style={{ top: "112px" }} // Account for header height
            >
              <LessonSidebar
                course={course}
                currentLessonIndex={currentLessonIndex}
                onLessonSelect={(index) => {
                  onLessonSelect(index)
                  setSidebarOpen(false) // Close sidebar on mobile after selection
                }}
              />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-20 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
