import { getPosts } from "@/lib/posts"

type Props = {
  locale?: "en" | "zh"
}

export default function PostsSection({ locale = "en" }: Props) {
  const posts = getPosts()

  const content = {
    en: {
      label: "Insights",
      title:
        "Perspectives on AI, operating models, and enterprise transformation.",
    },
    zh: {
      label: "观点",
      title: "围绕 AI、运营模式与企业转型的系统思考",
    },
  }

  const isZh = locale === "zh"

  return (
    <section id="posts" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="mb-20">
          <p
            className={`
              mb-4 text-sm font-semibold text-neutral-500
              ${isZh ? "tracking-normal" : "uppercase tracking-[0.2em]"}
            `}
          >
            {content[locale].label}
          </p>

          <h2
            className={`
              max-w-4xl font-bold text-black
              ${
                isZh
                  ? "text-3xl md:text-6xl leading-snug tracking-normal"
                  : "text-4xl md:text-6xl tracking-tight"
              }
            `}
          >
            {content[locale].title}
          </h2>
        </div>

        {/* Posts List */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {posts.map((post) => {
            const title = isZh ? post.titleCn : post.title
            const excerpt = isZh ? post.excerptCn : post.excerpt

            return (
              <article
                key={post.id}
                className="grid grid-cols-1 gap-6 py-12 transition hover:bg-neutral-50 md:grid-cols-[160px_1fr_1.3fr]"
              >
                <time className="text-base text-neutral-400">
                  {post.date}
                </time>

                <h3
                  className={`
                    font-semibold text-black
                    ${
                      isZh
                        ? "text-xl md:text-2xl leading-relaxed tracking-normal"
                        : "text-2xl md:text-3xl tracking-tight"
                    }
                  `}
                >
                  {title}
                </h3>

                <p
                  className={`
                    text-neutral-600
                    ${
                      isZh
                        ? "text-base leading-8"
                        : "text-lg leading-relaxed"
                    }
                  `}
                >
                  {excerpt}
                </p>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}