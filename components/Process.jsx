"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "1",
    icon: "📋",
    title: "Consultoría inicial",
    description: "Escuchamos tus necesidades, objetivos y presupuesto para entender tu proyecto a fondo.",
    gradient: "from-blue-500",
  },
  {
    number: "2",
    icon: "🎨",
    title: "Diseño y prototipado",
    description: "Creamos un diseño inicial estático y visual para que veas exactamente cómo lucirá y funcionará lo que necesitas, antes de programar.",
    gradient: "from-purple-500",
  },
  {
    number: "3",
    icon: "💻",
    title: "Desarrollo ágil",
    description: "Programamos con sprints cortos para entregarte avances frecuentes y transparentes.",
    gradient: "from-pink-500",
  },
  {
    number: "4",
    icon: "🧪",
    title: "Pruebas y QA",
    description: "Realizamos pruebas exhaustivas de funcionalidad, seguridad y rendimiento.",
    gradient: "from-orange-500",
  },
  {
    number: "5",
    icon: "🚀",
    title: "Despliegue",
    description: "Publicamos tu producto en la plataforma que elijas con configuración óptima.",
    gradient: "from-green-brand",
  },
  {
    number: "6",
    icon: "🔧",
    title: "Soporte",
    description: "Brindamos mantenimiento y actualizaciones para que tu producto siempre funcione.",
    gradient: "from-teal-500",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-gray-bg relative">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Cómo trabajamos
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            Nuestro Proceso
          </h2>
          <div className="section-title-underline mt-5" />
          <p className="mt-6 text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Un método claro y transparente para llevar tu proyecto del concepto
            al lanzamiento exitoso.
          </p>
        </AnimatedSection>

        {/* Dense Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white rounded-[2rem] p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative overflow-hidden group hover:-translate-y-2">
                {/* Accent Gradient Line at Top */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.gradient} to-white opacity-40 group-hover:opacity-100 transition-opacity`} />
                
                {/* Header: Number and Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-bg flex items-center justify-center border border-gray-200">
                    <span className="text-3xl drop-shadow-sm">{step.icon}</span>
                  </div>
                  <span className="font-montserrat font-black text-5xl text-gray-100 group-hover:text-gray-200 transition-colors pointer-events-none select-none">
                    0{step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-navy-medium text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-text text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
