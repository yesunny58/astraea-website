import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="Contact"
        title="Let’s discuss where AI can create value for your organization."
        description="Tell us about your goals, workflows, or transformation priorities. We’ll help you identify the right starting point."
      />

      <ContactSection />
    </main>
  )
}