type Locale = "en" | "zh"

type FoundersSectionProps = {
  locale?: Locale
}

export default function FoundersSection({
  locale = "en",
}: FoundersSectionProps) {
  const isZh = locale === "zh"

  const eyebrow = isZh ? "创始合伙人" : "Founding Partners"

  const founders = [
    {
      name: isZh ? "谭瑛" : "Cherry Tan",
      title: isZh ? "联合创始人 · 合伙人" : "Co‑Founder & Partner",
      image: "/founder1.jpg",
      bio: isZh
        ? "深耕战略咨询与跨境业务二十余年，专注企业全球化布局与组织升级。"
        : "Over 20 years of experience in strategy and cross-border business, advising enterprises on global expansion and organizational transformation.",
    },
    {
      name: isZh ? "李莎" : "Lisa Li",
      title: isZh ? "联合创始人 · 合伙人" : "Co‑Founder & Partner",
      image: "/founder2.jpg",
      bio: isZh
        ? "专注品牌战略与资本市场沟通，长期为创始人提供战略顾问支持。"
        : "Specializes in brand strategy and capital communication, supporting founders on positioning and sustainable growth.",
    },
    {
      name: isZh ? "叶志斌" : "Sunny Ye",
      title: isZh ? "联合创始人 · 合伙人" : "Co‑Founder & Partner",
      image: "/founder3.jpg",
      bio: isZh
        ? "长期从事企业运营与系统搭建，推动战略落地与执行效率提升。"
        : "Focuses on operational systems and execution, enabling scalable and efficient growth.",
    },
  ]

  return (
    <section className="bg-white px-6">
      <div className="mx-auto w-full max-w-7xl py-24">
        
        {/* Section Label — 与 PageHero 完全一致 */}
        <p className="mb-16 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          {eyebrow}
        </p>

        {/* Founders Grid */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <div key={founder.name}>
              
              {/* Image */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-black">
                {founder.name}
              </h3>

              {/* Title */}
              <p className="mt-1 text-sm text-neutral-500">
                {founder.title}
              </p>

              {/* Bio */}
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