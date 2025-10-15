"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  product: [
    { name: "Courses", href: "/courses" },
    { name: "Playground", href: "/playground" },
    { name: "Progress", href: "/progress" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-card via-card to-muted/20 border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <Code className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  IOLEARN
                </span>
              </Link>
              <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed text-lg">
                The modern learning platform for developers. Master coding skills with interactive lessons, quizzes, and
                real-time feedback.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <Link href="https://github.com/demonichacker" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <Link href="https://x.com/heisdadev" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <Link href="https://www.linkedin.com/in/ilorioluwole-dev/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <h3 className="font-semibold mb-6 capitalize text-lg text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-border/50 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">© 2025 IOLEARN. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center gap-2">
            Built with <span className="text-red-500 animate-pulse">❤️</span> for learners worldwide
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
