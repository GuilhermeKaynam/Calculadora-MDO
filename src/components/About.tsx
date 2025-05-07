import React from "react";
import { Code2, Database, Server } from "lucide-react";

export function About() {
  const skills = [
    {
      name: "Frontend",
      icon: Code2,
      technologies: ["React", "TypeScript", "HTML/CSS"],
    },
    {
      name: "Backend",
      icon: Server,
      technologies: ["Java", "Spring Boot", "Node.js"],
    },
    {
      name: "Database",
      icon: Database,
      technologies: ["MySQL", "PostgreSQL", "MongoDB"],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sobre Mim
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Desenvolvedor apaixonado por criar soluções inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="reveal delay-200">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Minha História
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Sou Guilherme Kaynam, desenvolvedor FullStack apaixonado por
              tecnologia e inovação. Meu primeiro contato com a programação
              aconteceu aos 14 anos, e desde então, mergulhei de cabeça nesse
              universo. Com uma formação sólida pelo bootcamp da Generation
              Brasil, adquiri habilidades em linguagens e frameworks como Java,
              Spring, React e MySQL, além de desenvolver um olhar crítico e
              criativo para a solução de problemas. Para mim, a programação é
              mais do que uma profissão; é uma forma de transformar ideias em
              realidade e impactar positivamente o mundo ao meu redor.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ao longo da minha jornada, tive a oportunidade de trabalhar em
              projetos desafiadores, como um sistema de gestão para lava rápido
              e um e-commerce completo. Atualmente, estou criando o InovaMed, um
              sistema inovador para consultórios médicos, que reúne
              funcionalidades como agendamento de consultas, gerenciamento de
              pacientes e dashboards administrativos. Sempre buscando
              aprendizado contínuo, encaro cada novo desafio como uma chance de
              crescer e contribuir com soluções que fazem a diferença.
            </p>
          </div>
          <div className="flex justify-center md:justify-start reveal delay-400">
            <img
              src="./Minha-foto.jpeg"
              alt="Workspace"
              className="rounded-lg shadow-lg w-full max-w-md h-auto dark:opacity-80"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 bg-gray-50 dark:bg-gray-700 rounded-lg reveal delay-${
                index * 200
              }`}
            >
              <skill.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h4>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-gray-600 dark:text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
