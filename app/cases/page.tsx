import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import ContactSection from "@/components/sections/ContactSection"

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="Case Studies"
        title="How AI systems create measurable impact across teams and operations."
        description="Explore examples of how organizations can use automation, analytics, and AI-assisted workflows to improve performance."
      />

      <CaseStudiesSection />
      <ContactSection />
    </main>
  )
}