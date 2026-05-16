type Locale = "en" | "zh"

type HeroProps = {
  locale?: Locale
}

const content: Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    focusLabel: string
    focusText: string
    outcomeLabel: string
    outcomeText: string
  }
> = {
  en: {
    eyebrow: "",
    title: "Reengineering enterprise operations for the AI era.",
    description:
      "Astraea helps organizations redesign workflows, identify high-value AI use cases, and implement intelligent systems that improve operational performance.",
    primaryCta: "Start a conversation",
    secondaryCta: "Explore services",
    focusLabel: "Focus",
    focusText: "Strategy, process, systems, adoption.",
    outcomeLabel: "Outcome",
    outcomeText:
      "Practical AI transformation with measurable business value.",
  },
  zh: {
    eyebrow: "",
    title: "在AI时代重构企业运营。",
    description:
      "Astraea 帮助企业重新设计工作流程，识别高价值 AI 应用场景，并落地智能系统，从而提升运营效率与业务表现。",
    primaryCta: "开始沟通",
    secondaryCta: "了解服务",
    focusLabel: "重点",
    focusText: "战略、流程、系统与组织变化。",
    outcomeLabel: "成果",
    outcomeText: "创造可衡量业务价值的AI 转型落地。",
  },
}

export default function Hero({ locale = "en" }: HeroProps) {
  const text = content[locale]

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-8 md:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:text-sm">
            {text.eyebrow}
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-7xl">
            {text.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
            {text.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              {text.primaryCta}
            </a>

            <a
 //             href="#services"
                href={locale === "zh" ? "/zh/services" : "/services"}
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-semibold text-black transition hover:border-black"
            >
              {text.secondaryCta}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-7 lg:mt-10">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-neutral-500">
                {text.focusLabel}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-black md:text-2xl">
                {text.focusText}
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-5">
              <p className="text-sm font-medium text-neutral-500">
                {text.outcomeLabel}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-black md:text-2xl">
                {text.outcomeText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}