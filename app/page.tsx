import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { EmpathyBlock } from "@/components/empathy-block"
import { AboutAlchemyfy } from "@/components/about-alchemyfy"
import { HowIHelp } from "@/components/how-i-help"
import { Community } from "@/components/community"
import { AboutAna } from "@/components/about-ana"
import { YouTube } from "@/components/youtube"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <EmpathyBlock />
        <AboutAlchemyfy />
        <HowIHelp />
        <Community />
        <AboutAna />
        <YouTube />
      </main>
      <Footer />
    </>
  )
}
