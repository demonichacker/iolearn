import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  Users,
  Target,
  Award,
  Heart,
  BookOpen,
  Code,
  Sparkles,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              About IOLEARN
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Empowering the Next Generation of Developers
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make coding education accessible, engaging, and effective for everyone,
              from complete beginners to experienced professionals.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To democratize coding education by providing high-quality, interactive learning experiences
                  that are accessible to anyone with a computer and internet connection.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  A world where everyone has the opportunity to learn coding skills that can transform their
                  careers and open doors to new possibilities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <AnimatedCounter
                value={50}
                suffix="+"
                className="text-3xl font-bold text-primary mb-2"
              />
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={10000}
                suffix="+"
                className="text-3xl font-bold text-primary mb-2"
              />
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={95}
                suffix="%"
                className="text-3xl font-bold text-primary mb-2"
              />
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape our approach to education.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Education</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in providing the highest quality learning materials and experiences.
                </p>
              </Card>

              <Card className="text-center p-6">
                <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Making coding education available to everyone, regardless of background or experience.
                </p>
              </Card>

              <Card className="text-center p-6">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Constantly evolving our platform with the latest educational technology and methods.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground">
                Join thousands of learners who are already transforming their careers with IOLEARN.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/courses">
                  Browse Courses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}