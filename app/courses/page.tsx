"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Code,
  GraduationCap,
  Clock,
  Users,
  Star,
  Play,
  Search,
  Filter,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import { courses } from "@/data/courses"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock enrolled courses for the current user
  const enrolledCourses = ["mathematics", "javascript"] // Course IDs the user is enrolled in

  // Mock course data for consistency
  const courseData = {
    "mathematics": { enrollment: 1247, rating: 4.7, progress: 65 },
    "javascript": { enrollment: 2156, rating: 4.8, progress: 30 },
    "react-js": { enrollment: 987, rating: 4.6, progress: 0 },
    "python": { enrollment: 1890, rating: 4.9, progress: 0 },
    "web-development": { enrollment: 2341, rating: 4.6, progress: 0 },
    "html": { enrollment: 3456, rating: 4.8, progress: 0 },
    "css": { enrollment: 2987, rating: 4.7, progress: 0 },
    "next-js": { enrollment: 1654, rating: 4.5, progress: 0 },
    "node-js": { enrollment: 1876, rating: 4.4, progress: 0 },
    "sql-mysql-postgresql": { enrollment: 2134, rating: 4.6, progress: 0 },
    "mongodb": { enrollment: 1543, rating: 4.3, progress: 0 },
    "english-language-literature": { enrollment: 987, rating: 4.5, progress: 0 },
    "basic-science": { enrollment: 1456, rating: 4.4, progress: 0 },
    "social-studies": { enrollment: 1234, rating: 4.3, progress: 0 },
    "history": { enrollment: 1098, rating: 4.2, progress: 0 },
    "geography": { enrollment: 876, rating: 4.1, progress: 0 },
    "civic-education": { enrollment: 654, rating: 4.0, progress: 0 },
    "economics": { enrollment: 1123, rating: 4.2, progress: 0 },
    "business-studies": { enrollment: 987, rating: 4.1, progress: 0 },
    "biology": { enrollment: 1432, rating: 4.3, progress: 0 },
    "chemistry": { enrollment: 1298, rating: 4.4, progress: 0 },
    "physics": { enrollment: 1156, rating: 4.5, progress: 0 },
    "government-political-science": { enrollment: 876, rating: 4.0, progress: 0 },
    "fine-arts-creative-arts": { enrollment: 654, rating: 3.9, progress: 0 },
    "physical-health-education": { enrollment: 543, rating: 4.1, progress: 0 },
    "tailwind-css": { enrollment: 1876, rating: 4.7, progress: 0 },
    "express-js": { enrollment: 1432, rating: 4.3, progress: 0 },
    "mobile-development": { enrollment: 1234, rating: 4.2, progress: 0 },
    "react-native": { enrollment: 1098, rating: 4.1, progress: 0 },
    "flutter": { enrollment: 987, rating: 4.0, progress: 0 },
    "backend-databases": { enrollment: 1654, rating: 4.4, progress: 0 },
    "django": { enrollment: 876, rating: 4.2, progress: 0 },
    "java": { enrollment: 1432, rating: 4.3, progress: 0 },
    "php": { enrollment: 1098, rating: 4.1, progress: 0 },
    "git-github": { enrollment: 2341, rating: 4.8, progress: 0 },
    "ui-ux-design-basics": { enrollment: 1876, rating: 4.6, progress: 0 },
    "api-development-integration": { enrollment: 1543, rating: 4.4, progress: 0 },
    "cloud-basics-aws-firebase": { enrollment: 1234, rating: 4.3, progress: 0 },
    "cybersecurity-fundamentals": { enrollment: 987, rating: 4.2, progress: 0 },
    "data-structures-algorithms": { enrollment: 876, rating: 4.1, progress: 0 }
  }

  // Mock completed courses
  const completedCourses = ["mathematics"]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <div className="space-y-6 mb-8">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  All Courses
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Explore our complete library of courses with detailed lessons and learning paths
                </p>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative w-full lg:flex-1 lg:max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory("all")}
                    className="shrink-0"
                  >
                    All Courses
                  </Button>
                  <Button
                    variant={selectedCategory === "programming" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory("programming")}
                    className="shrink-0"
                  >
                    Programming
                  </Button>
                  <Button
                    variant={selectedCategory === "school" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory("school")}
                    className="shrink-0"
                  >
                    School Subjects
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Hidden on mobile/tablet, shown on desktop */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Categories</h3>
                    <div className="space-y-2">
                      <Button
                        variant={selectedCategory === "all" ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory("all")}
                      >
                        All Courses
                      </Button>
                      <Button
                        variant={selectedCategory === "programming" ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory("programming")}
                      >
                        Programming & Tech
                      </Button>
                      <Button
                        variant={selectedCategory === "school" ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory("school")}
                      >
                        School Subjects
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Stats</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Total Courses</span>
                        <span className="font-medium">{courses.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enrolled</span>
                        <span className="font-medium">{enrolledCourses.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed</span>
                        <span className="font-medium">{completedCourses.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Mobile Stats Card - Only shown on mobile/tablet */}
                <Card className="mb-6 lg:hidden">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{courses.length}</div>
                        <div className="text-sm text-muted-foreground">Total Courses</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{enrolledCourses.length}</div>
                        <div className="text-sm text-muted-foreground">Enrolled</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{completedCourses.length}</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredCourses.map((course, index) => {
                    const isEnrolled = enrolledCourses.includes(course.id)
                    const isCompleted = completedCourses.includes(course.id)
                    const progress = courseData[course.id as keyof typeof courseData]?.progress || 0
                    const rating = courseData[course.id as keyof typeof courseData]?.rating || 4.5

                    return (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-3xl sm:text-4xl">{course.icon}</div>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{rating}</span>
                              </div>
                            </div>
                            <CardTitle className="text-base sm:text-lg line-clamp-2">{course.title}</CardTitle>
                            <CardDescription className="line-clamp-2 text-sm">{course.description}</CardDescription>
                          </CardHeader>

                          <CardContent className="pt-0 space-y-4">
                            {/* Progress Bar (if enrolled) */}
                            {isEnrolled && (
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{isCompleted ? '100%' : `${progress}%`}</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                      isCompleted ? 'bg-green-500 w-full' : 'bg-primary'
                                    }`}
                                    style={{ width: isCompleted ? '100%' : `${progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}

                            {/* Course Meta */}
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span className="text-xs sm:text-sm">{course.estimatedTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span className="text-xs sm:text-sm">{courseData[course.id as keyof typeof courseData]?.enrollment || 0}</span>
                              </div>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {isCompleted && (
                                <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-xs">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Completed
                                </Badge>
                              )}
                              {isEnrolled && !isCompleted && (
                                <Badge variant="secondary" className="text-xs">Enrolled</Badge>
                              )}
                              <Badge variant="outline" className="text-xs">{course.category}</Badge>
                            </div>

                            {/* Action Button */}
                            <Button asChild className="w-full text-sm">
                              <Link href={`/courses/${course.id}`}>
                                {isEnrolled ? (
                                  <>
                                    <Play className="h-4 w-4 mr-2" />
                                    <span className="hidden sm:inline">{isCompleted ? 'Review Course' : 'Continue Learning'}</span>
                                    <span className="sm:hidden">{isCompleted ? 'Review' : 'Continue'}</span>
                                  </>
                                ) : (
                                  <>
                                    <BookOpen className="h-4 w-4 mr-2" />
                                    <span className="hidden sm:inline">View Course</span>
                                    <span className="sm:hidden">View</span>
                                  </>
                                )}
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                {/* No Results Message */}
                {filteredCourses.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </main>
     </div>
   </ProtectedRoute>
  )
}
