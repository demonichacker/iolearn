export interface Course {
  id: string
  category: "school" | "programming"
  title: string
  description: string
  lessons: Lesson[]
  progress?: number
  difficulty: "beginner" | "intermediate" | "advanced"
  estimatedTime: string
  icon: string
}

export interface Lesson {
  id: string
  title: string
  content: string
  codeExample?: string
  type: "theory" | "practice" | "quiz"
  duration: number
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  answerIndex: number
  explanation?: string
  topicTags?: string[]
  difficulty: "easy" | "medium" | "hard"
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  joinedAt: Date
  preferences: {
    theme: Theme
    notifications: boolean
  }
}

export interface Progress {
  userId: string
  courseId: string
  lessonId: string
  completed: boolean
  score?: number
  timeSpent: number
  completedAt?: Date
}

export interface QuizResult {
  id: string
  userId: string
  courseId: string
  questions: QuizQuestion[]
  answers: number[]
  score: number
  totalQuestions: number
  completedAt: Date
  timeSpent: number
}

export type Theme =
  | "light" | "gold" | "dark"
  | "blue" | "purple" | "green" | "red" | "orange" | "pink" | "teal" | "cyan"
  | "indigo" | "violet" | "emerald" | "lime" | "amber" | "rose" | "sky" | "slate"
  | "zinc" | "neutral" | "stone" | "gray" | "warm" | "cool" | "vibrant" | "muted"
  | "ocean" | "sunset" | "forest" | "lavender" | "coral" | "mint" | "cherry" | "sapphire"
