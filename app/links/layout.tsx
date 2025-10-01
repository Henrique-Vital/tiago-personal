import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Links - Personal Thiago Rodolfo",
  description:
    "Todos os links importantes do Personal Trainer Thiago Rodolfo. WhatsApp, Instagram, serviços e muito mais.",
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
