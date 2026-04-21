import Image from "next/image"
import { LinkedinIcon, YoutubeIcon } from "lucide-react"

export function AboutAna() {
  return (
    <section id="about" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div
          className="glass-card rounded-3xl p-10 md:p-16"
        >
          <div className="grid items-center gap-12 md:grid-cols-5">
            {/* Photo */}
            <div className="order-first md:col-span-2 flex justify-center">
              <div
                className="h-52 w-52 md:h-64 md:w-64 overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 0 60px rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <Image
                  src="/images/anastasia-portrait.png"
                  alt="Ana Una, founder of Alchemyfy"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3 flex flex-col gap-6">
              <div>
                <div
                  className="inline-flex items-center rounded-full px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}
                >
                  About
                </div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight text-foreground">
                  Hi, I{"'"}m Ana
                </h2>
              </div>

              <div className="flex flex-col gap-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                <p>
                  {"I\u2019ve spent 17 years in digital marketing, working with brands like Disney, luxury retailers, and EdTech platforms. I built systems — not just campaigns."}
                </p>
                <p>
                  When AI started accelerating, I noticed something: most of the conversation was aimed at developers and tech founders. Experienced business owners were left out.
                </p>
                <p>
                  {"Alchemyfy is my answer. I\u2019m building it in public — sharing honest insights about what AI can and can\u2019t do for real businesses, without the jargon or the hype."}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <p className="text-sm font-semibold text-foreground">Ana Una, Founder of Alchemyfy</p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/anauna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)" }}
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" strokeWidth={1} />
                  </a>
                  <a
                    href="https://www.youtube.com/@ana_una"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)" }}
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="h-4 w-4" strokeWidth={1} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
