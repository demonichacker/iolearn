"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Users,
  Award,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Code
} from "lucide-react"
import Link from "next/link"

const careerPaths = [
  {
    title: "Frontend Developer",
    description: "Build beautiful, responsive user interfaces",
    salary: "$70k - $120k",
    growth: "+25%",
    skills: ["React", "TypeScript", "CSS", "JavaScript"],
    icon: Globe,
    color: "text-blue-500"
  },
  {
    title: "Backend Developer",
    description: "Create robust server-side applications and APIs",
    salary: "$75k - $130k",
    growth: "+20%",
    skills: ["Node.js", "Python", "Databases", "APIs"],
    icon: Code,
    color: "text-green-500"
  },
  {
    title: "Full-Stack Developer",
    description: "Master both frontend and backend development",
    salary: "$80k - $140k",
    growth: "+22%",
    skills: ["MERN Stack", "DevOps", "Cloud", "Testing"],
    icon: Zap,
    color: "text-purple-500"
  },
  {
    title: "Data Scientist",
    description: "Extract insights from data using Python and ML",
    salary: "$85k - $150k",
    growth: "+35%",
    skills: ["Python", "Machine Learning", "Statistics", "SQL"],
    icon: TrendingUp,
    color: "text-orange-500"
  }
]

const careerBenefits = [
  {
    icon: DollarSign,
    title: "High Earning Potential",
    description: "Software development is one of the highest-paying careers with excellent growth prospects."
  },
  {
    icon: Briefcase,
    title: "Job Security",
    description: "Tech skills are in high demand. Remote work opportunities and flexible schedules available."
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented teams, contribute to meaningful projects, and learn from experienced developers."
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, providing endless opportunities for growth and skill development."
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Develop critical thinking skills by solving complex problems and building innovative solutions."
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work for companies worldwide, travel, or work remotely from anywhere in the world."
  }
]

const successStories = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer at Google",
    story: "Started with no coding experience. After 6 months of learning with IOLEARN, I landed my dream job.",
    image: "/placeholder-user.jpg",
    skills: ["React", "TypeScript", "Node.js"]
  },
  {
    name: "Mike Johnson",
    role: "Full-Stack Developer at Amazon",
    story: "Transitioned from marketing to tech. IOLEARN's structured approach made it possible.",
    image: "/placeholder-user.jpg",
    skills: ["Python", "React", "AWS"]
  },
  {
    name: "Emma Wilson",
    role: "Data Scientist at Netflix",
    story: "From business analyst to data scientist in 8 months. The career support was invaluable.",
    image: "/placeholder-user.jpg",
    skills: ["Python", "Machine Learning", "SQL"]
  }
]

const careerStats = [
  { label: "Average Developer Salary", value: "$110k+", icon: DollarSign },
  { label: "Job Openings", value: "500k+", icon: Briefcase },
  { label: "Career Growth", value: "+22%", icon: TrendingUp },
  { label: "Remote Jobs", value: "70%", icon: Globe }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            >
              🚀 Launch Your Tech Career
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              From Learning to Earning
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your career with in-demand tech skills. Our graduates work at top companies
              worldwide, earning competitive salaries and enjoying fulfilling careers in technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/signup">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Start Your Career
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/roadmap">
                  View Career Paths
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {careerStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          {/* Career Paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Career Paths</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your path and gain the skills employers are looking for
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {careerPaths.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <career.icon className={`h-6 w-6 ${career.color}`} />
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-green-600">{career.growth} growth</div>
                          <div className="text-sm text-muted-foreground">{career.salary}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{career.title}</CardTitle>
                      <CardDescription className="text-base">
                        {career.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full hover:scale-105 transition-transform">
                          Learn This Path
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose a Tech Career?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the benefits of working in technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real students, real results. See how IOLEARN transformed their careers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {story.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{story.name}</h3>
                          <p className="text-sm text-muted-foreground">{story.role}</p>
                        </div>
                      </div>

                      <blockquote className="text-muted-foreground mb-4 italic">
                        "{story.story}"
                      </blockquote>

                      <div className="flex flex-wrap gap-2">
                        {story.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-gradient-to-r from-primary/5 via-background to-blue-500/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Ready to Launch Your Tech Career?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of successful graduates who have transformed their careers with IOLEARN.
                  Start your journey today and become the developer you want to be.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/signup">
                    Start Learning Now
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/pricing">
                    View Career Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}