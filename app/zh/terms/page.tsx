
import Header from "@/components/layout/Header"
export default function TermsZH() {
  return (
    <main className="bg-white text-neutral-900">
      <Header locale="zh" />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight">
          使用条款
        </h1>

        <p className="mt-6 text-neutral-600">
          更新日期：2026年5月18日
        </p>

        <div className="mt-10 space-y-8 text-neutral-700 leading-7">
          <section>
            <h2 className="text-xl font-semibold">网站内容</h2>
            <p className="mt-3">
              本网站内容仅供参考，不构成任何形式的专业、法律或投资建议。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">知识产权</h2>
            <p className="mt-3">
              本网站所有内容及品牌归 Astraea Advisory Limited 所有。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">责任限制</h2>
            <p className="mt-3">
              对因使用本网站信息而产生的任何损失，
              Astraea Advisory Limited 不承担责任。
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}