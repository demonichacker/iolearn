import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="px-4 py-2">
            Security
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Security is Our Priority
          </h1>

          <p className="text-xl text-muted-foreground">
            Learn about our security measures and how we protect your data.
          </p>

          <div className="text-lg text-muted-foreground">
            🔒 Security information coming soon...
          </div>
        </div>
      </main>
    </div>
  )
}