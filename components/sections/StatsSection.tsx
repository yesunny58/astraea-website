const stats = [
  {
    value: "35%",
    label: "Average process efficiency improvement",
  },
  {
    value: "28%",
    label: "Increase in operational productivity",
  },
  {
    value: "60%",
    label: "Reduction in manual error rates",
  },
]

export default function StatsSection() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-neutral-200 bg-white p-8"
          >
            <div className="text-4xl font-bold tracking-tight text-black md:text-5xl">
              {item.value}
            </div>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}