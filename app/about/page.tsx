import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="About Astraea"
        title="We help organizations turn AI ambition into measurable business outcomes."
        description="Astraea partners with leadership teams to design, implement, and scale AI-powered operating models."
      />

      <ContactSection />
    </main>
  )
}