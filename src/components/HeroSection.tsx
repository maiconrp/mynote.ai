
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Seu WhatsApp,{" "}
            <span className="text-brand-blue">finalmente organizado.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Envie qualquer arquivo, link, áudio ou mensagem para a mynote.ia. Nossa IA cataloga tudo, e você encontra com uma simples pergunta. Sem esforço, sem perder mais nada.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <Button className="bg-brand-accent hover:bg-orange-600 text-white font-medium h-12 px-6 text-lg">
              Experimente mynote.ia Grátis
            </Button>
            <Button variant="outline" className="h-12 px-6 text-lg">
              Ver Planos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-xl max-w-md mx-auto animate-float">
            <div className="bg-emerald-500 rounded-t-lg p-2 flex items-center">
              <div className="h-3 w-3 rounded-full bg-white/30 mx-1"></div>
              <div className="text-white text-sm font-medium ml-2">mynote.ia</div>
            </div>
            <div className="p-3 bg-[#e5f7f0] space-y-6 rounded-b-lg">
              {/* Message from user */}
              <div className="flex justify-end">
                <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Aqui está o PDF dos meus estudos para a prova
                  </p>
                  <div className="mt-2 p-2 bg-gray-50 rounded-md flex items-center">
                    <div className="bg-red-500 text-white text-xs p-1 rounded">PDF</div>
                    <span className="text-xs ml-2">estudos_direito.pdf</span>
                  </div>
                </div>
              </div>
              
              {/* Message from mynote.ia */}
              <div className="flex justify-start">
                <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Que PDF de estudos massa, Lucas! 😉 Guardei para você. Deseja que eu categorize em alguma pasta específica?
                  </p>
                </div>
              </div>
              
              {/* Message from user */}
              <div className="flex justify-end">
                <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Cadê meu PDF de direito civil?
                  </p>
                </div>
              </div>
              
              {/* Message from mynote.ia */}
              <div className="flex justify-start">
                <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">
                    Aqui está o PDF de direito civil que você pediu:
                  </p>
                  <div className="mt-2 p-2 bg-gray-50 rounded-md flex items-center">
                    <div className="bg-red-500 text-white text-xs p-1 rounded">PDF</div>
                    <span className="text-xs ml-2">direito_civil_2023.pdf</span>
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
