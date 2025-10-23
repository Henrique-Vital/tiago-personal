"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dumbbell, Instagram, Menu, MoveRight, ShieldCheck, Sparkles, Target, Users, Zap, X } from "lucide-react"
import { useState } from "react"

export default function ModernPersonalTrainerPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const results = [
    { img: "/resultado-1.png", name: "Joseane A." },
    { img: "/resultado-2.png", name: "Marcela C." },
    { img: "/resultado-3.png", name: "Samuel" },
    { img: "/resultado-4.png", name: "Leberson M." },
    { img: "/resultado-5.png", name: "Paola C." },
    { img: "/resultado-6.png", name: "Ricardo K." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <header className="px-4 lg:px-8 h-20 flex items-center fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-gray-800">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Personal <span className="text-[#1e3a8a]">Tiago Rodolfo</span>
          </span>
          <span className="sr-only">Personal Tiago Rodolfo</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("resultados")}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Resultados
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Serviços
          </button>
        </nav>
        <Button
          onClick={() => scrollToSection("contato")}
          className="ml-8 hidden lg:flex bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 rounded-full shadow-lg shadow-[#1e3a8a]/20"
        >
          Comece Agora <MoveRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          asChild
          variant="outline"
          className="ml-4 hidden lg:flex border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white rounded-full bg-transparent"
        >
          <Link href="/links">Links</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto lg:hidden text-white hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Abrir menu</span>
        </Button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-20 left-0 right-0 bg-gray-900 border-b border-gray-800 p-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-white hover:text-[#1e3a8a] transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-left text-white hover:text-[#1e3a8a] transition-colors py-2"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-white hover:text-[#1e3a8a] transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-white hover:text-[#1e3a8a] transition-colors py-2"
              >
                Contato
              </button>
              <Link
                href="/links"
                className="text-left text-white hover:text-[#1e3a8a] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Links
              </Link>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-background-new.jpg')" }}
          ></div>
          <div className="absolute inset-0 z-[1] bg-black/40"></div>
          <div className="relative z-10 container px-4 md:px-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white drop-shadow-2xl mb-4">
              SEU CORPO, SUAS REGRAS.
              <br />
              <span className="text-[#1e3a8a]">NOSSO PLANO.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-200 md:text-xl mb-8 drop-shadow-lg">
              Chega de treinos genéricos. Alcance a sua melhor versão com um acompanhamento que entende seus limites e
              te leva além.
            </p>
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              className="h-14 px-10 rounded-full bg-[#1e3a8a] text-lg font-bold shadow-lg shadow-[#1e3a8a]/30 hover:scale-105 transition-transform cursor-pointer"
            >
              Quero transformar meu corpo
            </Button>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-[#1e3a8a]/20 px-4 py-1 text-sm font-semibold text-[#1e3a8a] border border-[#1e3a8a]/50">
                QUEM GUIA SEU TREINO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Tiago Rodolfo: Mais que um Personal, um Parceiro de Treino.
              </h2>
              <p className="text-gray-400 text-lg">
                Com uma paixão que vai do levantamento de peso à ciência do movimento, minha missão é desmistificar o
                fitness. Eu acredito em um treinamento inteligente, sustentável e, acima de tudo, personalizado. Não se
                trata apenas de suar, mas de evoluir a cada treino, com técnica, segurança e a motivação certa para você
                não desistir no meio do caminho.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#1e3a8a]" />
                  <span className="font-semibold">Foco em Resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-[#1e3a8a]" />
                  <span className="font-semibold">Segurança e Técnica</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-[#1e3a8a]" />
                  <span className="font-semibold">Motivação Constante</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#1e3a8a]" />
                  <span className="font-semibold">Planos Personalizados</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/thiago-rodolfo.png"
                alt="Foto de Tiago Rodolfo"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Resultados Section */}
        <section id="resultados" className="w-full py-20 md:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-block rounded-full bg-[#1e3a8a]/20 px-4 py-1 text-sm font-semibold text-[#1e3a8a] border border-[#1e3a8a]/50">
              TRANSFORMAÇÕES REAIS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4 mb-12">
              Resultados que falam por si.
            </h2>
            <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[80vw] md:w-[400px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800"
                >
                  <Image
                    src={result.img || "/placeholder.svg"}
                    alt={`Resultado de ${result.name}`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-bold text-white">Evolução de {result.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-4 text-sm">Arraste para ver mais resultados &rarr;</p>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="w-full py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-block rounded-full bg-[#1e3a8a]/20 px-4 py-1 text-sm font-semibold text-[#1e3a8a] border border-[#1e3a8a]/50">
              SEU PLANO DE ATAQUE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4 mb-12">
              Encontre o acompanhamento perfeito para você.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#1e3a8a] hover:scale-105 transition-all duration-300 space-y-4">
                <Zap className="h-10 w-10 text-[#1e3a8a]" />
                <h3 className="text-2xl font-bold text-white">Consultoria Online</h3>
                <p className="text-gray-400">
                  Seu treino na palma da mão. Planilhas personalizadas, suporte via WhatsApp e ajustes conforme sua
                  evolução. Liberdade e resultado.
                </p>
              </div>
              <div className="bg-[#1e3a8a] p-8 rounded-2xl border border-[#1e3a8a] hover:scale-105 transition-all duration-300 space-y-4 shadow-2xl shadow-[#1e3a8a]/30">
                <Dumbbell className="h-10 w-10 text-white" />
                <h3 className="text-2xl font-bold text-white">Treino Presencial</h3>
                <p className="text-gray-200">
                  Acompanhamento individualizado em cada movimento. Maximize sua performance, corrija a postura e tenha
                  a motivação que faltava.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#1e3a8a] hover:scale-105 transition-all duration-300 space-y-4">
                <Users className="h-10 w-10 text-[#1e3a8a]" />
                <h3 className="text-2xl font-bold text-white">Treino em Grupo</h3>
                <p className="text-gray-400">
                  Energia e motivação em dobro. Treine com amigos ou em pequenos grupos com a mesma qualidade de um
                  treino individual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="w-full py-20 md:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              A mudança que você quer <br /> começa com a <span className="text-[#1e3a8a]">decisão</span> que você toma.
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 md:text-lg mt-6 mb-10">
              Não espere a segunda-feira perfeita. Sua avaliação gratuita é o primeiro passo. Vamos conversar?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto w-full">
              <Button
                onClick={() => window.open("https://wa.me/5512988427021", "_blank")}
                size="lg"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-16 px-8 rounded-full text-lg font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>Conversar no WhatsApp</span>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 h-16 px-8 rounded-full text-lg font-bold"
              >
                <Link
                  href="https://www.instagram.com/tiagorodolfopersonal/"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <Instagram className="h-6 w-6" />
                  <span>Seguir no Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Personal Tiago Rodolfo.</p>
            <p className="text-xs text-gray-600">Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <Button
              onClick={() => window.open("https://wa.me/5512988427021", "_blank")}
              variant="outline"
              className="bg-transparent border-2 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6 rounded-full text-lg font-bold"
            >
              WhatsApp
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6 rounded-full text-lg font-bold"
            >
              <Link
                href="https://www.instagram.com/tiagorodolfopersonal/"
                target="_blank"
                className="flex items-center gap-3"
              >
                <Instagram className="h-6 w-6" />
                <span>Instagram</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
