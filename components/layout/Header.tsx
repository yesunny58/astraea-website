"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"


type Locale = "en" | "zh"

type HeaderProps = {
  locale?: Locale
}

const navItems: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "About", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Methodology", href: "/methodology" },
    { label: "Cases", href: "/cases" },
    { label: "Insights", href: "/blog" },
  ],
  zh: [
    { label: "关于", href: "/zh/about" },
    { label: "服务", href: "/zh/services" },
    { label: "方法论", href: "/zh/methodology" },
    { label: "案例", href: "/zh/cases" },
    { label: "洞察", href: "/zh/blog" },
  ],
}

export default function Header({ locale = "en" }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isZh = locale === "zh"

  const homeHref = isZh ? "/zh" : "/"
  const languageHref = isZh ? "/" : "/zh"
  const languageLabel = isZh ? "EN" : "中文"

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-6">
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 whitespace-nowrap text-2xl font-bold tracking-tight text-black md:text-3xl"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Astraea Logo"
            className="h-10 w-10 shrink-0 object-contain md:h-15 md:w-15"
          />
          <span className="relative inline-block pr-5 leading-none">
            {isZh ? "艾序" : "Astraea"}
            <sup className="ml-1 text-absolute right-0 -top-4 text-xs font-semibold leading-none">®</sup>
          </span>
        </Link>

        {/* Desktop navigation */}
        
        <nav className="hidden items-center gap-10 md:flex">
        <nav className="hidden items-center gap-10 md:flex">
          {navItems[locale].map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition ${isActive
                  ? "text-black bg-neutral-100 px-4 py-2 rounded-md"
                  : "text-neutral-600 hover:text-black"
                  }`}
              >
                {item.label}
              </Link>
            )
          })}

          {/* Language Switch */}
          <Link
            href={languageHref}
            className="ml-4 text-sm font-medium text-neutral-600 transition hover:text-black"
          >
            {languageLabel}
          </Link>
        </nav>


      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-2xl leading-none text-black md:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label={isZh ? "切换导航菜单" : "Toggle navigation menu"}
        aria-expanded={open}
      >
        {open ? "×" : "☰"}
      </button>

      {/* Click outside overlay */}
      {open && (
        <button
          type="button"
          aria-label={isZh ? "关闭导航菜单" : "Close navigation menu"}
          className="fixed inset-0 z-40 cursor-default bg-transparent md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile floating menu */}
      {open && (
        <nav className="absolute right-5 top-full z-50 mt-3 w-56 rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems[locale].map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full px-4 py-2 text-base font-medium transition ${isActive
                    ? "text-black bg-neutral-100 px-4 py-2 rounded-md shadow-sm"
                    : "text-neutral-700 hover:text-black"
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href={languageHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-black transition hover:border-black hover:bg-neutral-50"
            >
              {languageLabel}
            </Link>
          </div>
        </nav>
      )}
    </div>
    </header >
  )
}