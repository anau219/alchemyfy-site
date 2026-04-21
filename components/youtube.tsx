import { Button } from "@/components/ui/button"

export function YouTube() {
  return (
    <section className="relative z-10 px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-8">
        <div
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}
        >
          YouTube
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
          Learn in public with me
        </h2>
        <p className="mx-auto max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          I share real experiments, honest results, and practical walkthroughs
          for using AI in business. No fluff, no hype — just what works.
        </p>

        <div
          className="mx-auto max-w-2xl w-full aspect-video rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
        >
          <iframe
            src="https://www.youtube.com/embed/4oFLhkg1vzM"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        <Button
          asChild
          className="rounded-full bg-primary text-white hover:bg-primary/90"
        >
          <a href="https://www.youtube.com/@ana_una" target="_blank" rel="noopener noreferrer">
            Visit the channel
          </a>
        </Button>
      </div>
    </section>
  )
}
