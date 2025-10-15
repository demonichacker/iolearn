import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="px-4 py-2">
            Blog
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            IOLEARN Blog
          </h1>

          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and stories from the world of coding education.
          </p>

          <div className="text-lg text-muted-foreground">
            ✍️ Blog posts coming soon...
          </div>
        </div>
      </main>
    </div>
  )
}