import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import ContactSection from "@/components/sections/ContactSection"

export default function ZhCasesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />
      <CaseStudiesSection locale="zh" />
      <ContactSection locale="zh" />
    </main>
  )
}