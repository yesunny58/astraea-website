import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import BlogSection from "@/components/sections/BlogSection"
import ContactSection from "@/components/sections/ContactSection"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="Insights"
        title="Ideas on AI strategy, automation, operations, and organizational change."
        description="Read practical perspectives on how companies can adopt AI responsibly and effectively."
      />

      <BlogSection />
      <ContactSection />
    </main>
  )
}