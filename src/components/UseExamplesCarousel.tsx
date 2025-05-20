import React, { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { FileText, FileImage, FileAudio, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const UseExamplesCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const examples = [
    {
      title: "Armazenamento Inteligente",
      icon: <FileText className="h-8 w-8 text-red-500" />,
      conversation: [
        {
          user: true,
          text: "Oi Note, guarda este artigo",
          attachment: {
            type: "PDF",
            name: "artigo_neurociencia.pdf"
          }
        },
        {
          user: false,
          text: "Artigo guardado! Adicionei à sua pasta de pesquisa.",
        }
      ]
    },
    {
      title: "Organização de Imagens",
      icon: <FileImage className="h-8 w-8 text-green-500" />,
      conversation: [
        {
          user: true,
          text: "Guarda esta receita",
          attachment: {
            type: "IMAGEM",
            name: "receita_risoto.jpg"
          }
        },
        {
          user: false,
          text: "Receita salva na coleção de culinária!",
        }
      ]
    },
    {
      title: "Gestão de Contatos",
      icon: <Search className="h-8 w-8 text-blue-500" />,
      conversation: [
        {
          user: true,
          text: "Guarda o contato desta cliente",
          attachment: {
            type: "CONTATO",
            name: "Ana Ferreira - Marketing"
          }
        },
        {
          user: false,
          text: "Contato salvo em 'Clientes'!",
        }
      ]
    },
    {
      title: "Catalogação de Áudios",
      icon: <FileAudio className="h-8 w-8 text-purple-500" />,
      conversation: [
        {
          user: true,
          text: "Este é o áudio da aula",
          attachment: {
            type: "ÁUDIO",
            name: "aula_psicologia.mp3"
          }
        },
        {
          user: false,
          text: "Áudio catalogado em 'Estudos'!",
        }
      ]
    }
  ];

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

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
    <section className="py-24 md:py-32 px-8 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Veja a mynote.ia em Ação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exemplos reais de como nossa IA transforma a maneira como você interage com suas informações no WhatsApp.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 1,
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {examples.map((example, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className={`bg-white p-6 md:p-8 rounded-xl border ${
                  current === index 
                    ? "border-brand-blue shadow-lg scale-105 transition-all duration-300" 
                    : "border-gray-100 shadow-sm"
                } h-full transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-full">
                      {example.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {example.title}
                    </h3>
                  </div>
                  
                  <div className="bg-[#e5f7f0] rounded-lg p-4 max-w-md mx-auto h-[180px] flex flex-col justify-center">
                    {example.conversation.map((msg, i) => renderMessage(msg, i))}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UseExamplesCarousel;
