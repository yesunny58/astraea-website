type Locale = "en" | "zh"

type ContactSectionProps = {
  locale?: Locale
}

const content: Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    email: string
  }
> = {
  en: {
    eyebrow: "Contact",
    title: "Ready to redesign your operations?",
    description:
      "Tell us about your organization, operational challenges and AI ambitions. We will help you identify the right starting point.",
    email: "hello@astraea.ai",
  },
  zh: {
    eyebrow: "联系",
    title: "准备好重新设计你的企业运营了吗？",
    description:
      "告诉我们你的企业情况、当前面临的运营挑战，以及你希望通过 AI 实现的目标。我们会帮助你找到最合适的切入点。",
    email: "hello@astraea.ai",
  },
}

export default function ContactSection({
  locale = "en",
}: ContactSectionProps) {
  const text = content[locale]

  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {text.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {text.title}
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-neutral-300">
            {text.description}
          </p>

          <a
            href={`mailto:${text.email}`}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            {text.email}
          </a>
        </div>
      </div>
    </section>
  )
}