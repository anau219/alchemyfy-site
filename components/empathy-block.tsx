export function EmpathyBlock() {
  return (
    <section className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 border-l-4 border-l-primary">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            Sound familiar?
          </h2>
          <div className="flex flex-col gap-4 text-lg md:text-xl leading-relaxed italic"
            style={{ color: "rgba(255,255,255,0.65)" }}>
            <p>
              {"You\u2019ve built something real. You\u2019ve run teams, launched products, navigated markets."}
            </p>
            <p>
              {"But every AI conversation feels like it\u2019s aimed at 25-year-old developers."}
            </p>
            <p className="text-foreground not-italic font-medium">
              {"You\u2019re not confused because you\u2019re not smart enough."}
            </p>
            <p>
              {"You\u2019re confused because nobody\u2019s talking to you."}
            </p>
            <p className="text-foreground not-italic">
              {"That\u2019s what Alchemyfy is for."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
