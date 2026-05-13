import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Astraea AI Consulting",
  description:
    "Astraea AI Consulting helps enterprises redesign operations for the AI era.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}