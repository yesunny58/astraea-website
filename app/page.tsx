import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import StatsSection from "@/components/sections/StatsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <ContactSection />
    </main>
  )
}