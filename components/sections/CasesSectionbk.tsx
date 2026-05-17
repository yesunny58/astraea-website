export default function CasesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Cases
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            精选案例
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            我们帮助企业构建高性能、可扩展、易维护的数字化产品。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "企业官网建设",
              desc: "为品牌打造兼具视觉表现与转化能力的官方网站。",
            },
            {
              title: "SaaS 产品平台",
              desc: "从产品架构、前端界面到后台系统的一体化开发。",
            },
            {
              title: "数字化运营系统",
              desc: "帮助企业提升内部流程效率与业务数据管理能力。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-40 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100" />
              <h3 className="text-lg font-semibold text-gray-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}