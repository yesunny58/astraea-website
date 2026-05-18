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
        description="艾序与企业管理层协作，重构流程体系，识别高价值 AI 应用场景，并构建能够长期演进的智能化运营系统。"
      />

      {/* 现实洞察 */}
      <section className="bg-white px-6">
        <div className="mx-auto max-w-4xl py-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-black">
            在复杂环境中，方向明确并不意味着执行顺畅。
          </h2>

          <p className="mb-6 text-neutral-600 leading-relaxed">
            企业转型往往涉及流程设计、系统架构与组织协同方式的持续调整。
            挑战并非来自战略本身，而是来自跨部门协作与落地推进的现实复杂性。
          </p>

          <p className="text-neutral-600 leading-relaxed">
            当目标、责任与执行路径形成一致，
            组织才真正具备持续演进的能力。
          </p>
        </div>
      </section>

      {/* 我们的位置 */}
      <section className="bg-neutral-50 px-6">
        <div className="mx-auto max-w-4xl py-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-black">
            我们来自执行一线。
          </h2>

          <p className="mb-6 text-neutral-600 leading-relaxed">
            在多个全球转型项目中，我们作为甲方项目负责人，
            统筹跨部门协作、流程重构与系统落地执行。
          </p>

          <p className="text-neutral-600 leading-relaxed">
            同期，麦肯锡与埃森哲等国际咨询公司参与战略框架设计与高层分析支持。
            我们理解咨询逻辑，也承担结果责任。
          </p>
        </div>
      </section>

      <FoundersSection locale="zh" />

      <ContactSection locale="zh" />
    </main>
  )
}