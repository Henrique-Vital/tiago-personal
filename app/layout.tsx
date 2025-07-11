import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Personal Tiago Rodolfo - Transforme seu Corpo",
  description:
    "Acompanhamento profissional para você alcançar seus objetivos de forma segura e eficiente. Consultoria Online, Treino Presencial e em Grupo.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-200`}>{children}</body>
    </html>
  )
}
