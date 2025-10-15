"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  BookOpen,
  Code,
  Trophy,
  Users,
  Target,
  Sparkles,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started with coding",
    price: "$0",
    period: "forever",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    popular: false,
    features: [
      { name: "Access to 5 free courses", included: true },
      { name: "Basic code playground", included: true },
      { name: "5 practice quizzes per month", included: true },
      { name: "Community forum access", included: true },
      { name: "Basic progress tracking", included: true },
      { name: "Mobile app access", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Certificate downloads", included: false },
      { name: "Priority support", included: false },
      { name: "Unlimited quizzes", included: false }
    ]
  },
  {
    name: "Premium",
    description: "Unlock your full coding potential",
    price: "$9.99",
    period: "per month",
    icon: Crown,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    popular: true,
    features: [
      { name: "Access to all 50+ courses", included: true },
      { name: "Advanced code playground", included: true },
      { name: "Unlimited practice quizzes", included: true },
      { name: "Community forum access", included: true },
      { name: "Advanced progress tracking", included: true },
      { name: "Mobile app access", included: true },
      { name: "Advanced analytics & insights", included: true },
      { name: "Certificate downloads", included: true },
      { name: "Priority support", included: true },
      { name: "Exclusive premium content", included: true }
    ]
  }
]

const premiumFeatures = [
  {
    icon: Code,
    title: "Advanced Code Playground",
    description: "Full-featured IDE with debugging, version control, and collaborative coding"
  },
  {
    icon: Trophy,
    title: "Certification Program",
    description: "Earn recognized certificates and showcase your skills to employers"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals and experienced developers"
  },
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description: "AI-powered recommendations tailored to your goals and skill level"
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description: "Work on projects with peers and learn from collaborative coding sessions"
  },
  {
    icon: Star,
    title: "Exclusive Content",
    description: "Access premium tutorials, case studies, and industry insights"
  }
]

export default function PricingPage() {
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
              💰 Simple, Transparent Pricing
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose Your Learning Journey
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start for free and upgrade when you're ready. No hidden fees, no surprises.
              Unlock your coding potential with our comprehensive learning platform.
            </p>
          </div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 text-sm font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 scale-105' : 'border-border/50'} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`h-8 w-8 ${plan.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>

                    <div className="mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      {plan.name === "Free" ? (
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="/signup">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                          <Link href="/signup">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Upgrade to Premium
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Premium?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unlock advanced features and accelerate your learning journey with our premium plan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-yellow-500" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Frequently Asked Questions</h3>
                <p className="text-muted-foreground">Everything you need to know about our pricing</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Can I switch plans anytime?</h4>
                  <p className="text-sm text-muted-foreground">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Is there a free trial for Premium?</h4>
                  <p className="text-sm text-muted-foreground">We offer a 7-day free trial for all new Premium subscribers. No credit card required to start.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Can I cancel my subscription?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely! You can cancel your subscription at any time. You'll retain access until the end of your billing period.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Ready to Start Learning?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers who are already mastering new skills with our platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/courses">
                  Browse Free Courses
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}