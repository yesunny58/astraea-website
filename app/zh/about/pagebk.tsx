import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"
import FoundersSection from "@/components/sections/FoundersSection"

export default function ZhAboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />
     

      <PageHero
        eyebrow="关于艾序"
        title="我们想把半生经验变成 “火把”，照亮更多企业的路。"
        description="艾序与管理团队、运营团队和技术团队合作，重新设计工作流、识别高价值应用场景，并构建可持续演进的智能系统。"
      />
      <FoundersSection locale = "zh" />      
      <ContactSection locale="zh" />
    </main>
  )
}