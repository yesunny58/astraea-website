export default function Page() {
  return (
    <main className="bg-white text-neutral-900">

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          How We Engage
        </div>

        <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
          Structured transformation.
          <br />
          Designed for measurable progress.
        </h1>

        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
          We partner with leadership teams to diagnose operational complexity,
          redesign core systems, and implement scalable solutions through
          disciplined transformation cycles.
        </p>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-5xl px-6 py-28 border-t border-neutral-200">
        <h2 className="text-2xl font-medium mb-16">
          Engagement Principles
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-lg font-medium mb-3">
              Outcome-Oriented
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Every engagement is anchored in measurable operational and financial outcomes,
              not abstract transformation narratives.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">
              System-Level Thinking
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              We address workflows, decision structures, governance models and
              enabling technologies as an integrated system.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">
              Iterative Execution
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Transformation is delivered through structured cycles,
              enabling controlled experimentation and continuous refinement.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="mx-auto max-w-5xl px-6 py-28 border-t border-neutral-200">
        <h2 className="text-2xl font-medium mb-20">
          Engagement Lifecycle
        </h2>

        <div className="space-y-24">

          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-xl font-medium mb-4">
              Phase I — Diagnose
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Map core processes, identify structural bottlenecks,
              and quantify performance gaps across the operating model.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-xl font-medium mb-4">
              Phase II — Redesign
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Rebuild workflows, clarify ownership, and realign decision logic
              around measurable outcomes and scalability.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-xl font-medium mb-4">
              Phase III — Implement
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Deploy enabling systems, automation tools, and governance mechanisms
              with executive-level alignment and operational discipline.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-xl font-medium mb-4">
              Phase IV — Optimize
            </h3>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Measure performance, iterate system design, and institutionalize
              continuous operational improvement.
            </p>
          </div>

        </div>
      </section>

      {/* Engagement Model */}
      <section className="mx-auto max-w-5xl px-6 py-28 border-t border-neutral-200">
        <h2 className="text-2xl font-medium mb-12">
          Engagement Model
        </h2>

        <p className="max-w-2xl text-neutral-600 leading-relaxed mb-8">
          Engagements are structured in focused cycles, typically 8–16 weeks,
          with executive sponsorship and cross-functional collaboration.
        </p>

        <p className="max-w-2xl text-neutral-600 leading-relaxed">
          We operate as embedded transformation partners — aligning strategy,
          process and systems to deliver sustained organizational capability.
        </p>
      </section>

    </main>
  )
}