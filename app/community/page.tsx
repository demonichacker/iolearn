"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  MessageCircle,
  Trophy,
  BookOpen,
  Code,
  Heart,
  Star,
  ArrowRight,
  TrendingUp,
  Search,
  Plus,
  ThumbsUp,
  MessageSquare,
  Share,
  Filter,
  Calendar,
  Award,
  Bell,
  HelpCircle,
  Zap,
  Target,
  Crown,
  Medal,
  Flame,
  Sparkles,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Megaphone,
  BarChart3,
  CheckCircle,
  Clock,
  ChevronRight as ChevronRightIcon
} from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "programming", name: "Programming", icon: Code, color: "text-blue-500", count: 1247 },
  { id: "school-subjects", name: "School Subjects", icon: GraduationCap, color: "text-green-500", count: 892 },
  { id: "projects", name: "Projects", icon: Target, color: "text-purple-500", count: 567 },
  { id: "career", name: "Career", icon: Briefcase, color: "text-orange-500", count: 445 },
  { id: "general", name: "General Chat", icon: MessageCircle, color: "text-gray-500", count: 1234 }
]

const discussions = [
  {
    id: 1,
    title: "Best practices for React state management in 2024",
    author: "Sarah Chen",
    authorAvatar: "/placeholder-user.jpg",
    content: "I've been working with React for a few years now, and I'm curious about the current best practices for state management. With the introduction of React Server Components and the evolution of hooks, what patterns are you all using?",
    category: "programming",
    tags: ["React", "State Management", "Hooks"],
    replies: 23,
    likes: 45,
    time: "2 hours ago",
    isLiked: false,
    authorLevel: "Senior Developer",
    authorPoints: 2450,
    isAnswered: false
  },
  {
    id: 2,
    title: "How to approach algorithm problems systematically",
    author: "Mike Johnson",
    authorAvatar: "/placeholder-user.jpg",
    content: "I'm preparing for coding interviews and struggling with algorithm problems. Can anyone share their systematic approach to solving these problems? What steps do you take when faced with a new algorithm challenge?",
    category: "programming",
    tags: ["Algorithms", "Interview Prep", "Problem Solving"],
    replies: 18,
    likes: 32,
    time: "4 hours ago",
    isLiked: true,
    authorLevel: "Full-Stack Developer",
    authorPoints: 2100,
    isAnswered: false
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to use which?",
    author: "Alex Rivera",
    authorAvatar: "/placeholder-user.jpg",
    content: "I've been using both CSS Grid and Flexbox, but I'm still not clear on when to choose one over the other. Can someone explain the key differences and use cases for each?",
    category: "programming",
    tags: ["CSS", "Layout", "Frontend"],
    replies: 31,
    likes: 67,
    time: "6 hours ago",
    isLiked: false,
    authorLevel: "Frontend Developer",
    authorPoints: 1950,
    isAnswered: true
  },
  {
    id: 4,
    title: "Python vs JavaScript for backend development",
    author: "Emma Wilson",
    authorAvatar: "/placeholder-user.jpg",
    content: "I'm deciding between Python and JavaScript for my next backend project. What are the pros and cons of each? Which one would you recommend for different types of applications?",
    category: "programming",
    tags: ["Python", "JavaScript", "Backend", "Node.js"],
    replies: 27,
    likes: 41,
    time: "8 hours ago",
    isLiked: true,
    authorLevel: "Backend Developer",
    authorPoints: 1800,
    isAnswered: false
  }
]

const questions = [
  {
    id: 1,
    title: "How do I implement authentication in Next.js 13+?",
    author: "John Doe",
    authorAvatar: "/placeholder-user.jpg",
    content: "I'm trying to add user authentication to my Next.js app using the new app router. What's the recommended approach?",
    tags: ["Next.js", "Authentication", "React"],
    answers: 5,
    votes: 23,
    time: "1 hour ago",
    isAnswered: true,
    authorLevel: "Intermediate",
    authorPoints: 1200
  },
  {
    id: 2,
    title: "Understanding closures in JavaScript",
    author: "Jane Smith",
    authorAvatar: "/placeholder-user.jpg",
    content: "Can someone explain closures in simple terms? I'm having trouble grasping the concept.",
    tags: ["JavaScript", "Closures", "Functions"],
    answers: 8,
    votes: 45,
    time: "3 hours ago",
    isAnswered: true,
    authorLevel: "Beginner",
    authorPoints: 800
  },
  {
    id: 3,
    title: "Best way to optimize React app performance?",
    author: "Bob Wilson",
    authorAvatar: "/placeholder-user.jpg",
    content: "My React app is getting slow. What are the best practices for performance optimization?",
    tags: ["React", "Performance", "Optimization"],
    answers: 12,
    votes: 67,
    time: "5 hours ago",
    isAnswered: false,
    authorLevel: "Intermediate",
    authorPoints: 1500
  }
]

const studyGroups = [
  {
    id: 1,
    name: "React Study Group",
    description: "Weekly sessions to learn React concepts and build projects together",
    members: 156,
    category: "Frontend Development",
    nextMeeting: "Tomorrow at 7 PM",
    leader: "Sarah Chen",
    leaderAvatar: "/placeholder-user.jpg",
    isJoined: false,
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    name: "Algorithm Masters",
    description: "Daily algorithm practice and interview preparation",
    members: 89,
    category: "Data Structures",
    nextMeeting: "Today at 6 PM",
    leader: "Mike Johnson",
    leaderAvatar: "/placeholder-user.jpg",
    isJoined: true,
    tags: ["Algorithms", "Interview Prep", "Problem Solving"]
  },
  {
    id: 3,
    name: "Python for Data Science",
    description: "Learn Python programming with a focus on data science applications",
    members: 234,
    category: "Data Science",
    nextMeeting: "Friday at 8 PM",
    leader: "Emma Wilson",
    leaderAvatar: "/placeholder-user.jpg",
    isJoined: false,
    tags: ["Python", "Data Science", "Machine Learning"]
  },
  {
    id: 4,
    name: "Web Security Study Group",
    description: "Learn about web security, vulnerabilities, and best practices",
    members: 67,
    category: "Cybersecurity",
    nextMeeting: "Wednesday at 6 PM",
    leader: "Alex Rivera",
    leaderAvatar: "/placeholder-user.jpg",
    isJoined: false,
    tags: ["Security", "Web Development", "Best Practices"]
  }
]

const events = [
  {
    id: 1,
    title: "React Workshop: Advanced Hooks",
    description: "Deep dive into advanced React hooks and patterns",
    date: "2024-01-15",
    time: "7:00 PM",
    duration: "2 hours",
    attendees: 45,
    maxAttendees: 50,
    type: "Workshop",
    speaker: "Sarah Chen",
    speakerAvatar: "/placeholder-user.jpg",
    isRegistered: false,
    tags: ["React", "Hooks", "Advanced"]
  },
  {
    id: 2,
    title: "Mock Interview Session",
    description: "Practice coding interviews with experienced developers",
    date: "2024-01-16",
    time: "6:00 PM",
    duration: "1.5 hours",
    attendees: 23,
    maxAttendees: 30,
    type: "Study Session",
    speaker: "Mike Johnson",
    speakerAvatar: "/placeholder-user.jpg",
    isRegistered: true,
    tags: ["Interview Prep", "Algorithms", "Career"]
  },
  {
    id: 3,
    title: "Monthly Community Meetup",
    description: "Network with fellow developers and share your projects",
    date: "2024-01-20",
    time: "5:00 PM",
    duration: "3 hours",
    attendees: 78,
    maxAttendees: 100,
    type: "Meetup",
    speaker: "Community Team",
    speakerAvatar: "/placeholder-user.jpg",
    isRegistered: false,
    tags: ["Networking", "Community", "Projects"]
  }
]

const announcements = [
  {
    id: 1,
    title: "New Course: Advanced TypeScript Patterns",
    content: "We're excited to announce our new Advanced TypeScript course! Learn advanced patterns and best practices.",
    type: "course",
    time: "2 hours ago",
    isRead: false
  },
  {
    id: 2,
    title: "Community Challenge: Build a Weather App",
    content: "Join our monthly challenge! Build a weather app using any framework and share your solution.",
    type: "challenge",
    time: "1 day ago",
    isRead: true
  },
  {
    id: 3,
    title: "Mentorship Program Applications Open",
    content: "Apply to become a mentor or find a mentor to accelerate your learning journey.",
    type: "program",
    time: "2 days ago",
    isRead: false
  }
]

const topContributors = [
  { name: "Sarah Chen", points: 2450, avatar: "/placeholder-user.jpg", badge: "👑", level: "Expert", rank: 1 },
  { name: "Mike Johnson", points: 2100, avatar: "/placeholder-user.jpg", badge: "🥈", level: "Advanced", rank: 2 },
  { name: "Alex Rivera", points: 1950, avatar: "/placeholder-user.jpg", badge: "🥉", level: "Advanced", rank: 3 },
  { name: "Emma Wilson", points: 1800, avatar: "/placeholder-user.jpg", badge: "⭐", level: "Intermediate", rank: 4 },
  { name: "David Kim", points: 1650, avatar: "/placeholder-user.jpg", badge: "🔥", level: "Intermediate", rank: 5 }
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("discussions")

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          discussion.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || discussion.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          question.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Community Hub
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto lg:mx-0">
                Connect, collaborate, and grow with fellow learners in our vibrant community
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button className="shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                New Discussion
              </Button>
              <Button variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <HelpCircle className="h-4 w-4 mr-2" />
                Ask Question
              </Button>
            </div>
          </div>

          {/* Mobile Category Filter - Only shown on mobile */}
          <div className="lg:hidden mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory("all")}
                    className="shrink-0"
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="shrink-0"
                    >
                      <category.icon className={`h-3 w-3 mr-1 ${category.color}`} />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar Navigation - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-1 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory("all")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    All Discussions
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className={`h-4 w-4 mr-2 ${category.color}`} />
                      {category.name}
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Members</span>
                    <span className="font-semibold">25.3k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Discussions Today</span>
                    <span className="font-semibold">147</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Questions Answered</span>
                    <span className="font-semibold">892</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Your Rank</span>
                    <span className="font-semibold">#1,247</span>
                  </div>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5" />
                    Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="text-lg">{contributor.badge}</div>
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={contributor.avatar} />
                          <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{contributor.name}</p>
                          <p className="text-xs text-muted-foreground">{contributor.points} points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Discussion
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Ask Question
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Create Study Group
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Host Event
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search and Filter */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search discussions, questions, or members..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" className="shrink-0">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Main Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1">
                  <TabsTrigger value="discussions" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-2 sm:px-4">
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">Discussions</span>
                    <span className="xs:hidden">Chat</span>
                  </TabsTrigger>
                  <TabsTrigger value="questions" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-2 sm:px-4">
                    <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    Q&A
                  </TabsTrigger>
                  <TabsTrigger value="groups" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-2 sm:px-4">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">Groups</span>
                    <span className="xs:hidden">Teams</span>
                  </TabsTrigger>
                  <TabsTrigger value="events" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-2 sm:px-4">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    Events
                  </TabsTrigger>
                </TabsList>

                {/* Discussions Tab */}
                <TabsContent value="discussions" className="space-y-4">
                  {filteredDiscussions.map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                            <AvatarImage src={discussion.authorAvatar} />
                            <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
                            <div>
                              <h3 className="font-semibold text-lg sm:text-xl hover:text-primary transition-colors line-clamp-2">
                                {discussion.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Avatar className="w-4 h-4">
                                    <AvatarImage src={discussion.authorAvatar} />
                                    <AvatarFallback className="text-xs">{discussion.author.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="truncate">{discussion.author}</span>
                                </span>
                                <Badge variant="outline" className="text-xs px-1 py-0">
                                  {discussion.authorLevel}
                                </Badge>
                                <span className="hidden sm:inline">•</span>
                                <span className="truncate">{discussion.time}</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline">{discussion.authorPoints} pts</span>
                              </div>
                            </div>

                            <p className="text-muted-foreground line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
                              {discussion.content}
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="flex items-center space-x-3">
                                <Badge variant="secondary" className="capitalize text-xs">
                                  {categories.find(c => c.id === discussion.category)?.name || discussion.category}
                                </Badge>
                                <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>{discussion.replies} replies</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`hover:bg-red-50 hover:text-red-600 ${discussion.isLiked ? 'text-red-600' : ''} h-8 w-8 sm:h-9 sm:w-auto sm:px-3`}
                                >
                                  <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${discussion.isLiked ? 'fill-current' : ''}`} />
                                  <span className="hidden sm:inline ml-1">{discussion.likes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3">
                                  <Share className="h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Q&A Tab */}
                <TabsContent value="questions" className="space-y-4">
                  {filteredQuestions.map((question) => (
                    <Card key={question.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="flex-shrink-0">
                            {question.isAnswered ? (
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
                            <div>
                              <h3 className="font-semibold text-lg sm:text-xl hover:text-primary transition-colors line-clamp-2">
                                {question.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Avatar className="w-4 h-4">
                                    <AvatarImage src={question.authorAvatar} />
                                    <AvatarFallback className="text-xs">{question.author.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="truncate">{question.author}</span>
                                </span>
                                <Badge variant="outline" className="text-xs px-1 py-0">
                                  {question.authorLevel}
                                </Badge>
                                <span className="hidden sm:inline">•</span>
                                <span className="truncate">{question.time}</span>
                              </div>
                            </div>

                            <p className="text-muted-foreground line-clamp-2 text-sm sm:text-base">
                              {question.content}
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <div className="flex flex-wrap gap-1">
                                  {question.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>{question.answers} answers</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3">
                                  <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span className="hidden sm:inline ml-1">{question.votes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3">
                                  <Share className="h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Groups Tab */}
                <TabsContent value="groups" className="space-y-4">
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                    {studyGroups.map((group) => (
                      <Card key={group.id} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{group.name}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">{group.category}</p>
                              </div>
                            </div>
                            <Button variant={group.isJoined ? "secondary" : "default"} size="sm" className="w-full sm:w-auto shrink-0">
                              {group.isJoined ? "Joined" : "Join Group"}
                            </Button>
                          </div>

                          <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{group.description}</p>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{group.members} members</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="truncate">{group.nextMeeting}</span>
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-4">
                            <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                              <AvatarImage src={group.leaderAvatar} />
                              <AvatarFallback className="text-xs">{group.leader.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs sm:text-sm text-muted-foreground truncate">Led by {group.leader}</span>
                          </div>

                          <div className="flex flex-wrap gap-1 mt-3">
                            {group.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Events Tab */}
                <TabsContent value="events" className="space-y-4">
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                    {events.map((event) => (
                      <Card key={event.id} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                                event.type === "Workshop" ? "bg-blue-100" :
                                event.type === "Study Session" ? "bg-green-100" :
                                event.type === "Meetup" ? "bg-purple-100" : "bg-gray-100"
                              }`}>
                                <Calendar className={`h-5 w-5 sm:h-6 sm:w-6 ${
                                  event.type === "Workshop" ? "text-blue-600" :
                                  event.type === "Study Session" ? "text-green-600" :
                                  event.type === "Meetup" ? "text-purple-600" : "text-gray-600"
                                }`} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{event.title}</h3>
                                <Badge variant="outline" className="text-xs mt-1 w-fit">{event.type}</Badge>
                              </div>
                            </div>
                            <Button variant={event.isRegistered ? "secondary" : "default"} size="sm" className="w-full sm:w-auto shrink-0">
                              {event.isRegistered ? "Registered" : "Register"}
                            </Button>
                          </div>

                          <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{event.description}</p>

                          <div className="space-y-2 text-xs sm:text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                              <span className="truncate">{event.date} at {event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                              <span>{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                              <span>{event.attendees}/{event.maxAttendees} registered</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-4">
                            <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                              <AvatarImage src={event.speakerAvatar} />
                              <AvatarFallback className="text-xs">{event.speaker.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs sm:text-sm text-muted-foreground truncate">Hosted by {event.speaker}</span>
                          </div>

                          <div className="flex flex-wrap gap-1 mt-3">
                            {event.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Announcements Section */}
          <div className="mt-8 lg:mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Megaphone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                      announcement.type === "course" ? "bg-blue-100" :
                      announcement.type === "challenge" ? "bg-orange-100" :
                      announcement.type === "program" ? "bg-green-100" : "bg-gray-100"
                    }`}>
                      {announcement.type === "course" ? <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> :
                       announcement.type === "challenge" ? <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" /> :
                       announcement.type === "program" ? <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" /> :
                       <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm sm:text-base line-clamp-1">{announcement.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">{announcement.content}</p>
                      <p className="text-xs text-muted-foreground mt-2">{announcement.time}</p>
                    </div>
                    {!announcement.isRead && (
                      <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2"></div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}