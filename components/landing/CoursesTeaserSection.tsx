"use client"

import { motion } from "framer-motion"
import { Clock, Users, Star, BookOpen, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { courses } from "@/data/courses"

export function CoursesTeaserSection() {
  // Show first 3 courses as teasers
  const teaserCourses = courses.slice(0, 3)

  // Mock enrollment and rating data for consistency
  const courseData = {
    "mathematics": { enrollment: 1247, rating: 4.7 },
    "javascript": { enrollment: 2156, rating: 4.8 },
    "react-js": { enrollment: 987, rating: 4.6 }
  }

  return (
    <section className="py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
          >
            📚 Explore Our Courses
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive courses designed to take you from beginner to expert. Join thousands of learners already on their path to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8">
              <Link href="/login">
                Sign In to Continue
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teaserCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{course.icon}</div>
                    <Badge variant="outline" className="capitalize">
                      {course.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.estimatedTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{courseData[course.id as keyof typeof courseData]?.rating || 4.5}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{courseData[course.id as keyof typeof courseData]?.enrollment || 500} students enrolled</span>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300" asChild>
                    <Link href="/login">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Preview Course
                    </Link>
                  </Button>
                </CardContent>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            And many more courses available! Create your account to access our full library.
          </p>
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}