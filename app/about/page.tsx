import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"
import FoundersSection from "@/components/sections/FoundersSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="About Astraea"
        title="We turn decades of hard‑earned experience into a guiding torch for enterprises."
        description="Astraea partners with leadership teams to design, implement, and scale AI-powered operating models."
      />

      <FoundersSection />

      <ContactSection />
    </main>
  )
}