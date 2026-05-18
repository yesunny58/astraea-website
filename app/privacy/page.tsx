import Header from "@/components/layout/Header"

export default function Privacy() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-6 text-neutral-600">
          Last updated: May 18, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-700 leading-7">
          <section>
            <h2 className="text-xl font-semibold">1. Overview</h2>
            <p className="mt-3">
              Astraea Advisory Limited respects your privacy. This website
              does not actively collect personal information unless you
              choose to contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              2. Information You Provide
            </h2>
            <p className="mt-3">
              If you contact us via email, we may retain your contact
              details solely for communication purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              3. Analytics & Cookies
            </h2>
            <p className="mt-3">
              This website may use basic analytics tools to understand
              website traffic. No personally identifiable information is
              intentionally collected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              4. Data Protection
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect any information
              shared with us. We do not sell or distribute personal data
              to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              5. Contact
            </h2>
            <p className="mt-3">
              For any privacy-related inquiries, please contact:
              sunny@astraea.it.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}