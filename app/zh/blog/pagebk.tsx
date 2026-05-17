import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"

const posts = [
  {
    title: "企业采用 AI 前，需要先回答的三个问题",
    date: "观点",
    description:
      "AI 项目的成功往往不取决于模型本身，而取决于业务目标、流程结构和组织准备度。",
  },
  {
    title: "为什么工作流重构比工具采购更重要",
    date: "方法",
    description:
      "真正的 AI 转型不是简单增加一个工具，而是重新设计人、数据和系统之间的协作方式。",
  },
  {
    title: "从试点到规模化：AI 落地的关键路径",
    date: "实践",
    description:
      "企业需要通过小范围验证、指标评估和系统化复制，将 AI 能力从单点应用扩展到组织层面。",
  },
]

export default function ZhBlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        eyebrow="洞察"
        title="关于 AI 转型、运营设计和智能系统的思考。"
        description="我们分享关于企业 AI 落地、流程自动化、数据智能和组织变革的实践观点。"
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-neutral-200 p-8"
            >
              <p className="text-sm font-semibold text-neutral-500">
                {post.date}
              </p>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-5 leading-7 text-neutral-600">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection locale="zh" />
    </main>
  )
}