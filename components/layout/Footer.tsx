import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2 font-bold text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
              C
            </div>
            <span className="text-lg">公司名称</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            我们专注于企业官网建设、系统开发、品牌设计与长期技术支持，
            帮助企业建立专业可信的线上形象。
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">快速链接</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white">关于我们</Link></li>
            <li><Link href="/services" className="hover:text-white">服务</Link></li>
            <li><Link href="/cases" className="hover:text-white">案例</Link></li>
            <li><Link href="/blog" className="hover:text-white">博客</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">联系我们</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>邮箱：contact@example.com</li>
            <li>电话：+86 000 0000 0000</li>
            <li>地址：请填写公司地址</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5">
        <div className="container-page text-sm text-slate-500">
          © 2026 公司名称. All rights reserved.
        </div>
      </div>
    </footer>
  )
}