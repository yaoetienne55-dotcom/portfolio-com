import { ScrollyHeroAbout } from "@/components/scrolly-hero-about"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <ScrollyHeroAbout />
      <PortfolioSection />
      <SkillsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
