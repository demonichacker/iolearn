import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Get In Touch
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              We'd Love to Hear From You
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question, need support, or want to share feedback? Our team is here to help you succeed
              in your learning journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Tell us more about your question or feedback..."
                      className="min-h-32"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    For general inquiries and support
                  </p>
                  <a href="mailto:support@learnhub.com" className="text-primary hover:underline">
                    support@learnhub.com
                  </a>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Available 24/7 for urgent issues
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Premium members only
                  </p>
                  <p className="text-sm">1-800-LEARN-HUB</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    123 Learning Street<br />
                    Education City, EC 12345<br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Email</span>
                      <span className="text-sm font-medium">24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chat</span>
                      <span className="text-sm font-medium">5 minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Phone</span>
                      <span className="text-sm font-medium">1 hour</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Looking for Quick Answers?</h3>
              <p className="text-muted-foreground">
                Check out our comprehensive help center for instant answers to common questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="/help">
                  Visit Help Center
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="/docs">
                  Browse Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}