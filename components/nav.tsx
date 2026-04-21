"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How I Help", href: "#how-i-help" },
  { label: "Community", href: "#community" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ana_una",
    external: true,
  },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      } : {}}
    >
      <div className="mx-auto max-w-6xl px-6 flex h-18 items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/images/alchemyfy-logo.png"
            alt="Alchemyfy"
            width={200}
            height={50}
            className="h-[120px] w-auto mt-4"
            priority
          />
        </a>

        {/* Desktop links + CTA */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="sm" asChild>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                style={{ color: "rgba(255,255,255,0.6)" }}
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            </Button>
          ))}
          <Button
            asChild
            className="ml-2 btn-glow rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            <a href="https://cal.com/anauna/discovery" target="_blank" rel="noopener noreferrer">
              Book a Free Call
            </a>
          </Button>
        </div>

        {/* Mobile sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72"
            style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(16px)", border: "none" }}
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  className="justify-start hover:text-foreground"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </Button>
              ))}
              <Button
                asChild
                className="mt-4 rounded-full bg-primary text-white hover:bg-primary/90"
                onClick={() => setOpen(false)}
              >
                <a href="https://cal.com/anauna/discovery" target="_blank" rel="noopener noreferrer">
                  Book a Free Call
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
