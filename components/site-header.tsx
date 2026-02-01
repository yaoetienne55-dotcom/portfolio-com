import Link from "next/link"
import { ArrowRight, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search component could go here */}
          </div>
          <nav className="flex items-center space-x-2">
            <Link
              href="https://www.linkedin.com/in/etienne-kouakou-030a07297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/etiennek_12?igsh=d200cHhrOWJkaW96"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href="https://www.tiktok.com/@etienne.taki2?_r=1&_t=ZS-93Xj3YBaH0j"
              target="_blank"
              rel="noreferrer"
            >
               <div
                className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="sr-only">TikTok</span>
              </div>
            </Link>
            <ModeToggle />
             <Button asChild size="sm" className="hidden md:flex ml-2 gap-2 group">
                <Link href="https://wa.me/2250715967408" target="_blank">
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
             </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
