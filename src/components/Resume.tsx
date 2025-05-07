import React, { useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  MapPin,
  Phone,
  Mail,
  Download,
  Github,
  Linkedin,
  Globe,
  Languages,
} from "lucide-react";
import html2pdf from "html2pdf.js";

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [15, 15, 15, 15],
      filename: "curriculo-guilherme-kaynam.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    if (element) {
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.width = "210mm";
      clone.style.padding = "20mm";
      clone.style.backgroundColor = "white";

      document.body.appendChild(clone);

      html2pdf()
        .set(opt)
        .from(clone)
        .save()
        .then(() => {
          document.body.removeChild(clone);
        });
    }
  };

  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <button
            onClick={downloadPDF}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Baixar PDF
          </button>
        </div>

        <div ref={resumeRef} className="space-y-6 bg-white p-8">
          {/* Cabeçalho */}
          <div className="text-center border-b pb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Guilherme Kaynam de Lima Muniz
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Poá, SP
              </span>
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (11) 95232-6058
              </span>
              <span className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                GuilhermeKaynam2006@gmail.com
              </span>
              <a
                href="https://github.com/GuilhermeKaynam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-indigo-600"
              >
                <Github className="h-4 w-4 mr-2" />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-kaynam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-indigo-600"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Globe className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Resumo Profissional
              </h2>
            </div>
            <p className="ml-8 text-gray-600">
              Sou desenvolvedor FullStack formado pelo bootcamp da Generation
              Brasil, com experiência em Java, Spring, React e MySQL, criando
              projetos completos como sistemas de e-commerce e gerenciamento de
              serviços. Meu primeiro contato com programação foi aos 14 anos, e
              desde então, desenvolvo habilidades técnicas e comportamentais
              como proatividade, resolução de problemas e aprendizado rápido.
              Estou em transição para o mercado de trabalho, pronto para aplicar
              habilidades em projetos inovadores e de impacto.
            </p>
          </div>

          {/* Experiência */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Experiências Profissionais
              </h2>
            </div>
            <div className="ml-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Hello Wordpress
                </h3>
                <p className="text-gray-600 mb-2">
                  Desenvolvedor Front End • 03/2019 - 06/2020
                </p>
                <p className="text-gray-600 font-medium">
                  Principais Responsabilidades:
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>
                    Desenvolvi e mantive websites responsivos para pequenos
                    negócios utilizando WordPress e Elementor, melhorando a
                    visibilidade online dos clientes
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Farmácia Drogabay Poá
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-600">
                      Jovem Aprendiz • 07/2023 - 12/2023
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Auxiliar de Escritório • 01/2024 - 05/2024
                    </p>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Principais Responsabilidades:
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>
                      Organizei e digitalizei mais de 1000 documentos,
                      otimizando o tempo de recuperação de informações pela
                      equipe administrativa.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Educação */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Educação</h2>
            </div>
            <div className="ml-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Bootcamp - Desenvolvedor Full Stack
                </h3>
                <p className="text-gray-600">
                  Generation Brasil • Conclusão: 1/2024
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Ensino Médio
                </h3>
                <p className="text-gray-600">
                  E.E Batuira • Conclusão: 12/2023
                </p>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Habilidades Técnicas
              </h2>
            </div>
            <div className="ml-8">
              <p className="text-gray-600">
                HTML, CSS, JavaScript, React, Bootstrap, JAVA, Spring, SQL, Git,
                APIs REST, GPT-4
              </p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Languages className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Idiomas</h2>
            </div>
            <div className="ml-8">
              <ul className="text-gray-600">
                <li>Português - Nativo</li>
                <li>Inglês - Básico</li>
              </ul>
            </div>
          </div>

          {/* Cursos e Certificações */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Award className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Cursos Extracurriculares & Certificações
              </h2>
            </div>
            <div className="ml-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Coletivo Online
                </h3>
                <p className="text-gray-600">
                  Instituto Coca-Cola • Conclusão: 08/2024
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Trilha Digital Coders 24
                </h3>
                <p className="text-gray-600">Ada Tech • Conclusão: 06/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
