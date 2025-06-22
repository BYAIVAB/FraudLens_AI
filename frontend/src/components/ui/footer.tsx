"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

interface FooterProps {
  companyName?: string
  email?: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  newsletterEnabled?: boolean
  themeToggleEnabled?: boolean
}

function Footer({
  companyName = "Your Company",
  email = "hello@example.com",
  socialLinks = {},
  newsletterEnabled = true,
  themeToggleEnabled = true
}: FooterProps = {}) {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [emailValue, setEmailValue] = React.useState("")

  React.useEffect(() => {
    // This effect is now only for initial setup if themeToggleEnabled was true
    // and will not be triggered by the switch itself.
    // The user requested to remove the switch, so the theme will be static based on initial state.
    // We keep the logic for consistency with the original component's dark mode handling,
    // but it won't be user-toggleable from the footer anymore.
    if (themeToggleEnabled) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // If themeToggleEnabled is false, ensure no dark class is added by this component
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode, themeToggleEnabled]) // Keep dependencies for consistency, though isDarkMode won't change via UI here

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", emailValue)
    setEmailValue("")
  }

  return (
    <footer className="relative border-t border-gray-800 bg-[#0D1117] text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {newsletterEnabled && (
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
              <p className="mb-6 text-gray-300">
                Join our newsletter for the latest updates and exclusive offers.
              </p>
              <form className="relative" onSubmit={handleNewsletterSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="pr-12 bg-white text-black placeholder:text-gray-500"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-black transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
          )}
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Services
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Email: FraudLens@gmail.com</p>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => socialLinks.facebook && window.open(socialLinks.facebook, '_blank')}
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => socialLinks.twitter && window.open(socialLinks.twitter, '_blank')}
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => socialLinks.instagram && window.open(socialLinks.instagram, '_blank')}
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => socialLinks.linkedin && window.open(socialLinks.linkedin, '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Removed theme toggle based on user request */}
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 {companyName}. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer 