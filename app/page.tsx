"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Estender o Tailwind com uma classe personalizada para dispositivos muito pequenos
const tailwindConfig = {
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")

  const [ctaNome, setCtaNome] = useState("")
  const [ctaEmail, setCtaEmail] = useState("")
  const [ctaWhatsapp, setCtaWhatsapp] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()

    // Formata a mensagem
    const mensagem = `Olá! Meu nome é ${nome} e gostaria de garantir minha vaga na aula fechada.`

    // Cria a URL do WhatsApp com o novo número
    const whatsappUrl = `https://wa.me/556182919404?text=${encodeURIComponent(mensagem)}`

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  const handleCtaWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()

    // Formata a mensagem incluindo nome, email e whatsapp
    const mensagem = `Olá! Meu nome é ${ctaNome}, meu email é ${ctaEmail} e gostaria de garantir minha vaga na aula exclusiva.`

    // Cria a URL do WhatsApp com o novo número
    const whatsappUrl = `https://wa.me/556182919404?text=${encodeURIComponent(mensagem)}`

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Background texture elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,220,220,1)_0%,rgba(200,200,200,1)_70%)] z-[-2]"></div>

      {/* Texture overlay */}
      <div className="fixed inset-0 bg-[url('/white-texture.png')] opacity-[0.05] mix-blend-overlay z-[-1]"></div>

      {/* Hero Section */}
      <section className="bg-transparent py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Improved background effect - gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 opacity-80 z-[-1]"></div>

        <div className="mx-auto flex flex-col items-center relative z-10">
          {/* Título principal da página */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-w-3xl leading-tight">
                O passo a passo para você faturar mais de{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#b88e23]">R$ 10.000</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#b88e23]/20 -z-10"></span>
                </span>{" "}
                Reais todos os meses!
              </h1>
            </div>
          </div>

          {/* Conteúdo principal - foto e formulário lado a lado */}
          <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
            {/* Foto */}
            <div className="w-full md:w-1/2 max-w-md">
              {mounted && (
                <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/corpo-de-texto-1.svg"
                    alt="Sheyla Isabella - Profissional"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Formulário */}
            <div className="w-full md:w-1/2 max-w-md">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                  Você com <span className="font-bold text-[#b88e23]">dinheiro no Bolso</span>, várias Clientes Todos os
                  Dias, e sua <span className="font-bold text-[#b88e23]">Agenda Lotada</span> com Extensões de Cílios!
                </h2>
              </div>

              <form
                onSubmit={handleWhatsAppRedirect}
                className="bg-white p-5 sm:p-6 rounded-lg shadow-xl border-2 border-[#b88e23] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-[#b88e23] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                  INSCRIÇÕES ABERTAS
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="text-sm font-medium text-gray-700 mb-1 block">
                      Seu nome completo
                    </label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      className="border-[#b88e23] focus:ring-[#b88e23] bg-gray-100 text-gray-800 text-base sm:text-lg py-4 sm:py-6"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700 mb-1 block">
                      Seu WhatsApp
                    </label>
                    <div className="relative">
                      <Input
                        id="whatsapp"
                        placeholder="Digite seu WhatsApp"
                        className="border-[#b88e23] focus:ring-[#b88e23] bg-gray-100 text-gray-800 text-base sm:text-lg py-4 sm:py-6 pl-10"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#b88e23"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-5 bg-[#b88e23] hover:bg-[#9c7415] text-white font-bold py-4 sm:py-5 px-4 sm:px-8 text-base sm:text-lg uppercase tracking-wide rounded-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>QUERO GARANTIR MINHA VAGA</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#b88e23]"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span className="text-xs text-gray-500">Seus dados estão 100% seguros e protegidos</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alunas Testimonials Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
        <div className="absolute left-0 top-0 w-64 h-64 bg-[#b88e23]/10 rounded-full -ml-32 -mt-32 blur-xl"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#b88e23]/10 rounded-full -mr-32 -mb-32 blur-xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título da seção de depoimentos */}
          <div className="text-center mb-10">
            <div className="inline-block mb-3">
              <span className="text-xs font-semibold tracking-wider text-[#b88e23] uppercase bg-[#b88e23]/10 px-3 py-1 rounded-full">
                Resultados reais
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              <span className="relative inline-block">
                <span className="relative z-10">Alunas que estão faturando</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#b88e23]/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Conheça algumas das nossas alunas que transformaram suas vidas através do nosso método exclusivo
            </p>
          </div>

          {/* Featured Testimonials - Versão compacta e responsiva com correção de enquadramento */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {/* Card 1 - Ingrid Torres */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl focus-within:shadow-xl hover:border-[#b88e23] focus-within:border-[#b88e23] hover:border-2 focus-within:border-2 hover:z-30 focus-within:z-30">
              <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src="/images/aluna1.jpg"
                  alt="Aluna de Sucesso - Ingrid Torres"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 w-full">
                  <h3 className="text-white font-bold text-sm sm:text-base">Ingrid Torres</h3>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Sheila, não tenho palavras para expressar o quanto sou grata por tudo o que vivi ontem. O curso foi
                  simplesmente surreal! Cada palavra que você disse era exatamente o que eu precisava ouvir. A sua
                  técnica é impecável, e a forma como você compartilha seu conhecimento é surreal."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-gray-500 text-xs sm:text-sm">Aluna do curso</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl focus-within:shadow-xl hover:border-[#b88e23] focus-within:border-[#b88e23] hover:border-2 focus-within:border-2 hover:z-30 focus-within:z-30">
              <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src="/images/aluna3.jpg"
                  alt="Aluna de Sucesso - Luana Belchior"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 w-full">
                  <h3 className="text-white font-bold text-sm sm:text-base">Luana Belchior</h3>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Gostaria de expressar minha profunda gratidão pelo excelente curso que você ofereceu. Sua paixão e
                  conhecimento tornaram cada momento uma experiência incrível e inspiradora. Aprendi tanto sobre
                  técnicas, cuidados, postura e a importância de acreditar em mim."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-gray-500 text-xs sm:text-sm">Aluna do curso</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl focus-within:shadow-xl hover:border-[#b88e23] focus-within:border-[#b88e23] hover:border-2 focus-within:border-2 hover:z-30 focus-within:z-30">
              <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src="/images/aluna4.jpg"
                  alt="Aluna de Sucesso - Natália Souza"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 w-full">
                  <h3 className="text-white font-bold text-sm sm:text-base">Natália Souza</h3>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Oie Sheyla, passando pra te dizer o quanto ter sua consultoria transformou o meu negócio, estava me
                  sentindo estagnada e paralisada e depois de seguir seus ensinamentos consegui crescer de uma forma que
                  nunca imaginei!"
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-gray-500 text-xs sm:text-sm">Aluna do curso</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl focus-within:shadow-xl hover:border-[#b88e23] focus-within:border-[#b88e23] hover:border-2 focus-within:border-2 hover:z-30 focus-within:z-30">
              <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src="/images/aluna2.jpg"
                  alt="Aluna de Sucesso - Jessica"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 w-full">
                  <h3 className="text-white font-bold text-sm sm:text-base">Jessica</h3>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Sheyla, você sabe da admiração e carinho que tenho por você. Mas agora eu quero deixar meu
                  agradecimento pelo curso, realmente um curso completo antes mesmo de surge qualquer dúvida, você
                  conseguiu zerar elas, tenho certeza absoluta que escolhi o melhor curso."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-gray-500 text-xs sm:text-sm">Aluna do curso</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#b88e23] to-[#d4aa3c] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button
                onClick={() => document.getElementById("inscricao-form")?.scrollIntoView({ behavior: "smooth" })}
                className="relative bg-[#b88e23] hover:bg-[#9c7415] text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all"
              >
                <span className="flex items-center gap-2">
                  <span>Quero faturar 10.000 Reais</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-100 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#b88e23]/20 rounded-full -mr-32 -mb-32"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título da seção de módulos */}
          <div className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              <span className="relative inline-block">
                <span className="relative z-10">Seu caminho para o sucesso</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#b88e23]/20 -z-10"></span>
              </span>
            </h2>
            <p className="mb-8 text-base sm:text-lg md:text-xl font-medium">
              Este passo a passo mostra de forma detalhada o que você precisa fazer para faturar R$ 10.000 por mês.
            </p>
            <div className="w-full h-1 bg-[#b88e23]/30 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
            {[
              {
                titulo: "Construindo uma Base Sólida",
                descricao: "Aprenda os fundamentos essenciais para estabelecer um negócio sólido e lucrativo.",
                icone: (
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
                    className="text-white"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                ),
              },
              {
                titulo: "Posicionamento e Autoridade no Digital",
                descricao: "Desenvolva sua presença online e estabeleça-se como autoridade no seu nicho.",
                icone: (
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
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                ),
              },
              {
                titulo: "Estratégias para Atrair e Converter Clientes",
                descricao: "Técnicas comprovadas para atrair clientes ideais e convertê-los em vendas.",
                icone: (
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
                    className="text-white"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>
                ),
              },
              {
                titulo: "Multiplicando seu Faturamento e Construindo Escala",
                descricao: "Estratégias para escalar seu negócio e multiplicar seus resultados financeiros.",
                icone: (
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
                    className="text-white"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                ),
              },
            ].map((modulo, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] border border-[#b88e23]/10 hover:border-[#b88e23]"
              >
                <div className="relative overflow-hidden">
                  <div className="bg-gradient-to-r from-[#b88e23] to-[#d4aa3c] p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      {modulo.icone}
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-white/80">
                        Módulo {index + 1}
                      </div>
                      <h3 className="font-bold text-white text-lg leading-tight">{modulo.titulo}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm">{modulo.descricao}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#b88e23] transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-100 relative">
        <div className="absolute left-0 top-0 w-48 h-48 bg-[#b88e23]/10 rounded-full -ml-24 -mt-24"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12"></div>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white border border-[#b88e23]/30 rounded-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
              <div className="w-full md:w-1/3 relative aspect-[3/4] max-w-[250px] sm:max-w-[300px]">
                <img
                  src="/images/sheyla-award.jpeg"
                  alt="Sheyla Isabella - Mentora com Prêmio"
                  className="w-full h-full object-cover rounded-lg border-2 border-[#b88e23]"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#b88e23] mb-2 sm:mb-3">Sheyla Isabella</h3>
                <p className="text-sm sm:text-base">Sheyla Isabella</p>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Sou Sheyla Isabella, criadora da Profissional Magnética, uma mentoria onde te mostro, passo a passo,
                  como ter sua agenda cheia todos os dias!
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Depois de conquistar diversos prêmios, manter uma carteira de clientes sempre lotada e ajudar outras
                  mulheres a alcançarem sua independência financeira, quero agora ensinar você a se libertar do medo, se
                  posicionar como uma verdadeira empresária e construir um negócio sólido — com meu acompanhamento de
                  perto, segurando sua mão em cada etapa.
                </p>
                <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 italic">
                  Se você sente que nasceu para conquistar seus sonhos e viver a vida que sempre desejou, essa mentoria
                  é pra você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#b88e23] mb-4">
            Chegou a hora de mudar de vida e ter sua agenda cheia de clientes!
          </h2>
          {/* Parágrafo removido */}

          {/* Formulário de inscrição */}
          <form
            id="inscricao-form"
            onSubmit={handleCtaWhatsAppRedirect}
            className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl border border-[#b88e23] relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#b88e23] text-white text-xs font-bold py-1 px-4 rounded-full whitespace-nowrap">
              Faça parte agora mesmo
            </div>

            <h3 className="font-bold text-xl sm:text-2xl mb-5 sm:mb-6 text-[#b88e23] text-center">
              Inscreva-se na aula exclusiva
            </h3>

            <div className="space-y-4 mb-5 sm:mb-6">
              <div>
                <label htmlFor="ctaNome" className="text-sm font-medium text-gray-700 mb-1 block">
                  Seu nome completo
                </label>
                <Input
                  id="ctaNome"
                  placeholder="Digite seu nome completo"
                  className="border-[#b88e23] focus:ring-[#b88e23] bg-gray-100 text-gray-800 py-3 sm:py-4"
                  value={ctaNome}
                  onChange={(e) => setCtaNome(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="ctaEmail" className="text-sm font-medium text-gray-700 mb-1 block">
                  Seu melhor e-mail
                </label>
                <Input
                  id="ctaEmail"
                  placeholder="Digite seu melhor e-mail"
                  className="border-[#b88e23] focus:ring-[#b88e23] bg-gray-100 text-gray-800 py-3 sm:py-4"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  required
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="ctaWhatsapp" className="text-sm font-medium text-gray-700 mb-1 block">
                  Seu WhatsApp
                </label>
                <div className="relative">
                  <Input
                    id="ctaWhatsapp"
                    placeholder="Digite seu WhatsApp"
                    className="border-[#b88e23] focus:ring-[#b88e23] bg-gray-100 text-gray-800 py-3 sm:py-4 pl-10"
                    value={ctaWhatsapp}
                    onChange={(e) => setCtaWhatsapp(e.target.value)}
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#b88e23"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b88e23] to-[#d4aa3c] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button
                type="submit"
                className="relative w-full bg-[#b88e23] hover:bg-[#9c7415] text-white py-3 xs:py-4 sm:py-5 px-2 xs:px-4 font-bold uppercase tracking-wide rounded-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-1 xs:gap-2"
              >
                <span className="text-xs xs:text-sm sm:text-base whitespace-normal">
                  QUERO GARANTIR MINHA VAGA AGORA
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#b88e23]"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="text-xs sm:text-sm text-gray-500">Seus dados estão 100% seguros e protegidos</span>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-200 to-gray-300 py-10 px-6 border-t border-[#b88e23]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Sheyla Isabella</h3>
              <p className="text-gray-600 text-sm">
                Especialista em extensão de cílios e mentora de profissionais que desejam transformar suas carreiras.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Redes Sociais</h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/sheylaisabellacilios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#b88e23] transition-colors"
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Contato</h3>
              <p className="text-gray-600 text-sm mb-2">Entre em contato para mais informações</p>
              <a href="mailto:sheylaisabellaconect@gmail.com" className="text-[#b88e23] hover:underline">
                sheylaisabellaconect@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-gray-500 text-sm">
              Copyright © {new Date().getFullYear()} - Todos os direitos reservados
            </p>
            <p className="text-gray-500 text-xs mt-2">Sheyla Isabella | Profissional Magnética</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
