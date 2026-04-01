"use client";

import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Lenguajes",
    techs: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
      { name: "Dart", icon: "devicon-dart-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
    ],
  },
  {
    name: "Frontend & Móvil",
    techs: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Angular", icon: "devicon-angularjs-plain" },
      { name: "Flutter", icon: "devicon-flutter-plain" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: ".NET", icon: "devicon-dotnetcore-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
    ],
  },
  {
    name: "Bases de Datos & BaaS",
    techs: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Supabase", icon: "devicon-supabase-plain" },
      { name: "Firebase", icon: "devicon-firebase-plain" },
    ],
  },
  {
    name: "Herramientas",
    techs: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Android Studio", icon: "devicon-androidstudio-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 lg:py-32 bg-white relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-brand/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Nuestro Stack
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            Tecnologías que Dominamos
          </h2>
          <div className="section-title-underline mt-5" />
          <p className="mt-6 text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Trabajamos con las herramientas más modernas y probadas de la
            industria adaptando el ecosistema según tu proyecto.
          </p>
        </AnimatedSection>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <AnimatedSection key={catIndex} delay={catIndex * 100}>
              <div className="bg-gray-bg/50 rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Category Title */}
                <h3 className="font-montserrat font-bold text-navy-medium text-xl lg:text-2xl mb-8 flex items-center gap-4">
                  <span className="w-10 h-1 bg-gradient-to-r from-green-brand to-green-brand/40 rounded-full" />
                  {category.name}
                </h3>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 lg:gap-6">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="tech-icon group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-default hover:border-green-brand/30 hover:bg-blue-soft/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-1">
                        <i
                          className={`${tech.icon} text-[48px] drop-shadow-sm group-hover:scale-110 transition-transform duration-300`}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-montserrat text-sm text-navy font-semibold text-center mt-auto">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
