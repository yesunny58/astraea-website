import Link from "next/link"
import type { ReactNode } from "react"

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  )
}