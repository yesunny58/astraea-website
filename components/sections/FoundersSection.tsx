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
    },
    {
      name: isZh ? "李莎" : "Lisa Li",
      title: isZh ? "联合创始人 · 合伙人" : "Co‑Founder & Partner",
      image: "/founder2.jpg",
    },

    {
      name: isZh ? "叶志斌" : "Sunny Ye",
      title: isZh ? "联合创始人 · 合伙人" : "Co‑Founder & Partner",
      image: "/founder3.jpg",
    },

  ]

  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest uppercase text-neutral-500">
            {eyebrow}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                {founder.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                {founder.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}