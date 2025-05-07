import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contato
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Vamos trabalhar juntos? Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Informações de contato
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:guilhermekaconsutorias@gmail.com"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  guilhermekaconsutorias@gmail.com
                </a>
                <a
                  href="tel:+5511952326058"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  +55 (11) 95232-6058
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Redes sociais
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/guilhermekaynam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2 flex-shrink-0" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/guilherme-kayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2 flex-shrink-0" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg"
                alt="Contact illustration"
                className="w-full h-[400px] object-cover rounded-lg dark:opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
