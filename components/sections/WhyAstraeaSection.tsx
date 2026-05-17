type Locale = "en" | "zh"

type Props = {
  locale?: Locale
}

const content = {
  en: {
    title: "Why Astraea",
    points: [
      {
        title: "Structured, not experimental.",
        description: "Each engagement follows a defined lifecycle.",
      },
      {
        title: "Measured, not assumed.",
        description: "Performance impact is quantified.",
      },
      {
        title: "Integrated, not fragmented.",
        description: "Strategy and execution are delivered together.",
      },
      {
        title: "Independent, not dependent.",
        description:
          "We build internal capability rather than long-term reliance.",
      },
    ],
  },

  zh: {
    title: "为什么选择艾序咨询",
    points: [
      {
        title: "结构化，而非试验性。",
        description: "每一次合作都遵循清晰定义的生命周期模型。",
      },
      {
        title: "可衡量，而非假设。",
        description: "绩效影响以量化指标呈现。",
      },
      {
        title: "整合式，而非割裂式。",
        description: "战略与执行一体化交付。",
      },
      {
        title: "赋能式，而非依赖式。",
        description:
          "我们构建企业内部能力，而非制造长期依赖。",
      },
    ],
  },
}

export default function WhyAstraeaSection({
  locale = "en",
}: Props) {
  const t = content[locale]

  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl mb-16">
          {t.title}
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {t.points.map((point) => (
            <div key={point.title}>
              <h3 className="text-xl font-semibold text-black">
                {point.title}
              </h3>
              <p className="mt-4 text-neutral-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}