type Locale = "en" | "zh"

type Props = {
    locale?: Locale
}


const content = {
    en: {
        title: "Why Astraea",
        points: [
            {
                title: "Structured, not improvised.",
                description:
                    "Every engagement follows a clearly defined transformation architecture, not ad-hoc experimentation.",
            },
            {
                title: "Measured, not theoretical.",
                description:
                    "Impact is translated into quantifiable business outcomes, not slide-level assumptions.",
            },
            {
                title: "Integrated, not fragmented.",
                description:
                    "Strategy, operating model, and execution are delivered as a unified system.",
            },
            {
                title: "Empowering, not dependent.",
                description:
                    "We institutionalize capability inside your organization rather than create external reliance.",
            },
            {
                title: "Global standards, disciplined economics.",
                description:
                    "We operate with the rigor of top-tier global consultancies while maintaining a structurally efficient cost model.",
            },
        ],
    },

    zh: {
        title: "为什么选择艾序咨询",
        points: [
            {
                title: "体系化，而非即兴式。",
                description:
                    "每一次合作都基于完整的转型架构设计，而非碎片化试验。",
            },
            {
                title: "结果导向，而非理论假设。",
                description:
                    "绩效影响转化为可验证的业务成果，而非停留在汇报层面的判断。",
            },
            {
                title: "系统整合，而非功能割裂。",
                description:
                    "战略、组织与执行作为统一系统交付，而非分散式推进。",
            },
            {
                title: "能力沉淀，而非外部依赖。",
                description:
                    "我们将方法论内化为企业能力，而非制造长期顾问依赖。",
            },
            {
                title: "全球标准，理性成本结构。",
                description:
                    "以国际一线咨询的严谨交付水准，同时保持结构化高效率的成本体系。",
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