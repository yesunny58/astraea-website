type Locale = "en" | "zh"

type Props = {
  locale?: Locale
}

const content = {
  en: {
    title: "Engagement Considerations",
    faqs: [
      {
        q: "Is commitment required across all phases?",
        a: "No. Each phase is independently scoped.",
      },
      {
        q: "Can we begin with implementation?",
        a: "A diagnostic phase ensures measurable scope and alignment.",
      },
      {
        q: "How are fees determined?",
        a: "By scope complexity, integration depth, and organizational scale.",
      },
      {
        q: "How is scope change managed?",
        a: "Through formal Change Requests under SOW.",
      },
    ],
  },

  zh: {
    title: "合作常见问题",
    faqs: [
      {
        q: "是否必须承诺完成所有阶段？",
        a: "不需要。每个阶段都可独立签署与执行。",
      },
      {
        q: "可以直接从实施阶段开始吗？",
        a: "诊断阶段有助于确保范围可量化并实现目标对齐。",
      },
      {
        q: "费用是如何确定的？",
        a: "基于项目复杂度、系统整合深度及组织规模综合评估。",
      },
      {
        q: "范围变更如何管理？",
        a: "通过正式的变更申请流程（Change Request）并依据 SOW 执行。",
      },
    ],
  },
}

export default function EngagementConsiderationsSection({
  locale = "en",
}: Props) {
  const t = content[locale]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl mb-12">
          {t.title}
        </h2>

        <div className="space-y-10">
          {t.faqs.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg font-semibold text-black">
                {item.q}
              </h3>
              <p className="mt-3 text-neutral-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}