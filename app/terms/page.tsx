import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Terms of Service
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Terms of Service
            </h1>

            <p className="text-xl text-muted-foreground">
              The rules and guidelines for using IOLEARN's services.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using IOLEARN, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on IOLEARN's website
                for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account and
                password and for restricting access to their computer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at legal@learnhub.com.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}