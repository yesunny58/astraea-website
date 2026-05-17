import Header from "@/components/layout/Header"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import ContactSection from "@/components/sections/ContactSection"

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  )
}