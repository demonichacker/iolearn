import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="px-4 py-2">
            Documentation
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Developer Documentation
          </h1>

          <p className="text-xl text-muted-foreground">
            Comprehensive guides, API references, and tutorials for developers building with IOLEARN.
          </p>

          <div className="text-lg text-muted-foreground">
            📝 Documentation coming soon...
          </div>
        </div>
      </main>
    </div>
  )
}