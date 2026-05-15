import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ServicesSection from "@/components/sections/ServicesSection"
import ContactSection from "@/components/sections/ContactSection"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="Service: From Chaos to clear, then to clean"
        title="AI consulting services built for practical business transformation."
        description="From strategy to implementation, we help teams identify, design, and deploy AI systems that create measurable value."
      />

      <ServicesSection />
      <ContactSection />
    </main>
  )
}