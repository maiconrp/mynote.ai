
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Seu WhatsApp,{" "}
            <span className="text-brand-blue">finalmente organizado.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            <strong className="text-brand-blue">Envie qualquer arquivo</strong> - PDFs, imagens, links, áudios, textos - para a mynote.ia. 
            Nossa IA poderosa <strong>analisa, entende e cataloga tudo</strong>, 
            e você encontra com uma simples pergunta em linguagem natural.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 pt-3">
            <Button className="bg-brand-accent hover:bg-orange-600 text-white font-medium h-14 px-8 text-lg">
              Experimente mynote.ia Grátis
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg">
              Ver Planos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-xl max-w-md mx-auto animate-float">
            <div className="bg-emerald-500 rounded-t-lg p-3 flex items-center">
              <div className="h-3 w-3 rounded-full bg-white/30 mx-1"></div>
              <div className="text-white text-sm font-medium ml-2">mynote.ia</div>
            </div>
            <div className="p-4 bg-[#e5f7f0] space-y-6 rounded-b-lg">
              {/* Message from user */}
              <div className="flex justify-end">
                <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Fala Note.IA! Tudo bom? Preciso que você guarde esse PDF de direito civil que vou usar na prova amanhã
                  </p>
                  <div className="mt-2 p-2 bg-gray-50 rounded-md flex items-center">
                    <div className="bg-red-500 text-white text-xs p-1 rounded">PDF</div>
                    <span className="text-xs ml-2">direito_civil_cap3.pdf</span>
                  </div>
                </div>
              </div>
              
              {/* Message from mynote.ia */}
              <div className="flex justify-start">
                <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Oi Lucas! Tudo ótimo 😊 Guardei seu PDF de direito civil no tema "Estudos &gt; Direito". Boa sorte na prova amanhã! Precisa que eu destaque algo importante desse material?
                  </p>
                </div>
              </div>
              
              {/* Message from user */}
              <div className="flex justify-end">
                <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Note, me mostra aquele artigo sobre posse e propriedade que guardei semana passada
                  </p>
                </div>
              </div>
              
              {/* Message from mynote.ia */}
              <div className="flex justify-start">
                <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Encontrei! Aqui está o artigo sobre posse e propriedade que você salvou na quinta-feira:
                  </p>
                  <div className="mt-2 p-2 bg-gray-50 rounded-md flex items-center">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded">LINK</div>
                    <span className="text-xs ml-2">artigo_posse_propriedade.url</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute -z-10 -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-orange-100 rounded-full opacity-60 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
