import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ContactSection from "@/components/sections/ContactSection"
import FoundersSection from "@/components/sections/FoundersSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <PageHero
        eyebrow="About Astraea"
        title="Turning decades of hard‑earned experience into a guiding torch."
        description="Astraea partners with leadership teams to redesign workflows, identify high‑value AI use cases, and build intelligent systems that evolve with the organization."
      />

      {/* Reality Insight */}
      <section className="bg-white px-6">
        <div className="mx-auto max-w-4xl py-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-black">
            In complex environments, clarity of direction does not guarantee clarity of execution.
          </h2>

          <p className="mb-6 text-neutral-600 leading-relaxed">
            Enterprise transformation often requires sustained adjustments
            across processes, system architecture, and organizational alignment.
            The challenge rarely lies in defining strategy,
            but in navigating the realities of cross‑functional execution.
          </p>

          <p className="text-neutral-600 leading-relaxed">
            When objectives, accountability, and delivery pathways align,
            transformation becomes sustainable rather than episodic.
          </p>
        </div>
      </section>

      {/* Our Position */}
      <section className="bg-neutral-50 px-6">
        <div className="mx-auto max-w-4xl py-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-black">
            We come from the execution front line.
          </h2>

          <p className="mb-6 text-neutral-600 leading-relaxed">
            Across multiple global transformation programs,
            we led from the client side — accountable for program governance,
            operational redesign, and system implementation.
          </p>

          <p className="text-neutral-600 leading-relaxed">
            During these initiatives, leading consulting firms such as
            McKinsey and Accenture were engaged to provide strategic frameworks
            and board‑level analysis.
            We understand advisory rigor — and we carry responsibility for results.
          </p>
        </div>
      </section>

      <FoundersSection />

      <ContactSection />
    </main>
  )
}