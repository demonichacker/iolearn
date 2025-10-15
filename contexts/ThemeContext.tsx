"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { Theme } from "@/types"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("gold")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme
    const validThemes: Theme[] = [
      "light", "gold", "dark", "blue", "purple", "green", "red", "orange", "pink", "teal", "cyan",
      "indigo", "violet", "emerald", "lime", "amber", "rose", "sky", "slate", "zinc", "neutral",
      "stone", "gray", "warm", "cool", "vibrant", "muted", "ocean", "sunset", "forest", "lavender",
      "coral", "mint", "cherry", "sapphire"
    ]
    if (stored && validThemes.includes(stored)) {
      setTheme(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme === "light" ? "" : theme === "gold" ? "theme-gold" : "dark"
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
