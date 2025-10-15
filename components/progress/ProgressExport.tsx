"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, FileText, Share2, Calendar, CheckCircle } from "lucide-react"
import { useProgress } from "@/contexts/ProgressContext"
import { useAuth } from "@/contexts/AuthContext"

export function ProgressExport() {
  const [isExporting, setIsExporting] = useState(false)
  const [exportComplete, setExportComplete] = useState(false)
  const { exportProgress, getStats } = useProgress()
  const { user } = useAuth()

  const stats = getStats()

  const handleExportJSON = async () => {
    setIsExporting(true)

    try {
      const progressData = exportProgress()
      const blob = new Blob([progressData], { type: "application/json" })
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = `iolearn-progress-${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      URL.revokeObjectURL(url)
      setExportComplete(true)

      setTimeout(() => setExportComplete(false), 3000)
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleShareProgress = async () => {
    const shareText = `I've completed ${stats.totalLessonsCompleted} lessons and taken ${stats.totalQuizzesTaken} quizzes on IOLEARN with an average score of ${Math.round(stats.averageScore)}%! 🎉`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My IOLEARN Progress",
          text: shareText,
          url: window.location.origin,
        })
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      await navigator.clipboard.writeText(`${shareText} ${window.location.origin}`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Export Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Progress Summary</span>
            </CardTitle>
            <CardDescription>Overview of your learning data available for export</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{stats.totalLessonsCompleted}</div>
                <div className="text-sm text-muted-foreground">Lessons Completed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{stats.totalQuizzesTaken}</div>
                <div className="text-sm text-muted-foreground">Quizzes Taken</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{Math.round(stats.averageScore)}%</div>
                <div className="text-sm text-muted-foreground">Average Score</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{Math.floor(stats.totalTimeSpent / 3600)}h</div>
                <div className="text-sm text-muted-foreground">Time Spent</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Data includes all activity since{" "}
                {user?.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : "account creation"}
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Export Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>Download your progress data or share your achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* JSON Export */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-medium">JSON Export</h3>
                  <p className="text-sm text-muted-foreground">
                    Download a complete backup of your learning progress, quiz results, and statistics in JSON format.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Complete Data</Badge>
                    <Badge variant="outline">Machine Readable</Badge>
                    <Badge variant="outline">Backup Ready</Badge>
                  </div>
                </div>
                <Button onClick={handleExportJSON} disabled={isExporting} size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  {isExporting ? "Exporting..." : "Export JSON"}
                </Button>
              </div>

              {exportComplete && (
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>Progress data exported successfully! Check your downloads folder.</AlertDescription>
                </Alert>
              )}
            </div>

            {/* Social Share */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-medium">Share Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your learning achievements on social media to inspire others.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Social Ready</Badge>
                    <Badge variant="outline">Motivational</Badge>
                  </div>
                </div>
                <Button onClick={handleShareProgress} variant="outline" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Progress
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>Details about the data included in your export</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Learning Progress</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Course completion status</li>
                  <li>• Lesson progress tracking</li>
                  <li>• Time spent per lesson</li>
                  <li>• Completion timestamps</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Quiz Results</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Quiz scores and answers</li>
                  <li>• Question difficulty levels</li>
                  <li>• Performance analytics</li>
                  <li>• Historical trends</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
