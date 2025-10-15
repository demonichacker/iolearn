import { Header } from "@/components/layout/Header"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"
import dynamic from "next/dynamic"

// Dynamically import the 3D component with SSR disabled
const LandingHero3D = dynamic(() => import("@/components/landing/LandingHero3D").then(mod => ({ default: mod.LandingHero3D })), {
  ssr: false,
  loading: () => (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Content Overlay - Static version for loading */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance leading-tight">
                  Master Skills with{" "}
                  <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                    Interactive Learning
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  From school subjects to programming languages, learn at your own pace with hands-on coding
                  playgrounds, interactive quizzes, and personalized progress tracking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-md font-medium hover:from-blue-600 hover:to-primary transition-all duration-200">
                  Start Learning
                </button>

                <button className="text-lg px-8 py-4 bg-transparent border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                  Try Demo Quiz
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-8 pt-8">
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg">Interactive Lessons</h3>
                    <p className="text-muted-foreground text-pretty">Learn with hands-on coding exercises and real-time feedback</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg">Personalized Learning</h3>
                    <p className="text-muted-foreground text-pretty">Adaptive content that adjusts to your learning pace and style</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg">Track Progress</h3>
                    <p className="text-muted-foreground text-pretty">Monitor your achievements and export your learning journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
