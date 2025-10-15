"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Play, RotateCcw } from "lucide-react"

interface CodeEditorProps {
  title: string
  language: string
  initialCode: string
  onRun?: (code: string) => void
  readOnly?: boolean
}

export function CodeEditor({ title, language, initialCode, onRun, readOnly = false }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
    }
  }

  const handleReset = () => {
    setCode(initialCode)
  }

  const handleRun = () => {
    if (onRun) {
      onRun(code)
    }
  }

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "javascript":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "html":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "css":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "python":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "react":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge className={getLanguageColor(language)}>{language}</Badge>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
              {!readOnly && (
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              )}
              {onRun && (
                <Button size="sm" onClick={handleRun}>
                  <Play className="h-4 w-4 mr-1" />
                  Run
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Textarea
            value={code}
            onChange={(e) => !readOnly && setCode(e.target.value)}
            className="font-mono text-sm min-h-[300px] code-editor resize-none"
            placeholder={`Write your ${language} code here...`}
            readOnly={readOnly}
            spellCheck={false}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}
