"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const values = [
  { icon: "🚀", label: "Innovación constante" },
  { icon: "🤝", label: "Trabajo colaborativo" },
  { icon: "📐", label: "Calidad del código" },
  { icon: "🎯", label: "Orientación al cliente" },
  { icon: "📚", label: "Aprendizaje continuo" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-gray-bg relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Sobre nosotros
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            ¿Quiénes somos?
          </h2>
          <div className="section-title-underline mt-5" />
        </AnimatedSection>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Text */}
          <AnimatedSection direction="left">
            <p className="text-gray-text text-lg leading-relaxed mb-10">
              Somos un equipo joven de desarrolladores de software
              multiplataforma, formados en el área de TI. Combinamos el estudio
              con la pasión por crear productos digitales de calidad que
              resuelven problemas reales.
            </p>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-7 shadow-sm mb-6 border-l-4 border-green-brand hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-green-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-navy text-xl mb-2">
                    Nuestra Misión
                  </h3>
                  <p className="text-gray-text text-[15px] leading-relaxed">
                    Brindar soluciones de software accesibles, escalables y de
                    alta calidad a empresas y emprendedores, aplicando las
                    mejores prácticas del desarrollo moderno.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-navy-medium hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-navy-medium/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-navy-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-navy text-xl mb-2">
                    Nuestra Visión
                  </h3>
                  <p className="text-gray-text text-[15px] leading-relaxed">
                    Ser una empresa de referencia en desarrollo multiplataforma
                    en México, reconocida por transformar ideas en productos
                    digitales que generan impacto real.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Image */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-green-brand/20 to-navy-medium/20 rounded-3xl blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/50">
                <Image
                  src="/foto-equipo-original.jpeg"
                  alt="Equipo Dual Code Solutions"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <p className="text-white font-montserrat font-bold text-xl mb-1">
                      Nuestro Equipo
                    </p>
                    <p className="text-white/80 text-sm font-inter">
                      Estudiantes de Desarrollo de Software Multiplataforma •
                      5° Cuatrimestre
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <p className="font-montserrat font-semibold text-navy text-sm">
                  {value.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
