import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  BookOpen,
  MessageCircle,
  FileText,
  Video,
  Users,
  HelpCircle,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    articles: 12
  },
  {
    icon: FileText,
    title: "Courses & Learning",
    description: "Navigate courses, track progress, and maximize learning",
    articles: 18
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks",
    articles: 8
  },
  {
    icon: MessageCircle,
    title: "Troubleshooting",
    description: "Solutions to common technical issues",
    articles: 15
  },
  {
    icon: Users,
    title: "Community Help",
    description: "Get help from our community and mentors",
    articles: 6
  }
]

const popularArticles = [
  "How to reset your password",
  "Understanding your progress dashboard",
  "How to download certificates",
  "Troubleshooting video playback issues",
  "How to contact your instructor"
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Help Center
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              How Can We Help You?
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to your questions, learn new skills, and get the support you need to succeed.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for help..."
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-muted-foreground">
                Explore our comprehensive help resources organized by topic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.articles} articles
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Popular Articles</h2>
              <p className="text-muted-foreground">
                Most frequently viewed help articles by our community.
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{article}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-blue-500/5 rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Still Need Help?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help you personally.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/community">
                    Ask Community
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}