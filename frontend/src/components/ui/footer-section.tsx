"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

export function Footerdemo() {
  return (
    <footer className="bg-[#0D1117] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative w-full max-w-sm mb-6 md:mb-0">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 rounded-lg pr-12 h-12"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="p-2 border border-gray-600 rounded-full hover:border-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 border border-gray-600 rounded-full hover:border-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 border border-gray-600 rounded-full hover:border-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 border border-gray-600 rounded-full hover:border-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FraudGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 