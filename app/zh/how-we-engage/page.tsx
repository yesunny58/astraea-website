import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import EngagementLifecycleSection from "@/components/sections/EngagementLifecycleSection"
import GovernanceSection from "@/components/sections/GovernanceSection"
import WhyAstraeaSection from "@/components/sections/WhyAstraeaSection"
import EngagementConsiderationsSection from "@/components/sections/EngagementConsiderationsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function HowWeEngagePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        locale="zh"
        eyebrow="从混乱到秩序的过程"
        title="通向运营智能的结构化路径。"
        description="我们与管理团队合作，通过明确阶段设计、验证并规模化 AI 赋能的运营体系。"
      />

      <EngagementLifecycleSection locale="zh" />
      <GovernanceSection locale="zh" />
      <WhyAstraeaSection locale="zh" />
      <EngagementConsiderationsSection locale="zh" />
      <ContactSection locale="zh" />
    </main>
  )
}