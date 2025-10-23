import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Links - Personal Tiago Rodolfo",
  description:
    "Todos os links importantes do Personal Trainer Tiago Rodolfo. WhatsApp, Instagram, serviços e muito mais.",
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
