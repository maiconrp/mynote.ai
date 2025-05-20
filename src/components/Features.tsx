
import React from "react";
import { Brain, Search, FolderOpen, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-brand-blue" />,
      title: "Sua IA Pessoal que Entende Tudo",
      description:
        "Envie qualquer coisa – de PDFs de estudo a comprovantes de pagamento e links de receitas. A mynote.ia não só guarda, mas tenta entender o contexto para facilitar sua busca depois.",
    },
    {
      icon: <Search className="h-8 w-8 text-brand-blue" />,
      title: "Encontre Tudo com uma Simples Pergunta",
      description:
        "Chega de rolar conversas infinitas ou procurar em pastas. Pergunte à mynote.ia em linguagem natural (ex: 'qual foi o último link de receita que mandei?') e tenha o que precisa na ponta dos dedos.",
    },
    {
      icon: <FolderOpen className="h-8 w-8 text-brand-blue" />,
      title: "Organização Sem Estresse",
      description:
        "A mynote.ia tenta categorizar suas coisas automaticamente. Se preferir, você pode criar suas próprias 'pastas' ou adicionar 'tags' com comandos simples para uma organização ainda mais personalizada.",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-blue" />,
      title: "Seus Dados, Suas Regras",
      description:
        "Levamos sua privacidade a sério. Suas informações são armazenadas de forma segura, com criptografia, e você tem controle total sobre elas. Ninguém mais acessa seus dados.",
    },
  ];

  return (
    <section id="funcionalidades" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Recursos Poderosos para Simplificar sua Vida Digital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A mynote.ia foi projetada para resolver a bagunça de informações no seu WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="bg-blue-50 rounded-xl p-3 h-fit">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Interfaceveramente simples usando o WhatsApp que você já conhece
              </h3>
              <p className="text-gray-600 mb-6">
                Não precisa baixar mais nenhum app ou aprender um novo sistema. A mynote.ia funciona diretamente no WhatsApp, que você já usa todos os dias.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Sem downloads adicionais
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Interação natural por texto
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Compatível com todos os dispositivos
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-64 border-8 border-gray-800 rounded-3xl p-1 bg-gray-800 shadow-lg">
                <div className="bg-[#e5f7f0] rounded-2xl p-3 h-full">
                  <div className="flex justify-end mb-3">
                    <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-xs text-gray-800">
                        Você pode me ajudar a organizar minhas receitas?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start mb-3">
                    <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-xs text-gray-800">
                        Claro, Lucas! Vou criar uma pasta "Receitas" para você. Sempre que enviar uma receita, vou guardá-la lá. Também pode me pedir para criar subcategorias como "Doces" ou "Salgados" se quiser! 😊
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
