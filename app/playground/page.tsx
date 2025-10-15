"use client"

import { useState, Suspense } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, BookOpen, Loader2 } from "lucide-react"

// Dynamically import CodePlayground for better performance
const CodePlayground = dynamic(() => import("@/components/code/CodePlayground"), {
  loading: () => (
    <Card className="w-full">
      <CardContent className="flex items-center justify-center p-8">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading Code Playground...</span>
        </div>
      </CardContent>
    </Card>
  ),
  ssr: false // Disable SSR for this component as it uses browser APIs
})

const codeExamples = {
  javascript: `// Welcome to the JavaScript Playground!
// Try running this code to see how it works

function greetUser(name) {
  return \`Hello, \${name}! Welcome to IOLEARN!\`;
}

const userName = "Developer";
const greeting = greetUser(userName);

console.log(greeting);

// Try creating your own functions below:
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

console.log("Area of circle with radius 5:", calculateArea(5));`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is a sample HTML page created in the IOLEARN playground!</p>
            <button onclick="alert('Hello from JavaScript!')">Click Me!</button>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`,

  css: `/* Welcome to the CSS Playground! */
/* This CSS will style the preview elements */

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.1em;
  margin-bottom: 20px;
}

button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.box {
  width: 100px;
  height: 100px;
  background: #4ecdc4;
  margin: 20px auto;
  border-radius: 10px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}`,

  react: `import React, { useState } from 'react';

function WelcomeComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to React Playground!</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Enter your name: 
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        {name && <p>Hello, {name}!</p>}
      </div>
      
      <div>
        <p>You clicked {count} times</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default WelcomeComponent;`,

  python: `# Welcome to the Python Playground!
# Note: This is a demonstration - actual Python execution would require a backend service

def greet_user(name):
    """Function to greet a user"""
    return f"Hello, {name}! Welcome to IOLEARN!"

def calculate_fibonacci(n):
    """Calculate the nth Fibonacci number"""
    if n <= 1:
        return n
    else:
        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Main code
user_name = "Python Developer"
greeting = greet_user(user_name)
print(greeting)

# Calculate some Fibonacci numbers
print("\\nFibonacci sequence:")
for i in range(10):
    fib_num = calculate_fibonacci(i)
    print(f"F({i}) = {fib_num}")

# List comprehension example
squares = [x**2 for x in range(1, 11)]
print(f"\\nSquares of 1-10: {squares}")

# Dictionary example
student_grades = {
    "Alice": 95,
    "Bob": 87,
    "Charlie": 92,
    "Diana": 98
}

print("\\nStudent Grades:")
for student, grade in student_grades.items():
    print(f"{student}: {grade}")`,
}

export default function PlaygroundPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof codeExamples>("javascript")

  const languageOptions = [
    { key: "javascript", label: "JavaScript", icon: "🟨", description: "Interactive web programming" },
    { key: "html", label: "HTML", icon: "🟧", description: "Web page structure" },
    { key: "css", label: "CSS", icon: "🟦", description: "Styling and layout" },
    { key: "react", label: "React", icon: "⚛️", description: "Component-based UI" },
    { key: "python", label: "Python", icon: "🐍", description: "General-purpose programming" },
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl font-heading font-bold">Code Playground</h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Experiment with code, test your ideas, and learn by doing in our interactive coding environment
              </p>
            </div>

            {/* Language Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {languageOptions.map((option) => (
                <motion.div
                  key={option.key}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="will-change-transform"
                >
                  <Card
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedLanguage === option.key
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:shadow-md hover:bg-accent/50"
                    }`}
                    onClick={() => setSelectedLanguage(option.key as keyof typeof codeExamples)}
                  >
                    <CardHeader className="text-center pb-2 px-3 sm:px-4">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 select-none">{option.icon}</div>
                      <CardTitle className="text-sm sm:text-base md:text-lg">{option.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 px-3 sm:px-4">
                      <CardDescription className="text-center text-xs sm:text-sm">{option.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Code Playground */}
            <motion.div
              key={selectedLanguage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CodePlayground
                initialCode={codeExamples[selectedLanguage]}
                language={selectedLanguage as any}
                title={`${languageOptions.find((l) => l.key === selectedLanguage)?.label} Playground`}
              />
            </motion.div>

            {/* Tips and Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                    <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                    <span>Tips & Tricks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <div className="text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <p>• Use console.log() in JavaScript to see output</p>
                    <p>• HTML and CSS show live preview in the Preview tab</p>
                    <p>• Click "Open External" to continue in CodeSandbox</p>
                    <p>• Use the fullscreen mode for better coding experience</p>
                    <p>• Download your code to save your work locally</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                    <span>Learning Resources</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <div className="space-y-1 sm:space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent text-xs sm:text-sm">
                      <Code className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Browse Courses
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent text-xs sm:text-sm">
                      <Lightbulb className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Code Examples
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent text-xs sm:text-sm">
                      <BookOpen className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
