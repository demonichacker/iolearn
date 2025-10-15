"use client"

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Play, Copy, RotateCcw, ExternalLink, Download, Maximize2, Sun, Moon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CodePlaygroundProps {
  initialCode: string
  language: "javascript" | "html" | "css" | "python" | "react"
  title?: string
}

const CodePlayground = React.memo(function CodePlayground({ initialCode, language, title = "Code Playground" }: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState(language)
  const [fontSize, setFontSize] = useState("14")
  const [theme, setTheme] = useState("light")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  const handleRun = useCallback(async () => {
    setIsRunning(true)
    setOutput("")
    setError("")

    try {
      if (selectedLanguage === "javascript") {
        await executeJavaScript()
      } else if (selectedLanguage === "html") {
        executeHTML()
      } else if (selectedLanguage === "css") {
        executeCSS()
      } else if (selectedLanguage === "react") {
        executeReact()
      } else if (selectedLanguage === "python") {
        executePython()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setIsRunning(false)
    }
  }, [selectedLanguage])

  const executeJavaScript = async () => {
    const logs: string[] = []
    const errors: string[] = []

    // Create a safe execution environment
    const originalLog = console.log
    const originalError = console.error
    const originalWarn = console.warn

    console.log = (...args) => {
      logs.push(args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg))).join(" "))
    }

    console.error = (...args) => {
      errors.push(args.map((arg) => String(arg)).join(" "))
    }

    console.warn = (...args) => {
      logs.push("⚠️ " + args.map((arg) => String(arg)).join(" "))
    }

    try {
      // Create a function to execute the code safely
      const func = new Function(`
        "use strict";
        ${code}
      `)
      const result = func()
      if (result !== undefined) {
        logs.push(`→ ${typeof result === "object" ? JSON.stringify(result, null, 2) : String(result)}`)
      }
    } catch (error) {
      errors.push(`Error: ${error instanceof Error ? error.message : String(error)}`)
    }

    // Restore original console methods
    console.log = originalLog
    console.error = originalError
    console.warn = originalWarn

    if (errors.length > 0) {
      setError(errors.join("\n"))
    } else {
      setOutput(logs.join("\n") || "Code executed successfully (no output)")
    }
  }

  const executeHTML = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const doc = iframe.contentDocument || iframe.contentWindow?.document
      if (doc) {
        doc.open()
        doc.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: system-ui, sans-serif; margin: 20px; }
              * { box-sizing: border-box; }
            </style>
          </head>
          <body>
            ${code}
          </body>
          </html>
        `)
        doc.close()
      }
    }
    setOutput("HTML rendered in preview")
  }

  const executeCSS = () => {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: system-ui, sans-serif; margin: 20px; }
          ${code}
        </style>
      </head>
      <body>
        <div class="container">
          <h1>CSS Preview</h1>
          <p>This is a sample paragraph to demonstrate your CSS styles.</p>
          <button>Sample Button</button>
          <div class="box">Sample Box</div>
        </div>
      </body>
      </html>
    `

    if (iframeRef.current) {
      const iframe = iframeRef.current
      const doc = iframe.contentDocument || iframe.contentWindow?.document
      if (doc) {
        doc.open()
        doc.write(htmlTemplate)
        doc.close()
      }
    }
    setOutput("CSS applied to preview")
  }

  const executeReact = () => {
    setOutput(
      "React component preview would require a build step. In a real implementation, this would compile and render the React component.",
    )
  }

  const executePython = () => {
    setOutput("Python execution would require a backend service like Pyodide or a Python interpreter API.")
  }

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
    setOutput("")
    setError("")
  }

  const handleDownload = () => {
    const extension = selectedLanguage === "javascript" ? "js" : selectedLanguage === "python" ? "py" : selectedLanguage
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `playground-code.${extension}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleOpenExternal = () => {
    const encodedCode = encodeURIComponent(code)
    let url = ""

    switch (selectedLanguage) {
      case "javascript":
        url = `https://codesandbox.io/s/new?file=/src/index.js&code=${encodedCode}`
        break
      case "react":
        url = `https://codesandbox.io/s/new?template=react&file=/src/App.js&code=${encodedCode}`
        break
      case "html":
        url = `https://codepen.io/pen?editors=1000&html=${encodedCode}`
        break
      default:
        url = `https://codesandbox.io/s/new?file=/src/index.js&code=${encodedCode}`
    }

    window.open(url, "_blank")
  }

  const languageOptions = useMemo(() => [
    { value: "javascript", label: "JavaScript", icon: "🟨" },
    { value: "html", label: "HTML", icon: "🟧" },
    { value: "css", label: "CSS", icon: "🟦" },
    { value: "react", label: "React", icon: "⚛️" },
    { value: "python", label: "Python", icon: "🐍" },
  ], [])

  return (
    <Card className={`w-full ${isFullscreen ? "fixed inset-0 sm:inset-4 z-50" : ""} ${
      theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
    }`}>
      <CardHeader className={theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className={`text-base sm:text-lg flex items-center space-x-2 ${
            theme === "dark" ? "text-slate-100" : "text-slate-900"
          }`}>
            <span>{title}</span>
            <Badge variant="outline" className={`ml-2 text-xs ${
              theme === "dark" ? "border-slate-600 text-slate-300" : "border-slate-300 text-slate-700"
            }`}>
              {languageOptions.find((l) => l.value === selectedLanguage)?.icon}{" "}
              <span className="hidden sm:inline">{languageOptions.find((l) => l.value === selectedLanguage)?.label}</span>
            </Badge>
          </CardTitle>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Language Selector */}
            <Select value={selectedLanguage} onValueChange={(value: any) => setSelectedLanguage(value)}>
              <SelectTrigger className="w-24 sm:w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Settings */}
            <Select value={fontSize} onValueChange={setFontSize}>
              <SelectTrigger className="w-14 sm:w-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                <SelectItem value="12" className="text-white hover:bg-slate-700 focus:bg-slate-700">12px</SelectItem>
                <SelectItem value="14" className="text-white hover:bg-slate-700 focus:bg-slate-700">14px</SelectItem>
                <SelectItem value="16" className="text-white hover:bg-slate-700 focus:bg-slate-700">16px</SelectItem>
                <SelectItem value="18" className="text-white hover:bg-slate-700 focus:bg-slate-700">18px</SelectItem>
                <SelectItem value="20" className="text-white hover:bg-slate-700 focus:bg-slate-700">20px</SelectItem>
                <SelectItem value="24" className="text-white hover:bg-slate-700 focus:bg-slate-700">24px</SelectItem>
                <SelectItem value="32" className="text-yellow-400 hover:bg-yellow-500 hover:text-black focus:bg-yellow-500 focus:text-black font-bold border border-yellow-400">32px ⭐</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)}>
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className={`flex flex-wrap items-center gap-2 p-3 rounded-lg ${
          theme === "dark" ? "bg-slate-700" : "bg-slate-100"
        }`}>
          <Button variant="outline" size="sm" onClick={handleCopy} className={
            theme === "dark" ? "border-slate-600 text-slate-200 hover:bg-slate-600" : ""
          }>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset} className={
            theme === "dark" ? "border-slate-600 text-slate-200 hover:bg-slate-600" : ""
          }>
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload} className={
            theme === "dark" ? "border-slate-600 text-slate-200 hover:bg-slate-600" : ""
          }>
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          <Button variant="outline" size="sm" onClick={handleOpenExternal} className={
            theme === "dark" ? "border-slate-600 text-slate-200 hover:bg-slate-600" : ""
          }>
            <ExternalLink className="h-4 w-4 mr-1" />
            Open External
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="output">Output</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium capitalize">{selectedLanguage} Editor</span>
                <Button onClick={handleRun} disabled={isRunning} size="sm">
                  <Play className="h-4 w-4 mr-1" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
              </div>

              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={`font-mono min-h-[250px] md:min-h-[400px] code-editor resize-none ${
                  theme === "dark"
                    ? "bg-slate-900 text-slate-100 border-slate-700 placeholder:text-slate-400"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-500"
                }`}
                style={{ fontSize: `${fontSize}px` }}
                placeholder={`Write your ${selectedLanguage} code here...`}
                spellCheck={false}
              />
            </div>
          </TabsContent>

          <TabsContent value="output" className="space-y-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Console Output</span>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription className="font-mono text-sm whitespace-pre-wrap">{error}</AlertDescription>
                </Alert>
              )}

              <div className={`rounded-md p-4 min-h-[250px] md:min-h-[400px] font-mono text-sm whitespace-pre-wrap overflow-auto ${
                theme === "dark"
                  ? "bg-slate-900 text-slate-100 border border-slate-700"
                  : "bg-slate-50 text-slate-900 border border-slate-200"
              }`}>
                {output || "Run your code to see the output here..."}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Live Preview</span>

              {selectedLanguage === "html" || selectedLanguage === "css" ? (
                <iframe
                  ref={iframeRef}
                  className="w-full h-[250px] md:h-[400px] border rounded-md bg-white"
                  title="Code Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className={`rounded-md p-4 min-h-[250px] md:min-h-[400px] flex items-center justify-center border ${
                  theme === "dark"
                    ? "bg-slate-900 text-slate-400 border-slate-700"
                    : "bg-slate-50 text-slate-600 border-slate-200"
                }`}>
                  <div className="text-center space-y-2">
                    <p>Live preview is available for HTML and CSS</p>
                    <p className="text-sm">Switch to Output tab to see execution results</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
})

CodePlayground.displayName = "CodePlayground"

export default CodePlayground
