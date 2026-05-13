import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

export default function ZhAboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        eyebrow="关于 Astraea"
        title="我们帮助企业把 AI 从概念变成可落地的运营能力。"
        description="Astraea 与管理团队、运营团队和技术团队合作，重新设计工作流、识别高价值应用场景，并构建可持续演进的智能系统。"
      />
      <ContactSection locale="zh" />
    </main>
  )
}