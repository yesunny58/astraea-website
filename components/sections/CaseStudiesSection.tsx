import { getCases } from "@/lib/api"

export default function CaseStudiesSection() {
  const cases = getCases()

  return (
    <section id="cases" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-16">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Case Studies
            </p>
            <h2 className="max-w-4xl text-5xl font-extrabold tracking-[-0.05em] text-black md:text-7xl">
              Practical AI results across real business scenarios.
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-relaxed tracking-[-0.02em] text-neutral-600">
            We focus on measurable operational improvement, not abstract AI
            experiments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[420px] flex-col justify-between border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="mb-8 inline-flex rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-500">
                  {item.category}
                </div>

                <h3 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-black">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed tracking-[-0.02em] text-neutral-600">
                  {item.summary}
                </p>
              </div>

              <div className="mt-12 border-t border-neutral-200 pt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Result
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-black">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}