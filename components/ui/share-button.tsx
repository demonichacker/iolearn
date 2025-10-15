"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Share2, Copy, ExternalLink } from "lucide-react"

interface ShareButtonProps {
  title: string
  text: string
  url?: string
  className?: string
}

export function ShareButton({ title, text, url = window.location.origin, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
      } catch (error) {
        // User cancelled or error occurred
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = `${text} ${url}`
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, "_blank")
  }

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedinUrl, "_blank")
  }

  // Check if native sharing is available
  const hasNativeShare = typeof navigator !== "undefined" && navigator.share

  if (hasNativeShare) {
    return (
      <Button onClick={handleNativeShare} variant="outline" className={className}>
        <Share2 className="mr-2 h-4 w-4" />
        Share Results
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleCopyLink}>
          <Copy className="mr-2 h-4 w-4" />
          {copied ? "Copied!" : "Copy Link"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleTwitterShare}>
          <ExternalLink className="mr-2 h-4 w-4" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLinkedInShare}>
          <ExternalLink className="mr-2 h-4 w-4" />
          Share on LinkedIn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
