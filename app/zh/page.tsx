import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import ContactSection from "@/components/sections/ContactSection"

export default function ZhHomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />
      <Hero locale="zh" />
      <ContactSection locale="zh" />
    </main>
  )
}