"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@/types"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("user")
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch (error) {
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    if (email && password) {
      const mockUser: User = {
        id: Date.now().toString(),
        name: email.split("@")[0],
        email,
        joinedAt: new Date(),
        preferences: {
          theme: "gold",
          notifications: true,
        },
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock signup
    if (name && email && password) {
      const mockUser: User = {
        id: Date.now().toString(),
        name,
        email,
        joinedAt: new Date(),
        preferences: {
          theme: "gold",
          notifications: true,
        },
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
