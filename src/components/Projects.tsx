import React, { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "InovaMed",
      description:
        "Sistema de gestão hospitalar com foco em eficiência e experiência do usuário",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "CSS", "TypeScript", "Node.js"],
      github: "https://github.com/GuilhermeKaynam/Inovamed-FrontEnd",
      demo: "https://inovamed-front-end.vercel.app/",
    },
    {
      title: "Lava Rápido",
      description:
        "Sistema para agendamento de serviços e vendas de produtos automotivos.",
      image:
        "https://cdn.pixabay.com/photo/2019/01/28/17/00/car-wash-3960877_960_720.jpg",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/GuilhermeKaynam/Lava-Rapido-Java",
      demo: "#",
    },
    {
      title: "Conta Bancaria",
      description:
        "Sistema para gerenciamento de contas bancárias, incluindo cadastro de clientes, movimentações e tipos de conta.",
      image:
        "https://cdn.pixabay.com/photo/2023/03/28/01/10/money-7881948_960_720.jpg",
      technologies: ["Java", "MySQL", "Spring Boot"],
      github: "https://github.com/GuilhermeKaynam/Conta-Bancaria",
      demo: "#",
    },
    {
      title: "FitPlanner",
      description:
        "Sistema para criar e gerenciar planos de treino personalizados",
      image:
        "https://cdn.pixabay.com/photo/2016/01/08/01/53/gymer-1126999_960_720.jpg",
      technologies: ["React", "Node.js", "MySQL", "CSS", "Typescript"],
      github: "https://github.com/GuilhermeKaynam/FrontEnd-FitPlanner",
      demo: "https://fit-planner-dev.vercel.app/",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Projetos
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Conheça alguns dos projetos que desenvolvi
          </p>
        </div>

        <div className="relative max-w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / projects.length)
              }%)`,
              width: `${projects.length * 100}%`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-full"
                style={{ width: `${100 / projects.length}%` }}
              >
                <div className="mx-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full transition-colors duration-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover dark:opacity-80"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          <Github className="h-5 w-5 mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
