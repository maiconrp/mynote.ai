
import React from "react";
import { Brain, Search, FolderOpen, Shield, FileText, FileImage, FileAudio } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-brand-blue" />,
      title: "Inteligência Artificial que Realmente Entende Você",
      description:
        "Nossa IA avançada não apenas armazena, mas compreende o contexto dos seus arquivos. Ela analisa PDFs, reconhece imagens, transcreve áudios e extrai informações importantes para você encontrar tudo facilmente depois.",
      pills: ["Compreensão de Contexto", "Análise de Documentos", "Extração de Informações"]
    },
    {
      icon: <Search className="h-8 w-8 text-brand-blue" />,
      title: "Busca Conversacional em Linguagem Natural",
      description:
        "Chega de comandos complexos ou buscas frustradas. Converse com a mynote.ia como falaria com um amigo: \"Cadê aquele documento de aluguel?\", \"Me mostra o link daquele restaurante italiano\" ou \"Quero ver a foto da reunião de ontem\".",
      pills: ["Perguntas em Linguagem Natural", "Busca Contextual", "Zero Esforço"]
    },
    {
      icon: <FolderOpen className="h-8 w-8 text-brand-blue" />,
      title: "Organização Automática e Inteligente",
      description:
        "A mynote.ia categoriza automaticamente tudo que você envia. PDFs de trabalho vão para a pasta \"Profissional\", receitas para \"Culinária\", documentos para \"Importantes\". Você pode criar suas próprias categorias ou deixar que nossa IA faça isso por você.",
      pills: ["Categorização Automática", "Pastas Personalizadas", "Tags Inteligentes"]
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-blue" />,
      title: "Privacidade e Segurança de Ponta a Ponta",
      description:
        "Seus dados são exclusivamente seus. A mynote.ia utiliza criptografia avançada para proteger todas as suas informações. Você tem controle total sobre o que é armazenado e pode excluir qualquer coisa a qualquer momento.",
      pills: ["Criptografia Avançada", "Controle Total", "Sem Compartilhamento de Dados"]
    },
  ];

  return (
    <section id="funcionalidades" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Recursos Poderosos que Transformam seu WhatsApp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A mynote.ia foi projetada para resolver o caos de informações e trazer ordem ao seu dia a dia digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-blue transition-all">
              <div className="flex gap-6 mb-4">
                <div className="bg-blue-50 rounded-xl p-3 h-fit">
                  {feature.icon}
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
        
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Compatível com Todos os Tipos de Arquivo
              </h3>
              <p className="text-gray-600 mb-6">
                A mynote.ia entende e organiza virtualmente qualquer tipo de arquivo que você enviar pelo WhatsApp:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <FileText className="h-6 w-6 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-800">Documentos</p>
                    <p className="text-xs text-gray-500">PDFs, DOCs, TXTs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <FileImage className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Imagens</p>
                    <p className="text-xs text-gray-500">JPGs, PNGs, Screenshots</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <FileAudio className="h-6 w-6 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-800">Áudios</p>
                    <p className="text-xs text-gray-500">Notas de voz, Gravações</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
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
                <div className="p-4 bg-[#e5f7f0] space-y-4">
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
