"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/ThemeContext"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const { theme } = useTheme()

    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-lg",
    }

    const variantClasses = {
      primary:
        theme === "dark"
          ? "bg-gradient-to-r from-gold to-yellow-400 text-background hover:from-yellow-400 hover:to-gold shadow-lg hover:shadow-gold/25"
          : theme === "gold"
            ? "bg-gradient-to-r from-gold to-yellow-500 text-background hover:from-yellow-500 hover:to-gold shadow-lg hover:shadow-gold/25"
            : "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-primary/25",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)

GradientButton.displayName = "GradientButton"

export { GradientButton }
