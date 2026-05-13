import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

const cases = [
  {
    title: "运营团队自动化",
    category: "流程优化",
    description:
      "为高频重复任务设计自动化工作流，减少人工处理时间，并提高跨团队协作效率。",
  },
  {
    title: "管理层决策仪表盘",
    category: "数据智能",
    description:
      "整合分散数据源，构建面向管理层的实时指标系统，帮助团队更快发现问题并做出决策。",
  },
  {
    title: "AI 客户支持助手",
    category: "智能服务",
    description:
      "基于企业知识库构建 AI 助手，提升客户响应速度，并减少客服团队重复性问答压力。",
  },
]

export default function ZhCasesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        eyebrow="案例"
        title="AI 如何在真实业务场景中产生可衡量的影响。"
        description="以下案例展示了企业如何通过自动化、数据智能和 AI 辅助工作流提升效率、质量和决策速度。"
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-neutral-200 p-8"
            >
              <p className="text-sm font-semibold text-neutral-500">
                {item.category}
              </p>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-5 leading-7 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection locale="zh" />
    </main>
  )
}