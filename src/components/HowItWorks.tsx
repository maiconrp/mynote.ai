
import React from "react";
import { Send, Brain, Search } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Send className="h-8 w-8 text-brand-blue" />,
      title: "ENVIE",
      description:
        "Adicione mynote.ia como um contato e mande qualquer coisa: PDFs, links, áudios, textos, imagens...",
    },
    {
      icon: <Brain className="h-8 w-8 text-brand-green" />,
      title: "mynote.ia ORGANIZA",
      description:
        "Nossa IA entende, cataloga e armazena suas informações de forma segura e inteligente, automaticamente.",
    },
    {
      icon: <Search className="h-8 w-8 text-brand-accent" />,
      title: "PERGUNTE E ENCONTRE",
      description:
        "Precisa de algo? É só perguntar! 'mynote.ia, cadê meu PDF de estudos?' e ela te entrega na hora.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Organização Mágica em 3 Passos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simples assim: envie, deixe a mynote.ia organizar, e encontre quando precisar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md transition-all hover:shadow-blue"
            >
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              
              {index === 0 && (
                <div className="mt-6 bg-gray-50 p-3 rounded-lg text-sm text-center">
                  <span className="text-gray-500">Envie para</span> <br />
                  <span className="font-medium text-brand-blue">mynote.ia</span> <br />
                  <span className="text-gray-500">no WhatsApp</span>
                </div>
              )}
              
              {index === 1 && (
                <div className="mt-6 bg-gray-50 p-3 rounded-lg text-xs text-center text-gray-500">
                  "Entendido! Guardei seu PDF na <br /> pasta <span className="text-brand-green font-medium">estudos</span>"
                </div>
              )}
              
              {index === 2 && (
                <div className="mt-6 bg-gray-50 p-3 rounded-lg text-xs text-center text-gray-500">
                  "Encontrei seu arquivo! <br /> Aqui está o <span className="text-brand-accent font-medium">PDF de química</span>"
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
