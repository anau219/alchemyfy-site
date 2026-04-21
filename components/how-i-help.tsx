import { Button } from "@/components/ui/button"
import { CalendarIcon, UsersIcon, BookOpenIcon } from "lucide-react"

const cards = [
  {
    icon: CalendarIcon,
    label: "Free · 30 min",
    title: "Discovery Call",
    description:
      "Not sure where to start? Let's talk through where you are, what's slowing you down, and whether I can help. No pitch, no pressure.",
    cta: "Book a Free Call",
    href: "https://cal.com/anauna/discovery",
    highlight: true,
  },
  {
    icon: UsersIcon,
    label: "Free · Community",
    title: "Join the Skool Community",
    description:
      "A free space for business owners learning AI together. Workshops, Q&As, resources — starting with how to build your first AI assistant.",
    cta: "Join the Waitlist",
    href: "#community",
    highlight: false,
  },
  {
    icon: BookOpenIcon,
    label: "Paid · 1:1",
    title: "Private Consulting",
    description:
      "Work with me directly to map and build your AI system. From content infrastructure to automation workflows. Limited spots.",
    cta: "Get in Touch",
    href: "https://cal.com/anauna/discovery",
    highlight: false,
  },
]

export function HowIHelp() {
  return (
    <section id="how-i-help" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            How I can help
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Whether you want to explore on your own, learn with a community, or get hands-on guidance — there{"'"}s a way in.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={`glass-card rounded-2xl p-8 flex flex-col gap-5 ${card.highlight ? "border-primary/40" : ""}`}
                style={card.highlight ? { borderColor: "rgba(124,58,237,0.5)", boxShadow: "0 0 40px rgba(124,58,237,0.15)" } : {}}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(124,58,237,0.2)" }}>
                    <Icon className="h-5 w-5" style={{ color: "#a855f7" }} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium tracking-wide rounded-full px-2.5 py-1"
                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}>
                    {card.label}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {card.description}
                  </p>
                </div>

                <Button
                  asChild
                  className={`rounded-full w-full ${card.highlight ? "btn-glow bg-primary text-white hover:bg-primary/90" : "bg-transparent text-foreground hover:bg-white/8"}`}
                  style={!card.highlight ? { border: "1px solid rgba(255,255,255,0.15)" } : {}}
                >
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {card.cta}
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
