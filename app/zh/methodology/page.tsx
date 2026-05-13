import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

const steps = [
  {
    number: "01",
    title: "诊断",
    description:
      "梳理当前业务流程、团队协作方式、数据基础和运营瓶颈，找到最有价值的 AI 切入点。",
  },
  {
    number: "02",
    title: "设计",
    description:
      "设计新的工作流、自动化路径和 AI 系统架构，确保方案既可落地，也能扩展。",
  },
  {
    number: "03",
    title: "实施",
    description:
      "通过原型、试点和迭代交付，将 AI 能力嵌入实际业务流程，而不是停留在演示阶段。",
  },
  {
    number: "04",
    title: "优化",
    description:
      "根据真实业务数据持续优化模型、流程和使用体验，形成长期可复用的运营能力。",
  },
]

export default function ZhMethodologyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        eyebrow="方法论"
        title="用结构化方法降低 AI 转型的不确定性。"
        description="我们将 AI 转型拆解为诊断、设计、实施和优化四个阶段，让每一步都与业务结果相连。"
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-neutral-200 p-8"
              >
                <p className="text-sm font-semibold text-neutral-400">
                  {step.number}
                </p>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-5 leading-7 text-neutral-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactSection locale="zh" />
    </main>
  )
}