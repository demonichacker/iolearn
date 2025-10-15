"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { LandingHero3D } from "@/components/landing/LandingHero3D"
import { Header } from "@/components/layout/Header"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"

export default function HomePage() {
  // Temporarily disable authentication redirect to fix build issues
  // const { user, isLoading } = useAuth()
  // const router = useRouter()

  // useEffect(() => {
  //   if (!isLoading && user) {
  //     // Redirect authenticated users to dashboard
  //     router.push("/dashboard")
  //   }
  // }, [user, isLoading, router])

  // Show loading state while checking authentication
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-background flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
  //         <p className="text-muted-foreground">Loading...</p>
  //       </div>
  //     </div>
  //   )
  // }

  // Show landing page for all users temporarily to fix build
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LandingHero3D />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )

  // This will be redirected by useEffect, but return null to prevent flash
  // return null
}
