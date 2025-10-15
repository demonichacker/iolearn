import { Header } from "@/components/layout/Header"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"
import { LandingHero3D } from "@/components/landing/LandingHero3D"

export default function HomePage() {
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
}
