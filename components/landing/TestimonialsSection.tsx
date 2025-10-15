"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    avatar: "/woman-developer.png",
    content:
      "This platform transformed my coding skills. The interactive playground and instant feedback helped me land my dream job!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    avatar: "/man-developer.png",
    content:
      "The quiz system with confetti animations makes learning so engaging. I've completed 5 courses and my confidence has skyrocketed.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Software Engineer",
    company: "BigTech Inc",
    avatar: "/woman-engineer-at-work.png",
    content:
      "The progress tracking and JSON export features are incredible. I can see exactly how I'm improving and share my achievements.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    company: "CloudSoft",
    avatar: "/man-programmer.jpg",
    content:
      "The W3Schools-style navigation and sequential lessons make complex topics easy to follow. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer",
    company: "ScaleUp",
    avatar: "/woman-programmer.png",
    content:
      "The onboarding tour was perfect for getting started. The platform feels premium yet approachable for all skill levels.",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    role: "Mobile Developer",
    company: "AppStudio",
    avatar: "/developer-portrait.png",
    content:
      "Love the social sharing feature! Being able to share my quiz results motivates me to keep learning and improving.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
            💬 Success Stories
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            What Our Learners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what developers are saying about their learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic group-hover:text-foreground/80 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative">
                      <Avatar className="w-12 h-12 mr-4 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
