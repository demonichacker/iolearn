"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  FileText,
  Video,
  Download,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  Sparkles,
  Code,
  Database,
  Globe
} from "lucide-react"
import Link from "next/link"

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references",
    count: "500+ articles",
    color: "text-blue-500"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video lessons and walkthroughs",
    count: "200+ videos",
    color: "text-red-500"
  },
  {
    icon: Code,
    title: "Code Examples",
    description: "Ready-to-use code snippets and templates",
    count: "1000+ snippets",
    color: "text-green-500"
  },
  {
    icon: FileText,
    title: "Cheat Sheets",
    description: "Quick reference guides and summaries",
    count: "150+ sheets",
    color: "text-purple-500"
  }
]

const featuredResources = [
  {
    title: "React Hooks Complete Guide",
    type: "Documentation",
    rating: 4.9,
    downloads: 15420,
    author: "IOLEARN Team",
    difficulty: "Intermediate"
  },
  {
    title: "JavaScript ES6+ Masterclass",
    type: "Video Course",
    rating: 4.8,
    downloads: 23150,
    author: "Sarah Johnson",
    difficulty: "Beginner"
  },
  {
    title: "Node.js API Boilerplate",
    type: "Code Template",
    rating: 4.7,
    downloads: 8920,
    author: "Mike Chen",
    difficulty: "Advanced"
  },
  {
    title: "CSS Grid & Flexbox Cheat Sheet",
    type: "Reference",
    rating: 4.9,
    downloads: 45680,
    author: "Design Team",
    difficulty: "All Levels"
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            >
              📚 Learning Resources
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Comprehensive Learning Library
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access thousands of high-quality learning resources including documentation, video tutorials,
              code examples, and cheat sheets. Everything you need to accelerate your development journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/signup">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Unlock All Resources
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/login">
                  Sign In to Access
                </Link>
              </Button>
            </div>
          </div>

          {/* Resource Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{category.count}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Resources Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
              <p className="text-muted-foreground text-lg">Most popular and highly-rated learning materials</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                    {/* Lock overlay for non-authenticated users */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="text-center space-y-3">
                        <div className="text-sm font-medium">Premium Resource</div>
                        <p className="text-xs text-muted-foreground">Sign up to download</p>
                        <Button size="sm" asChild>
                          <Link href="/signup">Get Access</Link>
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge variant="outline">{resource.difficulty}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{resource.rating}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{resource.downloads.toLocaleString()} downloads</span>
                          </div>
                          <div className="text-sm">
                            by {resource.author}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full w-4/5"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">80% helpful</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search & Filter Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-muted/30 rounded-2xl p-8 text-center"
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-4">
                <Search className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Advanced Search & Filtering</h3>
                <p className="text-muted-foreground">
                  Find exactly what you need with our powerful search engine and filtering options.
                  Search by topic, difficulty, type, and more.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Beginner</Badge>
                <Badge variant="outline">Video</Badge>
                <Badge variant="outline">Documentation</Badge>
                <Badge variant="outline">Free</Badge>
              </div>

              <div className="text-sm text-muted-foreground">
                🔒 Sign up to unlock advanced search and 1000+ premium resources
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Never Stop Learning</h3>
                <p className="text-lg text-muted-foreground">
                  Join our community of learners and get access to unlimited resources.
                  Download guides, watch tutorials, and accelerate your development career.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/signup">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Access All Resources
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/courses">
                    <Globe className="mr-2 h-5 w-5" />
                    Start with Courses
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Learning Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50k+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}