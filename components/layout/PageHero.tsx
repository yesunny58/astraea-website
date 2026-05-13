type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center px-6">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          {eyebrow}
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-black md:text-7xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-8 max-w-3xl text-xl leading-8 text-neutral-600">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}