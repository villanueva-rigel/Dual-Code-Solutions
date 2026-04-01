"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const screenshots = [
  { src: "/portfolio/sublegados-1.png", alt: "SubLegados Tours - Landing Turistas" },
  { src: "/portfolio/sublegados-2.png", alt: "SubLegados Tours - Landing Guías" },
  { src: "/portfolio/sublegados-3.png", alt: "SubLegados Tours - Inicio de Sesión" },
  { src: "/portfolio/sublegados-4.png", alt: "SubLegados Tours - Dashboard de Guía" },
  { src: "/portfolio/sublegados-5.png", alt: "SubLegados Tours - Reseñas" },
];

const techChips = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Flutter",
  "Chart.js",
  "Mercado Pago",
];

export default function Portfolio() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section id="portafolio" className="py-24 lg:py-32 bg-gray-bg relative">
      {/* Background decor */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] bg-green-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-24">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Casos de Éxito
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            Nuestro Portafolio
          </h2>
          <div className="section-title-underline mt-5" />
          <p className="mt-6 text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Proyectos reales construidos con código limpio, arquitectura escalable y
            enfoque en la experiencia del usuario.
          </p>
        </AnimatedSection>

        {/* Featured Project - SubLegados Tours */}
        <AnimatedSection>
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(13,27,62,0.06)] overflow-hidden mb-16 border border-white/50 relative">
            {/* Soft decorative glow behind project */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-navy-light/5 rounded-full blur-[100px]" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
              {/* Left - Image Gallery (Dark mode styling) */}
              <div className="relative bg-[#0b1429] p-7 lg:p-10 border-r border-[#1a2b53]">
                {/* Status Bar / Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4 bg-[#1a2b53] rounded-2xl p-2.5 pr-4 shadow-inner">
                    <Image
                      src="/portfolio/sublegados-logo.png"
                      alt="SubLegados Logo"
                      width={48}
                      height={48}
                      className="rounded-[10px] bg-white p-1"
                    />
                    <div className="flex flex-col">
                      <span className="text-green-brand/90 font-montserrat font-bold text-[11px] uppercase tracking-wider">
                        Proyecto Destacado
                      </span>
                      <span className="text-white/80 font-inter text-sm">
                        Sistema Web + App
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Screenshot (Mac window styling) */}
                <div className="w-full bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl mb-6 relative">
                  {/* Mac Window Dots */}
                  <div className="bg-[#111827] h-8 flex items-center px-4 gap-2 border-b border-[#374151]">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                    <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  </div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full group cursor-pointer">
                    <Image
                      src={screenshots[activeImg].src}
                      alt={screenshots[activeImg].alt}
                      fill
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-3 overflow-x-auto pb-4 portfolio-carousel scrollbar-hide snap-x">
                  {screenshots.map((ss, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`shrink-0 snap-center w-[100px] h-[64px] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeImg === i
                          ? "border-green-brand shadow-[0_0_15px_rgba(60,181,74,0.3)] scale-105"
                          : "border-transparent opacity-50 hover:opacity-100 bg-[#1e293b]"
                      }`}
                    >
                      <Image
                        src={ss.src}
                        alt="Thumbnail"
                        width={100}
                        height={64}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Project Info */}
              <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center relative bg-white">
                <span className="inline-flex items-center gap-2 bg-blue-soft/60 text-navy-medium font-montserrat font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full w-fit mb-6 border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                  Proyecto — UTM 5° Cuatrimestre
                </span>

                <h3 className="font-montserrat font-bold text-3xl sm:text-4xl text-navy mb-6 tracking-tight">
                  SubLegados Tours
                </h3>

                <p className="text-gray-text text-[16px] leading-[1.8] mb-8">
                  Plataforma digital integral diseñada para formalizar el turismo comunitario
                  en el Anillo de Cenotes de Yucatán. Conectamos turistas con guías con experiencia locales,
                  integrando logística nativa de transporte en mototaxi.
                  <br /><br />
                  <span className="font-medium text-navy/80">
                    Características clave:
                  </span> Sistema de reservas, procesador de pagos
                  Mercado Pago, dashboards analíticos y sistema de reseñas.
                </p>

                {/* Tech Stack */}
                <div className="mb-10">
                  <span className="font-montserrat font-bold text-xs text-navy/50 uppercase tracking-widest block mb-4">
                    Stack Tecnológico
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {techChips.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white border border-gray-200 text-navy-medium font-inter font-medium text-sm px-4 py-2 rounded-xl shadow-sm hover:border-green-brand/50 hover:bg-green-brand/5 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Component */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href="https://gregarious-otter-3db01b.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-[15px] px-8 py-4.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(60,181,74,0.35)] text-center flex items-center justify-center gap-3"
                  >
                    Ver Demo Vivo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/villanueva-rigel/SubLegados-Tours.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white font-montserrat font-bold text-[15px] px-8 py-4.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Repositorio
                  </a>
                </div>

                {/* Info about backend delay */}
                <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex items-start gap-3">
                  <span className="text-amber-600 mt-0.5 animate-pulse text-lg">⚠️</span>
                  <p className="text-navy-medium text-[13px] leading-relaxed font-medium">
                    Nota: El backend de esta demo está alojado en una capa gratuita. La primera petición puede tardar unos segundos en despertar el servidor; posteriormente, continuará trabajando con velocidad normal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Callouts Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Coming Soon Card */}
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-sm border border-dashed border-navy/20 h-full flex flex-col items-center justify-center text-center group hover:bg-gray-bg/50 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-soft rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-navy-medium stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-navy mb-3">
                Próximos Proyectos
              </h3>
              <p className="text-gray-text text-[15px] leading-relaxed max-w-sm">
                Estamos cocinando nuevas soluciones innovadoras que muy pronto
                estarán desplegadas y disponibles aquí.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Card */}
          <AnimatedSection delay={300}>
            <div className="bg-gradient-to-br from-navy to-[#0F2356] rounded-3xl p-10 lg:p-12 shadow-[0_20px_40px_rgba(13,27,62,0.2)] h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}/>
              {/* Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-brand/20 rounded-full blur-[50px] group-hover:bg-green-brand/30 transition-colors duration-500" />

              <div className="relative z-10 w-full">
                <div className="w-20 h-20 bg-green-brand/15 rounded-[1.25rem] flex items-center justify-center mb-6 mx-auto border border-green-brand/20 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-4 tracking-tight drop-shadow-md">
                  ¿Tienes una idea?
                </h3>
                <p className="text-white/80 text-[16px] leading-relaxed mb-8 max-w-sm mx-auto">
                  Sé el primero en trabajar con nuestro equipo. Transformamos
                  esbozos en aplicaciones reales.
                </p>
                <a
                  href="#contacto"
                  className="bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-[15px] px-8 py-4.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(60,181,74,0.4)] inline-flex items-center gap-2.5 w-full sm:w-auto"
                >
                  Iniciar Proyecto
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
