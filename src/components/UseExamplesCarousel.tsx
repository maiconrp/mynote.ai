
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { FileText, FileImage, FileAudio, Search } from "lucide-react";

const UseExamplesCarousel = () => {
  const examples = [
    {
      title: "Armazenamento Inteligente de PDFs",
      icon: <FileText className="h-8 w-8 text-red-500" />,
      conversation: [
        {
          user: true,
          text: "Note, preciso guardar esse artigo científico pra minha pesquisa de mestrado",
          attachment: {
            type: "PDF",
            name: "artigo_neurociencia.pdf"
          }
        },
        {
          user: false,
          text: "Guardado, Camila! 👍 Adicionei à sua pasta de pesquisa acadêmica. Quer que eu extraia os pontos principais?",
        },
        {
          user: true,
          text: "Sim, por favor! E me lembre dele na segunda-feira",
        },
        {
          user: false,
          text: "Claro! Principais pontos: estudo sobre neuroplasticidade em adultos, metodologia inovadora, resultados promissores para tratamentos cognitivos. Configurei um lembrete para segunda-feira às 9h.",
        }
      ]
    },
    {
      title: "Organização de Receitas Culinárias",
      icon: <FileImage className="h-8 w-8 text-green-500" />,
      conversation: [
        {
          user: true,
          text: "Oi Note, guarda essa receita de risoto que achei incrível",
          attachment: {
            type: "IMAGEM",
            name: "receita_risoto.jpg"
          }
        },
        {
          user: false,
          text: "Receita salva, Marcos! 🍲 Adicionei à sua coleção de receitas italianas. Já tem 8 receitas nessa categoria!",
        },
        {
          user: true,
          text: "Qual era aquela receita de massa que guardei mês passado?",
        },
        {
          user: false,
          text: "Encontrei 3 receitas de massa do mês passado. A mais recente é esta lasanha vegetariana:",
          attachment: {
            type: "IMAGEM",
            name: "lasanha_vegetariana.jpg"
          }
        }
      ]
    },
    {
      title: "Gestão de Contatos Profissionais",
      icon: <Search className="h-8 w-8 text-blue-500" />,
      conversation: [
        {
          user: true,
          text: "Note, guarda o contato dessa cliente que acabei de conhecer no evento",
          attachment: {
            type: "CONTATO",
            name: "Ana Ferreira - Marketing"
          }
        },
        {
          user: false,
          text: "Contato da Ana Ferreira salvo na categoria 'Clientes Potenciais'! Quer adicionar alguma nota sobre ela?",
        },
        {
          user: true,
          text: "Sim, anota que ela tem interesse nos serviços de consultoria digital e que devo enviar proposta até sexta",
        },
        {
          user: false,
          text: "Anotado! 📝 Também adicionei um lembrete para você enviar a proposta até sexta-feira. Deseja que eu prepare um modelo?",
        }
      ]
    },
    {
      title: "Catalogação de Áudios de Aula",
      icon: <FileAudio className="h-8 w-8 text-purple-500" />,
      conversation: [
        {
          user: true,
          text: "Note, esse é o áudio da aula de hoje sobre psicologia do desenvolvimento",
          attachment: {
            type: "ÁUDIO",
            name: "aula_psicologia_25min.mp3"
          }
        },
        {
          user: false,
          text: "Áudio recebido e catalogado em 'Estudos > Psicologia'! Com base no conteúdo, identifiquei que aborda teorias de Piaget e Vygotsky. Quer que eu faça um resumo dos principais pontos?",
        },
        {
          user: true,
          text: "Sim, faz um resumo curto pra mim",
        },
        {
          user: false,
          text: "📚 Resumo: A aula compara as teorias de Piaget (desenvolvimento por estágios) e Vygotsky (ênfase no contexto social). Pontos importantes: ZDP (Zona de Desenvolvimento Proximal), papel da mediação na aprendizagem, e diferenças na visão sobre linguagem e pensamento.",
        }
      ]
    }
  ];

  const renderMessage = (msg: any, index: number) => (
    <div key={index} className={`flex ${msg.user ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`bg-white ${msg.user ? "rounded-tl-lg rounded-bl-lg rounded-tr-lg" : "rounded-tr-lg rounded-br-lg rounded-bl-lg"} p-2 max-w-[80%] shadow-sm`}>
        <p className="text-xs text-gray-800">{msg.text}</p>
        {msg.attachment && (
          <div className="mt-2 p-1 bg-gray-50 rounded-md flex items-center">
            <div className={`${
              msg.attachment.type === "PDF" ? "bg-red-500" : 
              msg.attachment.type === "IMAGEM" ? "bg-green-500" : 
              msg.attachment.type === "ÁUDIO" ? "bg-purple-500" : 
              "bg-blue-500"
            } text-white text-xs p-1 rounded`}>
              {msg.attachment.type}
            </div>
            <span className="text-xs ml-2">{msg.attachment.name}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Como as Pessoas Usam a mynote.ia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja exemplos reais de como nossa IA poderosa transforma a maneira como você interage com suas informações no WhatsApp.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {examples.map((example, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-md h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-blue-50 p-4 rounded-full">
                        {example.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {example.title}
                      </h3>
                    </div>
                    
                    <div className="bg-[#e5f7f0] rounded-lg p-5 max-w-md mx-auto">
                      {example.conversation.map((msg, i) => renderMessage(msg, i))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UseExamplesCarousel;
