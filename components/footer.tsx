import Image from "next/image"
import { Mail, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 px-6 pt-2 pb-10">
      <div
        className="mb-6 mx-auto max-w-5xl h-px"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="/">
              <Image
                src="/images/alchemyfy-logo.png"
                alt="Alchemyfy"
                width={200}
                height={50}
                className="h-28 w-auto"
              />
            </a>
            <p className="text-sm pb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              AI education and consulting for experienced business owners.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@alchemyfy.com"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
              aria-label="Email"
            >
              <Mail className="h-4 w-4" strokeWidth={1} />
            </a>
            <a
              href="https://www.linkedin.com/in/anauna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1} />
            </a>
            <a
              href="https://www.youtube.com/@ana_una"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" strokeWidth={1} />
            </a>
          </div>
        </div>

        <div className="mt-4 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

        <p className="text-sm text-center pt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
          {"\u00A9"} {new Date().getFullYear()} Alchemyfy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
