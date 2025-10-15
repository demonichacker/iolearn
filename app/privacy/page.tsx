import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Privacy Policy
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                use our services, or contact us for support.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                process transactions, and communicate with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties
                without your consent, except as described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                privacy@learnhub.com.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}