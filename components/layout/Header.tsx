"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { GradientButton } from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"
import { BookOpen, LogOut, Zap, Briefcase, BarChart3, Users, Settings as SettingsIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const landingNavTabs = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ]

  const dashboardNavItems = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠" },
    { name: "Courses", href: "/courses", icon: "📚" },
    { name: "Roadmap", href: "/roadmap", icon: "🗺️" },
    { name: "Community", href: "/community", icon: "💬" },
    { name: "Progress", href: "/progress", icon: "📊" },
  ]

  // Landing page navbar (for non-authenticated users or home page)
  if (!user) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <BookOpen className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  IOLEARN
                </span>
              </Link>
            </div>

            {/* Center: Navigation Items - Desktop */}
            <div className="hidden md:flex items-center">
              <div className="bg-muted/50 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1 shadow-sm">
                <nav className="flex items-center space-x-1">
                  {landingNavTabs.map((tab) => (
                    <Link
                      key={tab.name}
                      href={tab.href}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-background/50 rounded-full transition-all duration-200 relative group"
                    >
                      {tab.name}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetDescription className="sr-only">Access navigation links and account options</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-6 mt-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        IOLEARN
                      </span>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-2">
                      {landingNavTabs.map((tab) => (
                        <Link
                          key={tab.name}
                          href={tab.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                        >
                          {tab.name === "Learn" && <BookOpen className="h-4 w-4" />}
                          {tab.name === "Practice" && <Zap className="h-4 w-4" />}
                          {tab.name === "Careers" && <Briefcase className="h-4 w-4" />}
                          {tab.name === "Resources" && <BarChart3 className="h-4 w-4" />}
                          {tab.name === "Community" && <Users className="h-4 w-4" />}
                          <span>{tab.name}</span>
                        </Link>
                      ))}

                    </nav>

                    {/* Theme Toggle */}
                    <div className="flex items-center justify-center py-4 border-y border-border/50">
                      <ThemeToggle />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row space-x-3">
                      <Button variant="outline" className="flex-1 rounded-full justify-center" asChild>
                        <Link href="/login">
                          Login
                        </Link>
                      </Button>
                      <Button className="flex-1 rounded-full justify-center" asChild>
                        <Link href="/signup">
                          Sign Up
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Right: Action Buttons - Desktop Only */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm font-medium text-foreground/70 hover:text-primary hover:bg-accent/50 transition-all duration-200"
                  asChild
                >
                  <Link href="/login">Log In</Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 rounded-lg px-6"
                  asChild
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  // Dashboard navbar (for authenticated users)
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <BookOpen className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                IOLEARN
              </span>
            </Link>

            {/* Dashboard Navigation - Desktop */}
            <nav className="flex items-center space-x-1">
              {dashboardNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 group relative"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile: Logo Centered */}
          <div className="lg:hidden flex-1 flex justify-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <BookOpen className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                IOLEARN
              </span>
            </Link>
          </div>

          {/* Mobile Menu - Dashboard */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader>
                  <SheetTitle className="sr-only">Dashboard Menu</SheetTitle>
                  <SheetDescription className="sr-only">Access dashboard navigation and account options</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-6">
                  {/* User Info */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-border/50">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/courses" className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Browse Courses</span>
                      </Link>
                    </Button>
                  </div>

                  {/* Theme Toggle */}
                  <div className="flex items-center justify-center py-4 border-y border-border/50">
                    <ThemeToggle />
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {dashboardNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}

                    <Link
                      href="/playground"
                      className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                    >
                      <span className="text-lg">⚡</span>
                      <span>Playground</span>
                    </Link>

                    <Link
                      href="/settings"
                      className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                    >
                      <span className="text-lg">⚙️</span>
                      <span>Settings</span>
                    </Link>
                  </nav>

                  {/* Sign Out */}
                  <div className="pt-6 border-t border-border/50">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right: Search, Notifications, and User Profile - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="w-64 pl-10 pr-4 py-2 text-sm bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 placeholder:text-muted-foreground"
              />
            </div>

            {/* Notifications Bell */}
            <Button
              variant="ghost"
              size="sm"
              className="relative h-9 w-9 p-0 hover:bg-accent/50 transition-all duration-200"
            >
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a6 6 0 01-6-6V9a6 6 0 0110.29-4.12L15 9v8z" />
              </svg>
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">3</span>
              </div>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative flex items-center space-x-2 h-10 px-3 rounded-lg border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xs font-semibold text-white">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden md:inline text-sm font-medium">{user?.name}</span>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end" forceMount>
                <div className="px-3 py-4 border-b border-border/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-sm font-semibold text-white">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </div>

                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center cursor-pointer">
                    <span className="mr-3 text-lg">🏠</span>
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/courses" className="flex items-center cursor-pointer">
                    <BookOpen className="mr-3 h-4 w-4" />
                    My Courses
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/roadmap" className="flex items-center cursor-pointer">
                    <span className="mr-3 text-lg">🗺️</span>
                    Roadmap
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/community" className="flex items-center cursor-pointer">
                    <span className="mr-3 text-lg">💬</span>
                    Community
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/progress" className="flex items-center cursor-pointer">
                    <span className="mr-3 text-lg">📊</span>
                    Progress
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center cursor-pointer">
                    <SettingsIcon className="mr-3 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleLogout} className="flex items-center cursor-pointer text-destructive focus:text-destructive hover:bg-destructive/10">
                  <LogOut className="mr-3 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
