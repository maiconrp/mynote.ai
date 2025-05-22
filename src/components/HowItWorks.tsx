import React from "react";
import { Send, Brain, SearchCheck, MessageSquareText, Bot, User } from "lucide-react"; // Adicionando ícones para os balões

// Supondo que suas cores de marca estejam definidas como variáveis CSS ou no Tailwind config
// Ex: text-primary, bg-primary-light, etc.

const HowItWorks = () => {
  const steps = [
    {
      icon: <Send className="h-7 w-7 text-[hsl(var(--primary))]" />,
      title: "Você Envia, Simples Assim",
      description:
        "Adicione a mynote.ia como um contato e envie qualquer tipo de arquivo ou mensagem que quiser guardar. Sem complicação.",
      chatExample: [
        { from: "user", text: "Guarda pra mim: Link do artigo sobre IA generativa que achei hoje!" },
        { from: "user_file", fileName: "artigo_ia_gen.url", fileType: "LINK" }
      ],
    },
    {
      icon: <Brain className="h-7 w-7 text-green-500" />,
      title: "A My Note IA Entra em Ação",
      description:
        "A mynote.ia analisa, entende o contexto e cataloga tudo automaticamente para você, de forma inteligente e organizada.",
      chatExample: [
        { from: "ia", text: 'Entendido, chefia! 😉 Seu link "artigo_ia_gen.url" foi salvo e categorizado como "Tecnologia > IA".' }
      ],
    },
    {
      icon: <SearchCheck className="h-7 w-7 text-orange-500" />,
      title: "Encontre Tudo Rapidinho",
      description:
        "Precisa de algo? É só perguntar em linguagem natural. A mynote.ia busca e traz exatamente o que você precisa, em segundos.",
      chatExample: [
        { from: "user", text: "Note, qual foi o último link sobre IA que te mandei?" },
        { from: "ia_file", fileName: "artigo_ia_gen.url", fileType: "LINK", message: "Claro! Foi este aqui:" }
      ],
    },
  ];

  // Cores dos balões de chat
  const userBubbleColor = "bg-emerald-500 dark:bg-emerald-600 text-white";
  const iaBubbleColor = "bg-slate-200 dark:bg-zinc-700 text-slate-800 dark:text-slate-200";
  const attachmentBgColorUser = "bg-emerald-400/30 dark:bg-emerald-500/40 border-emerald-400/50 dark:border-emerald-500/60";
  const attachmentTagColorUser = "bg-emerald-600 dark:bg-emerald-700 text-white"; // Para tags dentro do balão verde
  const attachmentTextColorUser = "text-emerald-50 dark:text-emerald-100/90";

  const attachmentBgColorIa = "bg-slate-100 dark:bg-zinc-600 border-slate-200 dark:border-zinc-500";
  const attachmentTagColorIa = "bg-slate-500 dark:bg-zinc-500 text-white"; // Para tags dentro do balão cinza
  const attachmentTextColorIa = "text-slate-700 dark:text-slate-300";


  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-gray-100 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Organização Inteligente em <span className="text-[hsl(var(--primary))]">3 Passos</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Veja como é fácil transformar seu WhatsApp em um assistente pessoal com a mynote.ia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10"> {/* Ajustado gap */}
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-slate-50 dark:bg-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Cabeçalho do Passo */}
              <div className="flex items-center mb-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center mr-4
                  ${index === 0 ? 'bg-blue-100 dark:bg-blue-500/20' : index === 1 ? 'bg-green-100 dark:bg-green-500/20' : 'bg-orange-100 dark:bg-orange-500/20'}
                `}>
                  {step.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-base mb-6 flex-grow">{step.description}</p>

              {/* Mockup de Chat Minimalista */}
              {step.chatExample && (
                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-zinc-700 space-y-2.5">
                  {step.chatExample.map((msg, msgIdx) => (
                    <div key={msgIdx} className={`flex ${msg.from === "user" || msg.from === "user_file" ? "justify-end" : "justify-start"}`}>
                      <div className={`p-2.5 rounded-lg shadow-sm max-w-[90%] ${msg.from === "user" || msg.from === "user_file" ? userBubbleColor + " rounded-tr-none" : iaBubbleColor + " rounded-tl-none"}`}>
                        {/* Mensagem de texto normal */}
                        {(msg.from === "user" || msg.from === "ia") && <p className="text-sm break-words">{msg.text}</p>}
                        
                        {/* Anexo do Usuário */}
                        {msg.from === "user_file" && (
                          <div>
                            {msg.text && <p className="text-sm break-words mb-1.5">{msg.text}</p> } {/* Texto opcional antes do anexo */}
                            <div className={`p-1.5 rounded-md flex items-center text-xs ${attachmentBgColorUser}`}>
                              <div className={`font-semibold p-0.5 px-1.5 rounded mr-1.5 text-xs ${attachmentTagColorUser}`}>
                                {msg.fileType}
                              </div>
                              <span className={`break-all ${attachmentTextColorUser}`}>{msg.fileName}</span>
                            </div>
                          </div>
                        )}

                        {/* Anexo da IA */}
                        {msg.from === "ia_file" && (
                           <div>
                            {msg.message && <p className="text-sm break-words mb-1.5">{msg.message}</p> }
                            <div className={`p-1.5 rounded-md flex items-center text-xs ${attachmentBgColorIa}`}>
                              <div className={`font-semibold p-0.5 px-1.5 rounded mr-1.5 text-xs ${attachmentTagColorIa}`}>
                                {msg.fileType}
                              </div>
                              <span className={`break-all ${attachmentTextColorIa}`}>{msg.fileName}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
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