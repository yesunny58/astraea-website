const phases = [
  {
    title: "Diagnose",
    titleCn: "诊断",
    description:
      "Establish a clear operational baseline by mapping processes, identifying structural friction, and quantifying performance gaps.",
    descriptionCn:
      "建立清晰的运营基线，梳理核心流程，识别结构性阻力，并量化绩效差距。",
  },
  {
    title: "Redesign",
    titleCn: "重构",
    description:
      "Restructure workflows, ownership models, and decision architecture around measurable business outcomes.",
    descriptionCn:
      "围绕可衡量的业务成果，重构流程体系、职责结构与决策架构。",
  },
  {
    title: "Implement",
    titleCn: "实施",
    description:
      "Deploy intelligent systems, automation capabilities, and governance mechanisms with disciplined execution.",
    descriptionCn:
      "通过严格执行机制，部署智能系统、自动化能力与治理结构。",
  },
  {
    title: "Optimize",
    titleCn: "优化",
    description:
      "Continuously measure impact, refine system design, and institutionalize performance improvement.",
    descriptionCn:
      "持续衡量效果，优化系统设计，并将改进机制制度化。",
  },
]

type Props = {
  locale?: "en" | "zh"
}

export default function HowWeEngageSection({ locale = "en" }: Props) {
  const isZh = locale === "zh"

  return (
    <section id="how-we-engage" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-12 lg:px-16">

        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-[clamp(1.75rem,5.5vw,3.75rem)] font-extrabold tracking-[-0.03em] text-black leading-[0.96] max-w-[70ch] break-words">
            {isZh ? "合作路径" : "ENGAGEMENT MODEL"}
          </h2>
        </div>

        {/* Phases */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="grid gap-8 py-4 md:grid-cols-[96px_1fr_1.4fr] md:items-start"
            >
              {/* Index */}
              <div className="text-lg text-neutral-400">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black md:text-5xl">
                {isZh ? phase.titleCn : phase.title}
              </h3>

              {/* Description */}
              <p className="text-xl leading-relaxed tracking-[-0.01em] text-neutral-600 md:text-2xl">
                {isZh ? phase.descriptionCn : phase.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}