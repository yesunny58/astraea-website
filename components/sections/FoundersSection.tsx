type Locale = "en" | "zh"

type FoundersSectionProps = {
  locale?: Locale
}

export default function FoundersSection({
  locale = "en",
}: FoundersSectionProps) {
  const isZh = locale === "zh"

  const eyebrow = isZh ? "团队" : "Leadership"

  const heading = isZh
    ? "推动复杂转型的合伙人"
    : "Partners in complex transformation."

  const founders = [
    {
      name: isZh ? "谭瑛" : "Cherry Tan",
      title: isZh ? "合伙人" : "Partner",
      image: "/founder1.jpg",
      bio: isZh
        ? "曾任职 IBM，联想 与 Cisco，参与企业战略与跨区域协同项目，长期负责复杂环境下的组织协作与落地推进。"
        : "Formerly with IBM,Lenovo and Cisco, involved in enterprise strategy and cross‑regional coordination initiatives, leading execution in complex operating environments.",
    },
    {
      name: isZh ? "李xx" : "Lixx",
      title: isZh ? "合伙人" : "Partner",
      image: "/founder3.jpg",
      bio: isZh
        ? "曾任职 IBM 与 联想，专注品牌战略与高管定位，在结构化表达与长期发展路径设计方面拥有丰富经验。"
        : "Formerly with IBM and Lenovo, specializing in brand strategy and executive positioning, with experience in structured communication and long‑term growth alignment.",
    },
    {
      name: isZh ? "叶志斌" : "Sunny Ye",
      title: isZh ? "合伙人" : "Partner",
      image: "/founder3.jpg",
      bio: isZh
        ? "曾在 IBM 与 联想，参与全球供应链与运营体系转型项目，负责跨部门流程重构与系统落地执行。"
        : "Formerly with IBM and Lenovo, contributing to global supply chain and operating model transformation, overseeing cross‑functional redesign and system implementation.",
    },
  ]

  return (
    <section className="bg-white px-6">
      <div className="mx-auto w-full max-w-7xl py-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          {eyebrow}
        </p>

        <h2 className="mb-16 text-3xl font-semibold tracking-tight text-black">
          {heading}
        </h2>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <div key={founder.name}>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-black">
                {founder.name}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {founder.title}
              </p>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}