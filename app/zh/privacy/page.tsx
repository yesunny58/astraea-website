
import Header from "@/components/layout/Header"
export default function PrivacyZH() {
  return (
    <main className="bg-white text-neutral-900">
      <Header locale="zh" />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight">
          隐私政策
        </h1>

        <p className="mt-6 text-neutral-600">
          更新日期：2026年5月18日
        </p>

        <div className="mt-10 space-y-8 text-neutral-700 leading-7">
          <section>
            <h2 className="text-xl font-semibold">概述</h2>
            <p className="mt-3">
              Astraea Advisory Limited 尊重您的隐私。
              本网站不会主动收集个人信息，除非您主动与我们联系。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">联系信息</h2>
            <p className="mt-3">
              如您通过邮件联系我们，我们可能会保留您的联系方式，
              仅用于沟通相关事宜。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">数据保护</h2>
            <p className="mt-3">
              我们不会出售或向第三方分发您的个人信息。
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}