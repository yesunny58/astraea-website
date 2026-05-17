import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import PostsSection from "@/components/sections/PostsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function ZhPostsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh"/>
      <PostsSection locale ="zh"/>
      <ContactSection locale="zh"/>
    </main>
  )
}