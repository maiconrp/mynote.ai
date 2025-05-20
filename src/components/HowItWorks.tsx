
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
        "Nossa IA poderosa entende, cataloga e armazena suas informações automaticamente com categorização inteligente.",
    },
    {
      icon: <Search className="h-8 w-8 text-brand-accent" />,
      title: "PERGUNTE E ENCONTRE",
      description:
        "Precisa de algo? Pergunte naturalmente: \"Note, cadê aquele documento de trabalho?\" e receba exatamente o que precisa.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Organização Mágica em 3 Passos Simples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A mynote.ia transforma como você gerencia informações no WhatsApp, sem esforço e com total inteligência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md transition-all hover:shadow-blue relative overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full opacity-80"></div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto relative z-10 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center relative z-10">{step.description}</p>
              
              {index === 0 && (
                <div className="mt-6 bg-gray-50 p-3 rounded-lg text-sm text-center shadow-sm relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span className="font-medium">Adicionar Contato</span>
                  </div>
                  <span className="font-medium text-brand-blue">mynote.ia</span> <br />
                  <span className="text-gray-500">no WhatsApp</span>
                </div>
              )}
              
              {index === 1 && (
                <div className="mt-6 bg-gray-50 p-3 rounded-lg text-sm shadow-sm text-center relative z-10 border-l-4 border-brand-green">
                  <p className="text-gray-500 font-medium">
                    "Entendido! Seu PDF sobre investimentos foi salvo na categoria <span className="text-brand-green">Finanças</span> para fácil acesso."
                  </p>
                </div>
              )}
              
              {index === 2 && (
                <div className="mt-6 bg-gray-50 p-3 rounded-lg shadow-sm text-center relative z-10 space-y-2">
                  <p className="text-gray-500 text-xs">Você pergunta:</p>
                  <p className="text-brand-blue font-medium text-sm">"Note, cadê aquela receita de bolo que salvei?"</p>
                  <p className="text-gray-500 text-xs">mynote.ia responde:</p>
                  <p className="text-brand-accent font-medium text-sm">"Encontrei! Aqui está a receita de bolo de cenoura que você salvou na terça:"</p>
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
