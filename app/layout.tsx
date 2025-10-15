import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ProgressProvider } from "@/contexts/ProgressContext"
import { ServiceWorker } from "@/components/ServiceWorker"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "IOLEARN - Master Skills with Interactive Learning",
  description: "Interactive learning platform for students and developers",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              {children}
              <ServiceWorker />
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
