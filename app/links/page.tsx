"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Sparkles, Calendar, Flame, UsersRound, Zap, ArrowLeft, Award, BookOpenCheck } from "lucide-react"
import { useEffect, useState } from "react"

export default function LinksPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const links = [
    {
      title: "WHATSAPP",
      category: "Fale Comigo",
      subtitle: "Resposta Imediata",
      description: "Tire suas dúvidas e garanta sua vaga na avaliação gratuita!",
      icon: Send,
      url: "https://wa.me/5512988427021",
      buttonText: "Iniciar Conversa",
      gradient: "from-green-600 via-green-500 to-green-400",
      iconBg: "bg-green-500/20",
      badgeBg: "bg-green-400/30",
      glowColor: "rgba(34, 197, 94, 0.3)",
    },
    {
      title: "INSTAGRAM",
      category: "Siga Agora",
      subtitle: "Conteúdo Exclusivo",
      description: "Dicas diárias, receitas fit e transformações reais dos alunos!",
      icon: Sparkles,
      url: "https://www.instagram.com/tiagorodolfopersonal/",
      buttonText: "Seguir Perfil",
      gradient: "from-purple-600 via-pink-500 to-orange-400",
      iconBg: "bg-pink-500/20",
      badgeBg: "bg-pink-400/30",
      glowColor: "rgba(236, 72, 153, 0.3)",
    },
    {
      title: "PEITORAL INSANO",
      category: "Ebook Exclusivo",
      subtitle: "40 Dias de Treino",
      description: "Método comprovado para hipertrofia acelerada do peitoral!",
      icon: BookOpenCheck,
      url: "https://pay.kiwify.com.br/9hYtv0b",
      buttonText: "Baixar Ebook",
      gradient: "from-red-600 via-red-500 to-orange-400",
      iconBg: "bg-red-500/20",
      badgeBg: "bg-orange-400/30",
      glowColor: "rgba(239, 68, 68, 0.3)",
    },
    {
      title: "ONLINE",
      category: "Consultoria",
      subtitle: "Treino Remoto",
      description: "Planilha personalizada + acompanhamento + suporte 24h!",
      icon: Zap,
      url: "https://wa.me/5512988427021?text=Olá! Quero conhecer a consultoria online",
      buttonText: "Conhecer Planos",
      gradient: "from-blue-700 via-blue-500 to-blue-400",
      iconBg: "bg-blue-500/20",
      badgeBg: "bg-blue-400/30",
      glowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      title: "PRESENCIAL",
      category: "Treino",
      subtitle: "Acompanhamento VIP",
      description: "Atenção individual, técnica perfeita e resultados rápidos!",
      icon: Flame,
      url: "https://wa.me/5512988427021?text=Olá! Quero treinar presencial com você",
      buttonText: "Agendar Treino",
      gradient: "from-orange-600 via-orange-500 to-red-400",
      iconBg: "bg-orange-500/20",
      badgeBg: "bg-orange-400/30",
      glowColor: "rgba(249, 115, 22, 0.3)",
    },
    {
      title: "GRUPO",
      category: "Treino em",
      subtitle: "Energia Coletiva",
      description: "Treine com amigos, economia garantida e motivação máxima!",
      icon: UsersRound,
      url: "https://wa.me/5512988427021?text=Olá! Quero formar um grupo de treino",
      buttonText: "Formar Grupo",
      gradient: "from-purple-600 via-purple-500 to-indigo-400",
      iconBg: "bg-purple-500/20",
      badgeBg: "bg-purple-400/30",
      glowColor: "rgba(168, 85, 247, 0.3)",
    },
    {
      title: "GRATUITA",
      category: "Avaliação",
      subtitle: "100% Sem Custo",
      description: "Descubra seu biotipo e o caminho ideal para seus objetivos!",
      icon: Calendar,
      url: "https://wa.me/5512988427021?text=Olá! Quero agendar minha avaliação gratuita",
      buttonText: "Agendar Grátis",
      gradient: "from-emerald-600 via-emerald-500 to-teal-400",
      iconBg: "bg-emerald-500/20",
      badgeBg: "bg-emerald-400/30",
      glowColor: "rgba(16, 185, 129, 0.3)",
    },
    {
      title: "COMPLETO",
      category: "Site",
      subtitle: "Tudo em Um Lugar",
      description: "Metodologia, resultados e tudo sobre meu trabalho!",
      icon: Award,
      url: "/",
      buttonText: "Visitar Site",
      gradient: "from-gray-700 via-gray-600 to-gray-500",
      iconBg: "bg-gray-500/20",
      badgeBg: "bg-gray-400/30",
      glowColor: "rgba(107, 114, 128, 0.3)",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="px-4 lg:px-8 py-6 border-b border-gray-800 backdrop-blur-xl bg-black/50 sticky top-0 z-50 animate-slide-down">
        <div className="container mx-auto flex items-center justify-between">
          <Button asChild variant="ghost" className="text-gray-400 hover:text-white transition-all hover:scale-110">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <span className="text-xl font-bold text-white">
            Personal <span className="text-[#1e3a8a]">Thiago Rodolfo</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl relative z-10">
        {/* Profile Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative w-32 h-32 mx-auto mb-6 group">
            <div className="absolute inset-0 bg-[#1e3a8a] rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#1e3a8a] shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/thiago-professional.png"
                alt="Thiago Rodolfo"
                width={128}
                height={128}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Personal Thiago Rodolfo</h1>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            🏋️‍♂️ <span className="text-[#1e3a8a] font-semibold">Personal Trainer Especializado</span>
            <br />💪 <span className="text-green-400 font-semibold">+500 Transformações Reais</span>
            <br />📱 <span className="text-purple-400 font-semibold">Consultoria Online & Presencial</span>
          </p>
          <div
            className="flex justify-center gap-2 text-base text-gray-500 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span>@tiagorodolfopersonal</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-24">
          {links.map((link, index) => (
            <Card
              key={index}
              className={`bg-transparent border-0 group hover:scale-[1.02] transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                overflow: "visible",
                animationDelay: `${0.6 + index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-0" style={{ overflow: "visible" }}>
                <div className="relative" style={{ overflow: "visible" }}>
                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{
                      background: link.glowColor,
                      transform: "scale(1.05)",
                    }}
                  ></div>

                  <div
                    className={`bg-gradient-to-r ${link.gradient} rounded-[3rem] relative h-[280px] flex items-center shadow-2xl group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500`}
                    style={{ overflow: "visible" }}
                  >
                    {/* Animated Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 overflow-hidden rounded-[3rem]">
                      <div
                        className="absolute inset-0 animate-pattern-slide"
                        style={{
                          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                          backgroundSize: "40px 40px",
                        }}
                      ></div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>

                    {/* Foto do Thiago */}
                    <div className="absolute left-0 top-0 bottom-0 w-[42%]" style={{ overflow: "visible", zIndex: 10 }}>
                      <div
                        className="relative w-full h-full flex items-end justify-center"
                        style={{ overflow: "visible" }}
                      >
                        <Image
                          src="/thiago-professional.png"
                          alt="Thiago Rodolfo"
                          width={340}
                          height={380}
                          className="absolute left-10 bottom-0 w-[270px] h-[360px] object-cover object-top scale-115 group-hover:scale-[1.2] transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 8px 25px rgba(0,0,0,0.6))",
                            zIndex: 15,
                          }}
                        />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div
                      className="relative flex-1 pl-[46%] pr-8 py-6 flex flex-col justify-center items-start text-left h-full"
                      style={{ zIndex: 5 }}
                    >
                      {/* Ícone Flutuante */}
                      <div className="absolute -top-4 -right-4 animate-bounce-slow" style={{ zIndex: 20 }}>
                        <div className="relative">
                          <div
                            className={`absolute inset-0 ${link.iconBg} blur-2xl rounded-full scale-150 animate-pulse`}
                          ></div>
                          <div
                            className={`relative ${link.iconBg} backdrop-blur-xl rounded-3xl p-4 border-2 border-white/40 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                          >
                            <link.icon className="h-8 w-8 text-white stroke-[2.5]" />
                          </div>
                        </div>
                      </div>

                      {/* Category Tag */}
                      <div className="mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <span className="inline-block text-[9px] font-black uppercase tracking-[0.25em] text-white/60 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.3)] group-hover:border-white/40 transition-colors">
                          {link.category}
                        </span>
                      </div>

                      {/* Título Principal */}
                      <h2
                        className="text-4xl md:text-5xl font-black leading-[0.85] tracking-tight mb-3 relative animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <span className="text-white drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%),_0_0_40px_rgba(255,255,255,0.1)] group-hover:[text-shadow:_0_4px_12px_rgb(0_0_0_/_80%),_0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300">
                          {link.title}
                        </span>
                      </h2>

                      {/* Divider Line */}
                      <div
                        className="w-16 h-1 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-full mb-2 group-hover:w-24 transition-all duration-500 animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                      ></div>

                      {/* Subtítulo com Badge */}
                      <div className="mb-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 ${link.badgeBg} backdrop-blur-md rounded-2xl border border-white/30 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                          <span className="text-sm font-bold text-white tracking-wide drop-shadow-lg">
                            {link.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Descrição */}
                      <p
                        className="text-white/95 text-sm font-medium leading-snug mb-4 max-w-[280px] drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)] animate-fade-in-up"
                        style={{ animationDelay: "0.5s" }}
                      >
                        {link.description}
                      </p>

                      {/* CTA Button */}
                      <Link
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : "_self"}
                        className="group/btn animate-fade-in-up"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <div className="relative inline-flex items-center gap-2">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-white/30 blur-xl rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                          {/* Button */}
                          <div className="relative flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 font-black text-sm px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                            <span className="tracking-wide">{link.buttonText}</span>
                            <svg
                              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-40 pt-12 border-t border-gray-800 animate-fade-in">
          <p className="text-lg text-gray-500 mb-4">
            🔥 <span className="text-[#1e3a8a] font-semibold">Transforme seu corpo</span> com acompanhamento
            profissional
          </p>
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Personal Thiago Rodolfo</p>
        </div>
      </main>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pattern-slide {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pattern-slide {
          animation: pattern-slide 20s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
