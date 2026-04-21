"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Community() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError("Something went wrong — please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="community" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div
          className="glass-card rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-8"
          style={{ boxShadow: "0 0 80px rgba(124,58,237,0.15)" }}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            🧪
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="inline-flex mx-auto items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}
            >
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
              Launching soon
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground text-balance tracking-tight">
              Free Skool Community
            </h2>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              A free space for business owners learning AI without the overwhelm.
              We kick off with a live workshop on building your first AI assistant —
              no coding, no jargon, just results.
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-2xl px-8 py-5 text-center"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <p className="font-semibold text-foreground">{"You\u2019re on the list!"}</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                {"I\u2019ll send the invite as soon as the community is live."}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 w-full max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={loading}
                  className="flex-1 rounded-full px-5 py-3 text-sm text-foreground placeholder:text-white/30 outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-glow rounded-full bg-primary text-white hover:bg-primary/90 px-6 py-3 text-sm h-auto whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? "Joining..." : "Join the Waitlist"}
                </Button>
              </form>
              {error && <p className="text-sm" style={{ color: "#ff3d3d" }}>{error}</p>}
            </div>
          )}

          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Free forever. No spam. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  )
}
