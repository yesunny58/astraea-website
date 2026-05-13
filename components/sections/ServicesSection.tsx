const services = [
  {
    title: "AI Strategy",
    description:
      "Identify high-value opportunities and define a practical roadmap for AI transformation.",
  },
  {
    title: "Process Redesign",
    description:
      "Redesign workflows, decision points and collaboration models around intelligent operations.",
  },
  {
    title: "Implementation",
    description:
      "Build and deploy AI-enabled systems that connect with existing business operations.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
            From strategy to operational implementation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We work with leadership teams to move beyond isolated experiments
            and build AI capabilities into daily operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 p-8 transition hover:border-black"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-black">
                {service.title}
              </h3>

              <p className="mt-5 text-base leading-7 text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}