import { getPosts } from "@/lib/posts"

type Props = {
  locale?: "en" | "zh"
}

export default function PostsSection({locale="en"}: Props) {
  const posts = getPosts()
  const isZh = locale === "zh"

  return (
    <section id="posts" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-16">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Posts
          </p>
          <h2 className="max-w-4xl text-5xl font-extrabold tracking-[-0.05em] text-black md:text-7xl">
            Thinking on AI, operations, and enterprise transformation.
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {posts.map((post) => (
            <article
              key={post.id}
              className="grid gap-8 py-10 transition hover:bg-neutral-50 md:grid-cols-[180px_1fr_1.2fr]"
            >
              <time className="text-lg text-neutral-400">
                {post.date}
              </time>

              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black md:text-4xl">
                {post.title}
              </h3>

              <p className="text-xl leading-relaxed tracking-[-0.02em] text-neutral-600">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}