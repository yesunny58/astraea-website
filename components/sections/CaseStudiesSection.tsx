import { getCases } from "@/lib/api"

type Props = {
  locale?: "en" | "zh"
}

export default function CaseStudiesSection({ locale = "en" }: Props) {
  const cases = getCases()
  const isZh = locale === "zh"

  return (
    <section id="cases" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-16">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {isZh ? "案例" : "Case Studies"}
            </p>

            <h2
              className={`max-w-4xl font-extrabold tracking-[-0.05em] text-black ${isZh ? "text-4xl md:text-6xl leading-[1.5]" : "text-5xl md:text-7xl"}`}
            >
              {isZh
                ? (
                  <>
                    真实业务场景中的 
                    <br className="hidden md:block" />
                    AI实践成果。
                  </>
                )
                : "Practical AI results across real business scenarios."}
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-relaxed tracking-[-0.02em] text-neutral-600">
            {isZh
              ? "我们关注可量化的运营改进，而非抽象的 AI 实验。"
              : "We focus on measurable operational improvement, not abstract AI experiments."}
          </p>
        </div>

        {/* Case Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[420px] flex-col justify-between border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="mb-8 inline-flex rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-500">
                  {isZh ? item.categoryCn : item.category}
                </div>

                <h3 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-black">
                  {isZh ? item.titleCn : item.title}
                </h3>

                <p className="text-lg leading-relaxed tracking-[-0.02em] text-neutral-600">
                  {isZh ? item.summaryCn : item.summary}
                </p>
              </div>

              <div className="mt-12 border-t border-neutral-200 pt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  {isZh ? "成果" : "Result"}
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-black">
                  {isZh ? item.resultCn : item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}