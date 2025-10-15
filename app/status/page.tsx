import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              System Status
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              All Systems Operational
            </h1>

            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-lg text-muted-foreground">All services are running normally</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Website</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Operational</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">API</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Operational</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Operational</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Recent Updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Platform Update Completed</p>
                    <p className="text-sm text-muted-foreground">All systems updated successfully • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Scheduled Maintenance</p>
                    <p className="text-sm text-muted-foreground">Completed without issues • 1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}