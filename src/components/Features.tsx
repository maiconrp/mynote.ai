
import React from "react";
import { Brain, Search, FolderOpen, Shield, FileText, FileImage, FileAudio } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />, // Usando uma cor Tailwind válida
      title: "Sua IA que REALMENTE te entende (ufa!)",
      description:
        "Ninguém merece uma IA que não saca nada, né? A mynote.ia manja de tudo: arquivos, fotos, áudios... Sério, ela entende o recado!",
      pills: ["Compreensão de Contexto", "Análise de Documentos", "Extração de Informações"]
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Ache TUDO só na conversa (tipo zap!)",
      description:
        "Esquece os comandos de ET! Manda um \"cadê meu PDF?\" ou \"link daquela receita daora\" e a mynote.ia resolve. Simples assim!",
      pills: ["Perguntas em Linguagem Natural", "Busca Contextual", "Zero Esforço"]
    },
    {
      icon: <FolderOpen className="h-8 w-8 text-blue-600" />,
      title: "Organização? Deixa com ela (mágica!)",
      description:
        "Jogou um arquivo? A mynote.ia já sabe onde guardar. Trabalho na pasta 'Jobs', rango na 'Larica'. Ou crie suas pastas, você que manda!",
      pills: ["Categorização Automática", "Pastas Personalizadas", "Tags Inteligentes"]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Seus segredos? Blindados e só seus!",
      description:
        "Relaxa, seus arquivos estão mais seguros que Fort Knox. Criptografia top, controle total na sua mão e delete o que quiser, quando quiser. Privacidade é lei!",
      pills: ["Criptografia Avançada", "Controle Total", "Sem Compartilhamento de Dados"]
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Recursos Poderosos que Transformam seu WhatsApp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A mynote.ia foi projetada para resolver o caos de informações e trazer ordem ao seu dia a dia digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-blue transition-all" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={index * 150}>
              <div className="flex gap-6 mb-4">
                <div className="bg-blue-50 rounded-xl p-4 h-fit">
                  {feature.icon}
                </div>
                <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={index * 150}>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.pills.map((pill, i) => (
                  <span key={i} className="bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1 rounded-full">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-slate-50 rounded-2xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Compatível com Todos os Tipos de Arquivo
              </h3>
              <p className="text-gray-600 mb-8">
                A mynote.ia entende e organiza virtualmente qualquer tipo de arquivo que você enviar pelo WhatsApp:
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FileText className="h-6 w-6 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-800">Documentos</p>
                    <p className="text-xs text-gray-500">PDFs, DOCs, TXTs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FileImage className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Imagens</p>
                    <p className="text-xs text-gray-500">JPGs, PNGs, Screenshots</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FileAudio className="h-6 w-6 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-800">Áudios</p>
                    <p className="text-xs text-gray-500">Notas de voz, Gravações</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-500 h-6 w-6 rounded flex items-center justify-center text-white text-xs font-bold">
                    URL
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Links & URLs</p>
                    <p className="text-xs text-gray-500">Websites, Artigos, Videos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-brand-blue p-4 text-white">
                  <h4 className="font-medium">Demonstração: Busca Inteligente</h4>
                </div>
                <div className="p-5 bg-[#e5f7f0] space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        Ei Note, você tem aquele comprovante de pagamento do curso que fiz mês passado?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        Sim, Juliana! Encontrei 2 comprovantes de pagamento do mês passado. Este é do curso de Design UX que você pagou dia 15:
                      </p>
                      <div className="mt-2 p-2 bg-gray-50 rounded-md flex items-center">
                        <div className="bg-red-500 text-white text-xs p-1 rounded">PDF</div>
                        <span className="text-xs ml-2">recibo_curso_ux_design.pdf</span>
                      </div>
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
