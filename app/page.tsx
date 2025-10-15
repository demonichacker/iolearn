import { Header } from "@/components/layout/Header"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"
import dynamic from "next/dynamic"

// Dynamically import the 3D component with SSR disabled to prevent build issues
const LandingHero3D = dynamic(() => import("@/components/landing/LandingHero3D").then(mod => ({ default: mod.LandingHero3D })), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading 3D Experience...</p>
      </div>
    </div>
  )
})

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
