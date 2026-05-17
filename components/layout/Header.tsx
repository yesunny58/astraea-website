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
    { label: "How We Engage", href: "/how-we-engage" },
    { label: "Cases", href: "/cases" },
    { label: "Insights", href: "/blog" },
    { label: "Review", href: "/review" },
  ],
  zh: [
    { label: "关于", href: "/zh/about" },
    { label: "合作方式", href: "/zh/how-we-engage" },
    { label: "案例", href: "/zh/cases" },
    { label: "洞见", href: "/zh/blog" },
    { label: "评价", href: "/zh/review" },
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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">

        {/* Logo */}
        <Link
          href={homeHref}
          className="flex items-center gap-3 text-xl font-semibold tracking-tight text-black md:text-2xl"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Astraea Logo"
            className="h-9 w-9 object-contain md:h-11 md:w-11"
          />
          <span className="relative">
            {isZh ? "艾序" : "Astraea"}
            <sup className="ml-1 text-[10px] font-medium">®</sup>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems[locale].map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base tracking-wide transition ${
                  isActive
                    ? "text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-black"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            href={languageHref}
            className="ml-6 text-sm tracking-wide text-neutral-500 transition hover:text-black"
          >
            {languageLabel}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-lg md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute right-6 top-full mt-3 w-56 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems[locale].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-neutral-700 hover:text-black"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={languageHref}
                onClick={() => setOpen(false)}
                className="mt-4 text-sm text-neutral-500"
              >
                {languageLabel}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}