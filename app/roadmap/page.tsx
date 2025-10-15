"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Cpu,
  Zap,
  CheckCircle,
  Clock,
  ArrowRight,
  Target,
  BookOpen,
  ChevronDown,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const roadmaps = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Master modern web development with React, TypeScript, and cutting-edge tools",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    duration: "6-9 months",
    difficulty: "Intermediate",
    skills: [
      { name: "HTML & CSS", completed: true, current: false },
      { name: "JavaScript", completed: true, current: false },
      { name: "React", completed: false, current: true },
      { name: "TypeScript", completed: false, current: false },
      { name: "Next.js", completed: false, current: false },
      { name: "Tailwind CSS", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "1", title: "HTML & CSS Fundamentals", completed: true },
      { id: "2", title: "JavaScript Basics", completed: true },
      { id: "3", title: "React Essentials", completed: false },
      { id: "4", title: "Advanced React Patterns", completed: false }
    ]
  },
  {
    id: "backend",
    title: "Backend Developer",
    description: "Build robust server-side applications with Node.js, databases, and APIs",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    duration: "7-10 months",
    difficulty: "Intermediate",
    skills: [
      { name: "JavaScript", completed: true, current: false },
      { name: "Node.js", completed: false, current: true },
      { name: "Express.js", completed: false, current: false },
      { name: "Databases", completed: false, current: false },
      { name: "REST APIs", completed: false, current: false },
      { name: "Authentication", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "5", title: "Node.js Fundamentals", completed: false },
      { id: "6", title: "Express.js Mastery", completed: false },
      { id: "7", title: "Database Design", completed: false },
      { id: "8", title: "API Development", completed: false }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    description: "Complete web development mastery from frontend to backend",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    duration: "10-14 months",
    difficulty: "Advanced",
    skills: [
      { name: "Frontend Basics", completed: true, current: false },
      { name: "Backend Basics", completed: false, current: true },
      { name: "Database Design", completed: false, current: false },
      { name: "DevOps", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Performance", completed: false, current: false },
      { name: "Scalability", completed: false, current: false }
    ],
    courses: [
      { id: "9", title: "Full-Stack Foundations", completed: false },
      { id: "10", title: "MERN Stack", completed: false },
      { id: "11", title: "DevOps Essentials", completed: false },
      { id: "12", title: "Advanced Topics", completed: false }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    description: "Create native and cross-platform mobile applications",
    icon: Smartphone,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    duration: "8-11 months",
    difficulty: "Intermediate",
    skills: [
      { name: "JavaScript", completed: true, current: false },
      { name: "React Native", completed: false, current: true },
      { name: "iOS Development", completed: false, current: false },
      { name: "Android Development", completed: false, current: false },
      { name: "Cross-Platform", completed: false, current: false },
      { name: "App Store", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Performance", completed: false, current: false }
    ],
    courses: [
      { id: "13", title: "React Native Basics", completed: false },
      { id: "14", title: "iOS Development", completed: false },
      { id: "15", title: "Android Development", completed: false },
      { id: "16", title: "Mobile App Deployment", completed: false }
    ]
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    description: "Master deployment, automation, and infrastructure management",
    icon: Cloud,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    duration: "9-12 months",
    difficulty: "Advanced",
    skills: [
      { name: "Linux", completed: true, current: false },
      { name: "Docker", completed: false, current: true },
      { name: "Kubernetes", completed: false, current: false },
      { name: "CI/CD", completed: false, current: false },
      { name: "AWS/Azure", completed: false, current: false },
      { name: "Monitoring", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Automation", completed: false, current: false }
    ],
    courses: [
      { id: "17", title: "Linux Fundamentals", completed: true },
      { id: "18", title: "Docker & Containers", completed: false },
      { id: "19", title: "CI/CD Pipelines", completed: false },
      { id: "20", title: "Cloud Platforms", completed: false }
    ]
  },
  {
    id: "datascience",
    title: "Data Scientist",
    description: "Analyze data, build models, and extract insights with Python and ML",
    icon: Cpu,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    duration: "11-15 months",
    difficulty: "Advanced",
    skills: [
      { name: "Python", completed: true, current: false },
      { name: "Statistics", completed: false, current: true },
      { name: "Machine Learning", completed: false, current: false },
      { name: "Data Analysis", completed: false, current: false },
      { name: "Deep Learning", completed: false, current: false },
      { name: "Big Data", completed: false, current: false },
      { name: "Visualization", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "21", title: "Python for Data Science", completed: true },
      { id: "22", title: "Statistics & Probability", completed: false },
      { id: "23", title: "Machine Learning", completed: false },
      { id: "24", title: "Deep Learning", completed: false }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern websites with HTML, CSS, JavaScript, and essential frameworks",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    duration: "6-9 months",
    difficulty: "Beginner",
    skills: [
      { name: "HTML Fundamentals", completed: false, current: true },
      { name: "CSS Styling", completed: false, current: false },
      { name: "JavaScript Basics", completed: false, current: false },
      { name: "Responsive Design", completed: false, current: false },
      { name: "Version Control (Git)", completed: false, current: false },
      { name: "Frontend Frameworks", completed: false, current: false },
      { name: "Backend Basics", completed: false, current: false },
      { name: "Deployment & Hosting", completed: false, current: false }
    ],
    courses: [
      { id: "html", title: "HTML & CSS", completed: false },
      { id: "javascript", title: "JavaScript Fundamentals", completed: false },
      { id: "web-development", title: "Web Development", completed: false },
      { id: "next-js", title: "Next.js Framework", completed: false }
    ]
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Master modern frontend development with React, TypeScript, and cutting-edge tools",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    duration: "6-9 months",
    difficulty: "Intermediate",
    skills: [
      { name: "HTML & CSS", completed: true, current: false },
      { name: "JavaScript", completed: true, current: false },
      { name: "React", completed: false, current: true },
      { name: "TypeScript", completed: false, current: false },
      { name: "Next.js", completed: false, current: false },
      { name: "Tailwind CSS", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "html", title: "HTML & CSS", completed: true },
      { id: "javascript", title: "JavaScript Fundamentals", completed: true },
      { id: "react-js", title: "React Fundamentals", completed: false },
      { id: "next-js", title: "Next.js Framework", completed: false }
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Build robust server-side applications with Node.js, databases, and APIs",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    duration: "7-10 months",
    difficulty: "Intermediate",
    skills: [
      { name: "JavaScript", completed: true, current: false },
      { name: "Node.js", completed: false, current: true },
      { name: "Express.js", completed: false, current: false },
      { name: "Databases", completed: false, current: false },
      { name: "REST APIs", completed: false, current: false },
      { name: "Authentication", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "javascript", title: "JavaScript Fundamentals", completed: true },
      { id: "node-js", title: "Node.js Backend", completed: false },
      { id: "express-js", title: "Express.js", completed: false },
      { id: "sql-mysql-postgresql", title: "SQL Databases", completed: false }
    ]
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    description: "Complete web development mastery from frontend to backend",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    duration: "10-14 months",
    difficulty: "Advanced",
    skills: [
      { name: "Frontend Basics", completed: true, current: false },
      { name: "Backend Basics", completed: false, current: true },
      { name: "Database Design", completed: false, current: false },
      { name: "DevOps", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Performance", completed: false, current: false },
      { name: "Scalability", completed: false, current: false }
    ],
    courses: [
      { id: "html", title: "HTML & CSS", completed: true },
      { id: "javascript", title: "JavaScript Fundamentals", completed: true },
      { id: "react-js", title: "React Fundamentals", completed: false },
      { id: "node-js", title: "Node.js Backend", completed: false }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Create native and cross-platform mobile applications",
    icon: Smartphone,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    duration: "8-11 months",
    difficulty: "Intermediate",
    skills: [
      { name: "JavaScript", completed: true, current: false },
      { name: "React Native", completed: false, current: true },
      { name: "Flutter", completed: false, current: false },
      { name: "iOS Development", completed: false, current: false },
      { name: "Android Development", completed: false, current: false },
      { name: "Cross-Platform", completed: false, current: false },
      { name: "App Store", completed: false, current: false },
      { name: "Performance", completed: false, current: false }
    ],
    courses: [
      { id: "javascript", title: "JavaScript Fundamentals", completed: true },
      { id: "react-native", title: "React Native", completed: false },
      { id: "flutter", title: "Flutter", completed: false },
      { id: "mobile-development", title: "Mobile Development", completed: false }
    ]
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description: "Master Python from basics to advanced applications",
    icon: Cpu,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    duration: "6-9 months",
    difficulty: "Beginner",
    skills: [
      { name: "Python Basics", completed: false, current: true },
      { name: "Data Structures", completed: false, current: false },
      { name: "Object-Oriented Programming", completed: false, current: false },
      { name: "Web Development", completed: false, current: false },
      { name: "Data Science", completed: false, current: false },
      { name: "Machine Learning", completed: false, current: false },
      { name: "Automation", completed: false, current: false },
      { name: "Advanced Topics", completed: false, current: false }
    ],
    courses: [
      { id: "python", title: "Python Programming", completed: false },
      { id: "data-structures-algorithms", title: "Data Structures & Algorithms", completed: false },
      { id: "django", title: "Django", completed: false },
      { id: "data-science", title: "Data Science", completed: false }
    ]
  },
  {
    id: "java-programming",
    title: "Java Programming",
    description: "Learn object-oriented programming with Java",
    icon: Cpu,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    duration: "8-11 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Java Basics", completed: false, current: true },
      { name: "Object-Oriented Programming", completed: false, current: false },
      { name: "Data Structures", completed: false, current: false },
      { name: "Spring Framework", completed: false, current: false },
      { name: "Database Integration", completed: false, current: false },
      { name: "Web Development", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Microservices", completed: false, current: false }
    ],
    courses: [
      { id: "java", title: "Java Programming", completed: false },
      { id: "data-structures-algorithms", title: "Data Structures & Algorithms", completed: false },
      { id: "backend-databases", title: "Backend & Databases", completed: false },
      { id: "spring-framework", title: "Spring Framework", completed: false }
    ]
  },
  {
    id: "javascript-core",
    title: "JavaScript (Core + Frameworks)",
    description: "Master JavaScript and its most popular frameworks",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    duration: "7-10 months",
    difficulty: "Intermediate",
    skills: [
      { name: "JavaScript Fundamentals", completed: false, current: true },
      { name: "ES6+ Features", completed: false, current: false },
      { name: "Asynchronous Programming", completed: false, current: false },
      { name: "React", completed: false, current: false },
      { name: "Node.js", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Build Tools", completed: false, current: false },
      { name: "Advanced Patterns", completed: false, current: false }
    ],
    courses: [
      { id: "javascript", title: "JavaScript Fundamentals", completed: false },
      { id: "react-js", title: "React Fundamentals", completed: false },
      { id: "node-js", title: "Node.js Backend", completed: false },
      { id: "express-js", title: "Express.js", completed: false }
    ]
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Add type safety to your JavaScript applications",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    duration: "4-6 months",
    difficulty: "Intermediate",
    skills: [
      { name: "TypeScript Basics", completed: false, current: true },
      { name: "Type System", completed: false, current: false },
      { name: "Interfaces & Classes", completed: false, current: false },
      { name: "Generics", completed: false, current: false },
      { name: "Advanced Types", completed: false, current: false },
      { name: "Integration with Frameworks", completed: false, current: false },
      { name: "Build Tools", completed: false, current: false },
      { name: "Best Practices", completed: false, current: false }
    ],
    courses: [
      { id: "javascript", title: "JavaScript Fundamentals", completed: true },
      { id: "typescript-basics", title: "TypeScript Fundamentals", completed: false },
      { id: "react-typescript", title: "React with TypeScript", completed: false },
      { id: "node-typescript", title: "Node.js with TypeScript", completed: false }
    ]
  },
  {
    id: "c-cpp-programming",
    title: "C / C++ Programming",
    description: "Master system-level programming with C and C++",
    icon: Cpu,
    color: "text-gray-600",
    bgColor: "bg-gray-600/10",
    duration: "8-12 months",
    difficulty: "Advanced",
    skills: [
      { name: "C Programming", completed: false, current: true },
      { name: "C++ Basics", completed: false, current: false },
      { name: "Memory Management", completed: false, current: false },
      { name: "Data Structures", completed: false, current: false },
      { name: "Object-Oriented Programming", completed: false, current: false },
      { name: "STL", completed: false, current: false },
      { name: "System Programming", completed: false, current: false },
      { name: "Performance Optimization", completed: false, current: false }
    ],
    courses: [
      { id: "c-programming", title: "C Programming", completed: false },
      { id: "cpp-programming", title: "C++ Programming", completed: false },
      { id: "data-structures-algorithms", title: "Data Structures & Algorithms", completed: false },
      { id: "system-programming", title: "System Programming", completed: false }
    ]
  },
  {
    id: "csharp-dotnet",
    title: "C# / .NET Development",
    description: "Build enterprise applications with C# and .NET",
    icon: Code,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
    duration: "8-11 months",
    difficulty: "Intermediate",
    skills: [
      { name: "C# Basics", completed: false, current: true },
      { name: "Object-Oriented Programming", completed: false, current: false },
      { name: ".NET Framework", completed: false, current: false },
      { name: "ASP.NET", completed: false, current: false },
      { name: "Entity Framework", completed: false, current: false },
      { name: "Web APIs", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "csharp-basics", title: "C# Programming", completed: false },
      { id: "dotnet-core", title: ".NET Development", completed: false },
      { id: "asp-net", title: "ASP.NET", completed: false },
      { id: "entity-framework", title: "Entity Framework", completed: false }
    ]
  },
  {
    id: "php-laravel",
    title: "PHP & Laravel Development",
    description: "Develop dynamic web applications with PHP and Laravel",
    icon: Code,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    duration: "7-10 months",
    difficulty: "Intermediate",
    skills: [
      { name: "PHP Basics", completed: false, current: true },
      { name: "MySQL Databases", completed: false, current: false },
      { name: "Laravel Framework", completed: false, current: false },
      { name: "MVC Architecture", completed: false, current: false },
      { name: "Authentication", completed: false, current: false },
      { name: "API Development", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "php", title: "PHP Programming", completed: false },
      { id: "sql-mysql-postgresql", title: "SQL Databases", completed: false },
      { id: "laravel", title: "Laravel Framework", completed: false },
      { id: "php-web-development", title: "PHP Web Development", completed: false }
    ]
  },
  {
    id: "ruby-on-rails",
    title: "Ruby on Rails",
    description: "Build web applications rapidly with Ruby on Rails",
    icon: Code,
    color: "text-red-600",
    bgColor: "bg-red-600/10",
    duration: "6-9 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Ruby Basics", completed: false, current: true },
      { name: "Rails Framework", completed: false, current: false },
      { name: "MVC Architecture", completed: false, current: false },
      { name: "Database Integration", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "API Development", completed: false, current: false },
      { name: "Deployment", completed: false, current: false },
      { name: "Best Practices", completed: false, current: false }
    ],
    courses: [
      { id: "ruby-basics", title: "Ruby Programming", completed: false },
      { id: "ruby-on-rails", title: "Ruby on Rails", completed: false },
      { id: "rails-api", title: "Rails API Development", completed: false },
      { id: "rails-deployment", title: "Rails Deployment", completed: false }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Analyze data and extract insights with Python and statistics",
    icon: Cpu,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    duration: "9-12 months",
    difficulty: "Advanced",
    skills: [
      { name: "Python", completed: true, current: false },
      { name: "Statistics", completed: false, current: true },
      { name: "Data Analysis", completed: false, current: false },
      { name: "Data Visualization", completed: false, current: false },
      { name: "Machine Learning", completed: false, current: false },
      { name: "Big Data", completed: false, current: false },
      { name: "SQL", completed: false, current: false },
      { name: "Data Engineering", completed: false, current: false }
    ],
    courses: [
      { id: "python", title: "Python Programming", completed: true },
      { id: "statistics-probability", title: "Statistics & Probability", completed: false },
      { id: "data-analysis", title: "Data Analysis", completed: false },
      { id: "machine-learning", title: "Machine Learning", completed: false }
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Build intelligent systems with ML algorithms and Python",
    icon: Cpu,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    duration: "10-14 months",
    difficulty: "Advanced",
    skills: [
      { name: "Python", completed: true, current: false },
      { name: "Statistics", completed: true, current: false },
      { name: "Linear Algebra", completed: false, current: true },
      { name: "Supervised Learning", completed: false, current: false },
      { name: "Unsupervised Learning", completed: false, current: false },
      { name: "Deep Learning", completed: false, current: false },
      { name: "NLP", completed: false, current: false },
      { name: "Model Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "python", title: "Python Programming", completed: true },
      { id: "linear-algebra", title: "Linear Algebra", completed: false },
      { id: "supervised-ml", title: "Supervised Learning", completed: false },
      { id: "deep-learning", title: "Deep Learning", completed: false }
    ]
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence (AI)",
    description: "Explore AI concepts, neural networks, and intelligent systems",
    icon: Cpu,
    color: "text-cyan-600",
    bgColor: "bg-cyan-600/10",
    duration: "12-16 months",
    difficulty: "Advanced",
    skills: [
      { name: "Python", completed: true, current: false },
      { name: "Machine Learning", completed: true, current: false },
      { name: "Deep Learning", completed: false, current: true },
      { name: "Neural Networks", completed: false, current: false },
      { name: "Computer Vision", completed: false, current: false },
      { name: "NLP", completed: false, current: false },
      { name: "Reinforcement Learning", completed: false, current: false },
      { name: "AI Ethics", completed: false, current: false }
    ],
    courses: [
      { id: "python", title: "Python Programming", completed: true },
      { id: "machine-learning", title: "Machine Learning", completed: true },
      { id: "deep-learning", title: "Deep Learning", completed: false },
      { id: "computer-vision", title: "Computer Vision", completed: false }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect systems and data from cyber threats",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    duration: "8-11 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Network Security", completed: false, current: true },
      { name: "Ethical Hacking", completed: false, current: false },
      { name: "Cryptography", completed: false, current: false },
      { name: "Web Security", completed: false, current: false },
      { name: "Incident Response", completed: false, current: false },
      { name: "Compliance", completed: false, current: false },
      { name: "Tools & Technologies", completed: false, current: false },
      { name: "Risk Assessment", completed: false, current: false }
    ],
    courses: [
      { id: "network-security", title: "Network Security", completed: false },
      { id: "ethical-hacking", title: "Ethical Hacking", completed: false },
      { id: "cryptography", title: "Cryptography", completed: false },
      { id: "web-security", title: "Web Application Security", completed: false }
    ]
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    description: "Learn to identify and fix security vulnerabilities",
    icon: Shield,
    color: "text-gray-600",
    bgColor: "bg-gray-600/10",
    duration: "9-12 months",
    difficulty: "Advanced",
    skills: [
      { name: "Networking", completed: true, current: false },
      { name: "Linux", completed: false, current: true },
      { name: "Web Application Hacking", completed: false, current: false },
      { name: "Network Penetration", completed: false, current: false },
      { name: "Wireless Security", completed: false, current: false },
      { name: "Social Engineering", completed: false, current: false },
      { name: "Reporting", completed: false, current: false },
      { name: "Certifications", completed: false, current: false }
    ],
    courses: [
      { id: "linux-fundamentals", title: "Linux Fundamentals", completed: false },
      { id: "networking-basics", title: "Networking Basics", completed: true },
      { id: "web-hacking", title: "Web Application Hacking", completed: false },
      { id: "penetration-testing", title: "Penetration Testing", completed: false }
    ]
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description: "Build decentralized applications on blockchain platforms",
    icon: Cpu,
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
    duration: "8-11 months",
    difficulty: "Advanced",
    skills: [
      { name: "Cryptography", completed: false, current: true },
      { name: "Blockchain Fundamentals", completed: false, current: false },
      { name: "Smart Contracts", completed: false, current: false },
      { name: "Solidity", completed: false, current: false },
      { name: "Web3.js", completed: false, current: false },
      { name: "DeFi", completed: false, current: false },
      { name: "NFTs", completed: false, current: false },
      { name: "Security", completed: false, current: false }
    ],
    courses: [
      { id: "cryptography", title: "Cryptography", completed: false },
      { id: "blockchain-basics", title: "Blockchain Fundamentals", completed: false },
      { id: "solidity", title: "Solidity Programming", completed: false },
      { id: "web3-development", title: "Web3 Development", completed: false }
    ]
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts (Solidity)",
    description: "Write secure smart contracts for blockchain applications",
    icon: Cpu,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    duration: "6-9 months",
    difficulty: "Advanced",
    skills: [
      { name: "Solidity Basics", completed: false, current: true },
      { name: "Smart Contract Security", completed: false, current: false },
      { name: "Testing", completed: false, current: false },
      { name: "Gas Optimization", completed: false, current: false },
      { name: "Upgradable Contracts", completed: false, current: false },
      { name: "DeFi Protocols", completed: false, current: false },
      { name: "Auditing", completed: false, current: false },
      { name: "Deployment", completed: false, current: false }
    ],
    courses: [
      { id: "solidity-basics", title: "Solidity Fundamentals", completed: false },
      { id: "smart-contract-security", title: "Smart Contract Security", completed: false },
      { id: "defi-development", title: "DeFi Development", completed: false },
      { id: "contract-testing", title: "Smart Contract Testing", completed: false }
    ]
  },
  {
    id: "game-development",
    title: "Game Development (Unity, Unreal Engine)",
    description: "Create engaging games with Unity and Unreal Engine",
    icon: Cpu,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    duration: "10-14 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Game Design", completed: false, current: true },
      { name: "Unity Engine", completed: false, current: false },
      { name: "C# Programming", completed: false, current: false },
      { name: "3D Modeling", completed: false, current: false },
      { name: "Physics", completed: false, current: false },
      { name: "Animation", completed: false, current: false },
      { name: "Audio", completed: false, current: false },
      { name: "Multiplayer", completed: false, current: false }
    ],
    courses: [
      { id: "game-design", title: "Game Design Principles", completed: false },
      { id: "unity-basics", title: "Unity Fundamentals", completed: false },
      { id: "csharp-unity", title: "C# for Unity", completed: false },
      { id: "3d-modeling", title: "3D Modeling", completed: false }
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing (AWS, Azure, GCP)",
    description: "Master cloud platforms and infrastructure management",
    icon: Cloud,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    duration: "8-11 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Cloud Fundamentals", completed: false, current: true },
      { name: "AWS Services", completed: false, current: false },
      { name: "Azure Services", completed: false, current: false },
      { name: "GCP Services", completed: false, current: false },
      { name: "Infrastructure as Code", completed: false, current: false },
      { name: "Serverless", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Cost Optimization", completed: false, current: false }
    ],
    courses: [
      { id: "cloud-basics-aws-firebase", title: "Cloud Basics", completed: false },
      { id: "aws-services", title: "AWS Services", completed: false },
      { id: "azure-services", title: "Azure Services", completed: false },
      { id: "gcp-services", title: "GCP Services", completed: false }
    ]
  },
  {
    id: "devops-ci-cd",
    title: "DevOps & CI/CD",
    description: "Master deployment automation and development operations",
    icon: Cloud,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    duration: "9-12 months",
    difficulty: "Advanced",
    skills: [
      { name: "Linux", completed: true, current: false },
      { name: "Docker", completed: false, current: true },
      { name: "Kubernetes", completed: false, current: false },
      { name: "CI/CD", completed: false, current: false },
      { name: "Infrastructure as Code", completed: false, current: false },
      { name: "Monitoring", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Automation", completed: false, current: false }
    ],
    courses: [
      { id: "linux-fundamentals", title: "Linux Fundamentals", completed: true },
      { id: "docker-kubernetes", title: "Docker & Kubernetes", completed: false },
      { id: "ci-cd-pipelines", title: "CI/CD Pipelines", completed: false },
      { id: "infrastructure-as-code", title: "Infrastructure as Code", completed: false }
    ]
  },
  {
    id: "system-design",
    title: "System Design & Architecture",
    description: "Design scalable and robust software systems",
    icon: Cpu,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
    duration: "10-14 months",
    difficulty: "Advanced",
    skills: [
      { name: "System Design Basics", completed: false, current: true },
      { name: "Scalability", completed: false, current: false },
      { name: "Database Design", completed: false, current: false },
      { name: "Caching", completed: false, current: false },
      { name: "Load Balancing", completed: false, current: false },
      { name: "Microservices", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Performance", completed: false, current: false }
    ],
    courses: [
      { id: "system-design-basics", title: "System Design Fundamentals", completed: false },
      { id: "scalability", title: "Scalability Patterns", completed: false },
      { id: "microservices", title: "Microservices Architecture", completed: false },
      { id: "distributed-systems", title: "Distributed Systems", completed: false }
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Build data pipelines and manage big data infrastructure",
    icon: Database,
    color: "text-teal-600",
    bgColor: "bg-teal-600/10",
    duration: "10-13 months",
    difficulty: "Advanced",
    skills: [
      { name: "Python", completed: true, current: false },
      { name: "SQL", completed: true, current: false },
      { name: "ETL Processes", completed: false, current: true },
      { name: "Data Warehousing", completed: false, current: false },
      { name: "Big Data", completed: false, current: false },
      { name: "Apache Spark", completed: false, current: false },
      { name: "Data Quality", completed: false, current: false },
      { name: "Orchestration", completed: false, current: false }
    ],
    courses: [
      { id: "python", title: "Python Programming", completed: true },
      { id: "sql-mysql-postgresql", title: "SQL Databases", completed: true },
      { id: "etl-pipelines", title: "ETL Pipelines", completed: false },
      { id: "apache-spark", title: "Apache Spark", completed: false }
    ]
  },
  {
    id: "big-data-analytics",
    title: "Big Data Analytics",
    description: "Process and analyze massive datasets",
    icon: Database,
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10",
    duration: "11-15 months",
    difficulty: "Advanced",
    skills: [
      { name: "Python", completed: true, current: false },
      { name: "Statistics", completed: true, current: false },
      { name: "Hadoop", completed: false, current: true },
      { name: "Spark", completed: false, current: false },
      { name: "Data Mining", completed: false, current: false },
      { name: "Machine Learning", completed: false, current: false },
      { name: "Visualization", completed: false, current: false },
      { name: "Real-time Analytics", completed: false, current: false }
    ],
    courses: [
      { id: "python", title: "Python Programming", completed: true },
      { id: "statistics-probability", title: "Statistics & Probability", completed: true },
      { id: "hadoop-spark", title: "Hadoop & Spark", completed: false },
      { id: "data-mining", title: "Data Mining", completed: false }
    ]
  },
  {
    id: "internet-of-things",
    title: "Internet of Things (IoT)",
    description: "Build connected devices and IoT solutions",
    icon: Cpu,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    duration: "9-12 months",
    difficulty: "Advanced",
    skills: [
      { name: "Embedded Systems", completed: false, current: true },
      { name: "Microcontrollers", completed: false, current: false },
      { name: "Sensors", completed: false, current: false },
      { name: "Networking", completed: false, current: false },
      { name: "Cloud Integration", completed: false, current: false },
      { name: "Security", completed: false, current: false },
      { name: "Data Analytics", completed: false, current: false },
      { name: "Prototyping", completed: false, current: false }
    ],
    courses: [
      { id: "embedded-systems", title: "Embedded Systems", completed: false },
      { id: "arduino-raspberry-pi", title: "Arduino & Raspberry Pi", completed: false },
      { id: "iot-protocols", title: "IoT Protocols", completed: false },
      { id: "iot-cloud", title: "IoT Cloud Integration", completed: false }
    ]
  },
  {
    id: "ar-vr-development",
    title: "AR/VR Development",
    description: "Create immersive augmented and virtual reality experiences",
    icon: Cpu,
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
    duration: "10-14 months",
    difficulty: "Advanced",
    skills: [
      { name: "3D Graphics", completed: false, current: true },
      { name: "Unity/Unreal Engine", completed: false, current: false },
      { name: "C# Programming", completed: false, current: false },
      { name: "AR Frameworks", completed: false, current: false },
      { name: "VR Development", completed: false, current: false },
      { name: "Interaction Design", completed: false, current: false },
      { name: "Performance Optimization", completed: false, current: false },
      { name: "Cross-Platform", completed: false, current: false }
    ],
    courses: [
      { id: "3d-graphics", title: "3D Graphics Fundamentals", completed: false },
      { id: "unity-vr", title: "Unity VR Development", completed: false },
      { id: "ar-foundation", title: "AR Foundation", completed: false },
      { id: "xr-interaction", title: "XR Interaction Design", completed: false }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX for Developers",
    description: "Design beautiful and user-friendly interfaces",
    icon: Code,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    duration: "6-9 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Design Principles", completed: false, current: true },
      { name: "User Research", completed: false, current: false },
      { name: "Wireframing", completed: false, current: false },
      { name: "Prototyping", completed: false, current: false },
      { name: "Visual Design", completed: false, current: false },
      { name: "Interaction Design", completed: false, current: false },
      { name: "Usability Testing", completed: false, current: false },
      { name: "Design Systems", completed: false, current: false }
    ],
    courses: [
      { id: "design-principles", title: "Design Principles", completed: false },
      { id: "user-research", title: "User Research", completed: false },
      { id: "ui-design", title: "UI Design", completed: false },
      { id: "ux-design", title: "UX Design", completed: false }
    ]
  },
  {
    id: "software-testing",
    title: "Software Testing & QA Automation",
    description: "Master testing methodologies and automation frameworks",
    icon: CheckCircle,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    duration: "6-9 months",
    difficulty: "Intermediate",
    skills: [
      { name: "Manual Testing", completed: false, current: true },
      { name: "Test Planning", completed: false, current: false },
      { name: "Automation Tools", completed: false, current: false },
      { name: "Selenium", completed: false, current: false },
      { name: "API Testing", completed: false, current: false },
      { name: "Performance Testing", completed: false, current: false },
      { name: "CI/CD Testing", completed: false, current: false },
      { name: "Test Management", completed: false, current: false }
    ],
    courses: [
      { id: "manual-testing", title: "Manual Testing", completed: false },
      { id: "selenium-automation", title: "Selenium Automation", completed: false },
      { id: "api-testing", title: "API Testing", completed: false },
      { id: "performance-testing", title: "Performance Testing", completed: false }
    ]
  }
]

export default function RoadmapPage() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(roadmaps[0])
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  // Calculate overall progress
  const totalSkills = selectedRoadmap.skills.length
  const completedSkills = selectedRoadmap.skills.filter(skill => skill.completed).length
  const currentSkillIndex = selectedRoadmap.skills.findIndex(skill => skill.current)
  const overallProgress = Math.round((completedSkills / totalSkills) * 100)

  const toggleStepExpansion = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center space-y-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Learning Roadmap
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Follow your personalized learning journey with clear milestones and structured progression
              </p>
            </div>

            {/* Roadmap Selector */}
            <div className="flex flex-wrap justify-center gap-3">
              {roadmaps.map((roadmap) => (
                <Button
                  key={roadmap.id}
                  variant={selectedRoadmap.id === roadmap.id ? "default" : "outline"}
                  onClick={() => setSelectedRoadmap(roadmap)}
                  className="flex items-center gap-2"
                >
                  <roadmap.icon className="h-4 w-4" />
                  {roadmap.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Roadmap Overview */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${selectedRoadmap.bgColor} flex items-center justify-center`}>
                    <selectedRoadmap.icon className={`h-6 w-6 ${selectedRoadmap.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{selectedRoadmap.title}</CardTitle>
                    <CardDescription className="text-base">{selectedRoadmap.description}</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-2">{selectedRoadmap.difficulty}</Badge>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedRoadmap.duration}
                  </div>
                </div>
              </div>

              {/* Overall Progress */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{overallProgress}% Complete</span>
                </div>
                <Progress value={overallProgress} className="h-3" />
              </div>
            </CardHeader>
          </Card>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {selectedRoadmap.skills.map((skill, index) => {
                const isCompleted = skill.completed
                const isCurrent = skill.current
                const isUpcoming = !isCompleted && !isCurrent
                const stepId = `step-${index}`

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isCompleted
                          ? 'bg-green-500 border-green-500 text-white'
                          : isCurrent
                          ? 'bg-primary border-primary text-primary-foreground animate-pulse'
                          : 'bg-muted border-muted-foreground/20 text-muted-foreground'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <span className="text-lg font-bold">{index + 1}</span>
                        )}
                      </div>
                    </div>

                    {/* Step Content */}
                    <Card
                      className={`flex-1 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        isCurrent ? 'ring-2 ring-primary shadow-lg' : ''
                      }`}
                      onClick={() => toggleStepExpansion(stepId)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">{skill.name}</h3>
                              <Badge variant={
                                isCompleted ? "default" :
                                isCurrent ? "secondary" : "outline"
                              }>
                                {isCompleted ? "Completed" : isCurrent ? "Current" : "Upcoming"}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {skill.name === "HTML & CSS" && "Learn the fundamentals of web structure and styling"}
                              {skill.name === "JavaScript" && "Master the core programming language of the web"}
                              {skill.name === "React" && "Build interactive user interfaces with components"}
                              {skill.name === "TypeScript" && "Add type safety to your JavaScript applications"}
                              {skill.name === "Next.js" && "Create full-stack React applications with ease"}
                              {skill.name === "Tailwind CSS" && "Style applications with utility-first CSS"}
                              {skill.name === "Testing" && "Write reliable and maintainable code"}
                              {skill.name === "Deployment" && "Deploy your applications to production"}
                              {skill.name === "Node.js" && "Build server-side applications with JavaScript"}
                              {skill.name === "Express.js" && "Create robust web APIs and applications"}
                              {skill.name === "Databases" && "Store and manage application data"}
                              {skill.name === "REST APIs" && "Design and implement web services"}
                              {skill.name === "Authentication" && "Secure your applications with user authentication"}
                              {!["HTML & CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Testing", "Deployment", "Node.js", "Express.js", "Databases", "REST APIs", "Authentication"].includes(skill.name) && "Master this essential skill for your development journey"}
                            </p>

                            {/* Progress Bar */}
                            <div className="w-full bg-muted rounded-full h-2 mb-4">
                              <div
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  isCompleted ? "bg-green-500" : isCurrent ? "bg-primary" : "bg-muted-foreground/20"
                                }`}
                                style={{ width: isCompleted ? "100%" : isCurrent ? "60%" : "0%" }}
                              ></div>
                            </div>
                          </div>

                          {/* Expand Icon */}
                          <div className="ml-4">
                            {expandedStep === stepId ? (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedStep === stepId && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 pt-6 border-t"
                          >
                            <div className="space-y-4">
                              <h4 className="font-semibold flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Recommended Courses
                              </h4>
                              <div className="grid gap-3 md:grid-cols-2">
                                {selectedRoadmap.courses
                                  .filter(course => !course.completed)
                                  .slice(0, 2)
                                  .map((course, courseIndex) => (
                                    <div key={course.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                      <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                                          <span className="text-xs font-bold text-primary">{courseIndex + 1}</span>
                                        </div>
                                        <span className="text-sm font-medium">{course.title}</span>
                                      </div>
                                      <Button size="sm" variant="outline" asChild>
                                        <Link href={`/courses/${course.id}`}>
                                          Start
                                          <ArrowRight className="h-3 w-3 ml-1" />
                                        </Link>
                                      </Button>
                                    </div>
                                  ))}
                              </div>

                              <div className="flex justify-center pt-2">
                                <Button asChild>
                                  <Link href={`/courses?category=${selectedRoadmap.id}`}>
                                    View All Courses
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Begin with the first step in your {selectedRoadmap.title} roadmap and track your progress as you advance through each milestone.
                </p>
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <Zap className="h-5 w-5 mr-2" />
                  Start Learning Path
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}