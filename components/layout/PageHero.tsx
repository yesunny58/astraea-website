
type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  locale?: "en" | "zh"
}

export default function PageHero({
  eyebrow,
  title,
  description,
  locale = "en",
}: PageHeroProps) {
  const isZh = locale === "zh"

  return (
    <section className="flex items-center py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16">

        <p
          className={`text-sm font-semibold text-neutral-500
            ${isZh ? "tracking-normal" : "uppercase tracking-[0.25em]"}
          `}
        >
          {eyebrow}
        </p>

        <h1
          className={`mt-6 max-w-4xl font-bold text-black
            ${
              isZh
                ? "text-4xl md:text-6xl leading-[1.6] tracking-normal"
                : "text-5xl md:text-7xl leading-tight tracking-tight"
            }
          `}
        >
          {title}
        </h1>

        <p
          className={`mt-8 max-w-3xl text-lg text-neutral-600
            ${isZh ? "leading-[1.9]" : "leading-8"}
          `}
        >
          {description}
        </p>

      </div>
    </section>
  )
}