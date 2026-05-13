const steps = [
  {
    title: "Diagnose",
    description:
      "Map business processes, identify friction points and quantify operational opportunities.",
  },
  {
    title: "Redesign",
    description:
      "Rebuild workflows, roles and decision logic around measurable business outcomes.",
  },
  {
    title: "Implement",
    description:
      "Deliver intelligent systems, automation tools and adoption mechanisms.",
  },
  {
    title: "Optimize",
    description:
      "Measure performance, iterate models and continuously improve operations.",
  },
]

export default function MethodologySection() {
  return (
    <section id="methodology" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-16">
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold tracking-[-0.05em] text-black md:text-7xl">
            Methodology
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-8 py-10 md:grid-cols-[160px_1fr_1.4fr] md:items-start"
            >
              <div className="text-lg text-neutral-400">0{index + 1}</div>

              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">
                {step.title}
              </h3>

              <p className="text-xl leading-relaxed tracking-[-0.02em] text-neutral-600 md:text-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}