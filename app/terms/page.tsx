import Header from "@/components/layout/Header"

export default function Terms() {
  return (
    <main className="bg-white text-neutral-900">

      <Header />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight">
          Terms of Use
        </h1>

        <p className="mt-6 text-neutral-600">
          Last updated: May 18, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-700 leading-7">
          <section>
            <h2 className="text-xl font-semibold">1. Website Content</h2>
            <p className="mt-3">
              All content on this website is for informational purposes
              only. It does not constitute professional, financial, or
              legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              2. Intellectual Property
            </h2>
            <p className="mt-3">
              All materials, text, and branding are the property of
              Astraea Advisory Limited unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              3. Limitation of Liability
            </h2>
            <p className="mt-3">
              Astraea Advisory Limited is not liable for any loss arising
              from reliance on information provided on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              4. Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by applicable laws without regard
              to conflict of law principles.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}