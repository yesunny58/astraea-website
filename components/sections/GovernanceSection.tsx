type Locale = "en" | "zh"

type Props = {
  locale?: Locale
}

const content = {
  en: {
    title: "Governance & Accountability",
    intro:
      "All engagements are executed under formal agreements, including:",
    items: [
      "Mutual NDA",
      "Statement of Work",
      "Defined deliverables and acceptance criteria",
      "Milestone-based invoicing",
      "Change request protocol",
      "Intellectual property clarity",
    ],
    closing: "We operate with defined accountability.",
  },

  zh: {
    title: "治理与责任机制",
    intro:
      "所有合作均在正式协议框架下执行，包括：",
    items: [
      "双向保密协议（NDA）",
      "工作说明书（SOW）",
      "明确的交付成果与验收标准",
      "基于里程碑的付款机制",
      "变更申请流程",
      "知识产权归属明确",
    ],
    closing: "我们在清晰责任机制下运作。",
  },
}

export default function GovernanceSection({
  locale = "en",
}: Props) {
  const t = content[locale]

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
          {t.title}
        </h2>

        {/* ✅ 正文缩进层 */}
        <div className="mt-8 max-w-3xl md:ml-6">

          <p className="text-neutral-600">
            {t.intro}
          </p>

          <ul className="mt-8 space-y-3 text-neutral-700">
            {t.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-8 font-medium text-black">
            {t.closing}
          </p>

        </div>

      </div>
    </section>
  )
}