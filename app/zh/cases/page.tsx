import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import ContactSection from "@/components/sections/ContactSection"

export default function ZhCasesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        eyebrow="案例"
        title="AI 如何在真实业务场景中产生可衡量的影响。"
        description="以下案例展示了企业如何通过自动化、数据智能和 AI 辅助工作流提升效率、质量和决策速度。"
      />

      <CaseStudiesSection locale="zh" />
      <ContactSection locale="zh" />
    </main>
  )
}