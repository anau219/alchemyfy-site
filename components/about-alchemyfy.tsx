export function AboutAlchemyfy() {
  return (
    <section id="what-is" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-widest"
          style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}>
          The idea
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground text-balance">
            Turning business experience into AI leverage
          </h2>

          <div className="flex flex-col gap-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            <p>
              Alchemyfy is where senior professionals learn to build AI systems
              that actually fit how they work — not the other way around.
            </p>
            <p>
              {"I\u2019m building this in public: sharing what works, what fails, and what experienced operators need to know — without the hype."}
            </p>
            <p>
              Content infrastructure, AI assistants, workflow automation — practical tools
              you can actually use, explained by someone who has lived it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
