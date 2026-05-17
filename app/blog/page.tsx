import Header from "@/components/layout/Header"
import PostsSection from "@/components/sections/PostsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <PostsSection />
      <ContactSection />
    </main>
  )
}