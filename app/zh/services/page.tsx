import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

const services = [
  {
    title: "AI 转型战略",
    description:
      "帮助企业识别最值得投入的 AI 场景，制定清晰的落地路线图，并将 AI 机会与业务目标对齐。",
  },
  {
    title: "工作流自动化",
    description:
      "重新设计重复性高、协作成本高的业务流程，通过自动化和智能代理提升效率。",
  },
  {
    title: "数据与智能系统",
    description:
      "构建支持分析、预测、决策和运营优化的数据基础设施与 AI 系统。",
  },
]

export default function ZhServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        eyebrow="服务"
        title="从战略到落地，帮助企业系统性采用 AI。"
        description="我们结合业务诊断、流程重构、AI 原型设计和系统实施，帮助企业获得可衡量的运营提升。"
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-neutral-200 p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h2>
              <p className="mt-5 leading-7 text-neutral-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection locale="zh" />
    </main>
  )
}