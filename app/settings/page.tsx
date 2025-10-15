"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { User, Bell, Palette, Download, Trash2, Save } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useTheme } from "@/contexts/ThemeContext"
import { useProgress } from "@/contexts/ProgressContext"
import type { Theme } from "@/types"

const themeOptions: { name: string; value: Theme; colors: { primary: string; secondary: string; accent: string } }[] = [
  { name: "Light", value: "light", colors: { primary: "#3b82f6", secondary: "#dbeafe", accent: "#bfdbfe" } },
  { name: "Gold", value: "gold", colors: { primary: "#fbbf24", secondary: "#fef3c7", accent: "#fde68a" } },
  { name: "Dark", value: "dark", colors: { primary: "#fbbf24", secondary: "#374151", accent: "#4b5563" } },
  { name: "Blue", value: "blue", colors: { primary: "#2563eb", secondary: "#dbeafe", accent: "#bfdbfe" } },
  { name: "Purple", value: "purple", colors: { primary: "#9333ea", secondary: "#e9d5ff", accent: "#d8b4fe" } },
  { name: "Green", value: "green", colors: { primary: "#22c55e", secondary: "#dcfce7", accent: "#bbf7d0" } },
  { name: "Red", value: "red", colors: { primary: "#ef4444", secondary: "#fee2e2", accent: "#fecaca" } },
  { name: "Orange", value: "orange", colors: { primary: "#f97316", secondary: "#fed7aa", accent: "#fdba74" } },
  { name: "Pink", value: "pink", colors: { primary: "#ec4899", secondary: "#fce7f3", accent: "#f9a8d4" } },
  { name: "Teal", value: "teal", colors: { primary: "#14b8a6", secondary: "#ccfbf1", accent: "#99f6e4" } },
  { name: "Cyan", value: "cyan", colors: { primary: "#06b6d4", secondary: "#cffafe", accent: "#a5f3fc" } },
  { name: "Indigo", value: "indigo", colors: { primary: "#6366f1", secondary: "#e0e7ff", accent: "#c7d2fe" } },
  { name: "Violet", value: "violet", colors: { primary: "#8b5cf6", secondary: "#ede9fe", accent: "#ddd6fe" } },
  { name: "Emerald", value: "emerald", colors: { primary: "#10b981", secondary: "#d1fae5", accent: "#a7f3d0" } },
  { name: "Lime", value: "lime", colors: { primary: "#84cc16", secondary: "#ecfccb", accent: "#d9f99d" } },
  { name: "Amber", value: "amber", colors: { primary: "#f59e0b", secondary: "#fef3c7", accent: "#fde68a" } },
  { name: "Rose", value: "rose", colors: { primary: "#f43f5e", secondary: "#fce7f3", accent: "#fecdd3" } },
  { name: "Sky", value: "sky", colors: { primary: "#0ea5e9", secondary: "#e0f2fe", accent: "#bae6fd" } },
  { name: "Slate", value: "slate", colors: { primary: "#64748b", secondary: "#f1f5f9", accent: "#e2e8f0" } },
  { name: "Zinc", value: "zinc", colors: { primary: "#71717a", secondary: "#f4f4f5", accent: "#e4e4e7" } },
  { name: "Neutral", value: "neutral", colors: { primary: "#737373", secondary: "#f5f5f5", accent: "#e5e5e5" } },
  { name: "Stone", value: "stone", colors: { primary: "#78716c", secondary: "#f5f5f4", accent: "#e7e5e4" } },
  { name: "Gray", value: "gray", colors: { primary: "#6b7280", secondary: "#f9fafb", accent: "#f3f4f6" } },
  { name: "Warm", value: "warm", colors: { primary: "#ea580c", secondary: "#fed7aa", accent: "#fdba74" } },
  { name: "Cool", value: "cool", colors: { primary: "#0284c7", secondary: "#bae6fd", accent: "#7dd3fc" } },
  { name: "Vibrant", value: "vibrant", colors: { primary: "#a855f7", secondary: "#c4b5fd", accent: "#d4bcf0" } },
  { name: "Muted", value: "muted", colors: { primary: "#6b7280", secondary: "#f1f5f9", accent: "#e2e8f0" } },
  { name: "Ocean", value: "ocean", colors: { primary: "#06b6d4", secondary: "#cffafe", accent: "#a5f3fc" } },
  { name: "Sunset", value: "sunset", colors: { primary: "#fb923c", secondary: "#fed7aa", accent: "#fdba74" } },
  { name: "Forest", value: "forest", colors: { primary: "#22c55e", secondary: "#dcfce7", accent: "#bbf7d0" } },
  { name: "Lavender", value: "lavender", colors: { primary: "#a855f7", secondary: "#e9d5ff", accent: "#d8b4fe" } },
  { name: "Coral", value: "coral", colors: { primary: "#f43f5e", secondary: "#fce7f3", accent: "#fecdd3" } },
  { name: "Mint", value: "mint", colors: { primary: "#10b981", secondary: "#d1fae5", accent: "#a7f3d0" } },
  { name: "Cherry", value: "cherry", colors: { primary: "#db2777", secondary: "#fce7f3", accent: "#f9a8d4" } },
  { name: "Sapphire", value: "sapphire", colors: { primary: "#3b82f6", secondary: "#dbeafe", accent: "#bfdbfe" } },
]

export default function SettingsPage() {
  const { user } = useAuth()
  const { theme, setTheme } = useTheme()
  const { exportProgress } = useProgress()
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)
  const [showSaveAlert, setShowSaveAlert] = useState(false)

  const handleSaveSettings = () => {
    // In a real app, this would save to backend
    setShowSaveAlert(true)
    setTimeout(() => setShowSaveAlert(false), 3000)
  }

  const handleExportData = () => {
    const data = exportProgress()
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `learnhub-data-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // In a real app, this would delete the account
      alert("Account deletion would be processed here")
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-3xl font-heading font-bold">Settings</h1>
              <p className="text-muted-foreground text-lg">Manage your account and learning preferences</p>
            </div>

            {showSaveAlert && (
              <Alert>
                <Save className="h-4 w-4" />
                <AlertDescription>Settings saved successfully!</AlertDescription>
              </Alert>
            )}

            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user?.email} />
                  </div>
                </div>
                <Button onClick={handleSaveSettings}>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Appearance</span>
                </CardTitle>
                <CardDescription>Customize how IOLEARN looks and feels with 32 beautiful themes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Quick Theme Switch</Label>
                      <p className="text-sm text-muted-foreground">Switch between light, gold, and dark modes</p>
                    </div>
                    <ThemeToggle />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Current theme: <span className="capitalize font-medium">{theme}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Choose Your Theme</Label>
                    <p className="text-sm text-muted-foreground">Select from 32 beautifully crafted color themes</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                    {themeOptions.map((themeOption) => (
                      <motion.button
                        key={themeOption.value}
                        onClick={() => setTheme(themeOption.value)}
                        className={`relative p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                          theme === themeOption.value
                            ? 'border-primary shadow-lg ring-2 ring-primary/20'
                            : 'border-border hover:border-primary/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="space-y-2">
                          <div className="flex space-x-1">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: themeOption.colors.primary }}
                            />
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: themeOption.colors.secondary }}
                            />
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: themeOption.colors.accent }}
                            />
                          </div>
                          <div className="text-xs font-medium text-center capitalize">
                            {themeOption.name}
                          </div>
                        </div>
                        {theme === themeOption.value && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    Click on any theme to apply it instantly
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </CardTitle>
                <CardDescription>Control how you receive updates and reminders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications about your progress</p>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Email Updates</Label>
                    <p className="text-sm text-muted-foreground">Get weekly progress summaries via email</p>
                  </div>
                  <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
                </div>
                <Button onClick={handleSaveSettings}>Save Preferences</Button>
              </CardContent>
            </Card>

            {/* Data & Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Data & Privacy</span>
                </CardTitle>
                <CardDescription>Manage your data and privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Export Data</Label>
                    <p className="text-sm text-muted-foreground">Download all your learning data</p>
                  </div>
                  <Button onClick={handleExportData} variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-destructive">Danger Zone</Label>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button onClick={handleDeleteAccount} variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
