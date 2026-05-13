import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import MethodologySection from "@/components/sections/MethodologySection"
import ContactSection from "@/components/sections/ContactSection"

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="Methodology"
        title="A structured approach for moving from AI ideas to operating reality."
        description="We combine discovery, prioritization, prototyping, integration, and adoption to reduce risk and accelerate measurable outcomes."
      />

      <MethodologySection />
      <ContactSection />
    </main>
  )
}