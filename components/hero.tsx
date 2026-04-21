import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center gap-8">

        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase"
          style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}>
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
          AI Consulting &amp; Education for Business Owners
        </div>

        <h1 className="gradient-text font-sans font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-balance">
          {"You\u2019re not behind.\u00A0You\u2019re just missing the right system."}
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-balance"
          style={{ color: "rgba(255,255,255,0.55)" }}>
          AI guidance for experienced business owners who are done feeling excluded
          from the conversation — and ready to actually use it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            asChild
            size="lg"
            className="btn-glow rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-3.5 text-base h-auto"
          >
            <a href="https://cal.com/anauna/discovery" target="_blank" rel="noopener noreferrer">
              Book a Free Discovery Call
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-3.5 text-base h-auto"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}
          >
            <a href="#community">
              Join the Free Community
            </a>
          </Button>
        </div>

        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          No credit card. No jargon. No fluff.
        </p>
      </div>
    </section>
  )
}
