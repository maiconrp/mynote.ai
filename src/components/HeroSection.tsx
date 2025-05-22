import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
 return (
    <>
    <style>{`
        @keyframes pulse-animation {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pulse-btn {
          animation: pulse-animation 2s infinite;
        }
      `}</style>
    <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-8 md:px-16 bg-white dark:bg-gray-900">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center" data-aos="fade-up">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Seu WhatsApp,{" "}
            <span className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))]">finalmente organizado.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg">
  Dê adeus ao caos do WhatsApp! A <strong className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))]">mynote.ia</strong> entende seus arquivos, organiza e acha tudo rapidinho. <strong className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))]">Sua vida, mais fácil.</strong>
</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 pt-3">
            {/* Botão de Acento (Laranja) */}
            <Button 
              className="bg-[hsl(var(--accent))] hover:bg-orange-600 text-[hsl(var(--accent-foreground))] dark:bg-[hsl(var(--accent))] dark:hover:bg-orange-600 dark:text-[hsl(var(--accent-foreground))] font-medium h-14 px-8 text-lg btn-effect-wrapper btn-effect-wrapper-accent animate-pulse-btn"
            >
              <span>Experimente mynote.ia Grátis</span>
            </Button>
            
            {/* Botão Outline */}
            <Button 
              variant="outline" 
              className="h-14 px-8 text-lg btn-effect-wrapper border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] dark:border-[hsl(var(--border))] dark:hover:bg-[hsl(var(--secondary))] dark:text-[hsl(var(--secondary-foreground))]"
            > {/* Adiciona hover:text-[hsl(var(--secondary-foreground))] para garantir a cor do texto no hover */}
              <span>Ver Planos</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mockup de Chat (mantido como estava no seu último exemplo) */}
        <div className="relative">
          <div className="relative bg-slate-50 dark:bg-zinc-800/80 p-6 rounded-2xl border border-slate-100 dark:border-zinc-700 shadow-xl max-w-md mx-auto animate-float">
            <div className="bg-emerald-500 dark:bg-emerald-600 rounded-t-lg p-3 flex items-center">
              <div className="h-3 w-3 rounded-full bg-white/30 mx-1"></div>
              <div className="text-white text-sm font-medium ml-2">mynote.ia</div>
            </div>
            <div className="p-4 bg-[#e5f7f0] dark:bg-[#1e3c33] space-y-4 rounded-b-lg h-[300px] overflow-y-auto">
              {/* Mensagens ... */}
              <div className="flex justify-end">
                <div className="bg-white dark:bg-zinc-700 rounded-tl-lg rounded-bl-lg rounded-tr-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                  Note, o que eu anotei sobre "livros para ler nas férias que realmente valem a pena"?
                  </p>
                  
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-700 rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <p>Boas leituras à vista, Alex! 📚 </p>
                    <p>1. Duna (clássico!)</p>
                    <p>2. Fundação (imperdível)</p>
                    <p>3. O Problema dos 3 Corpos (🤯)</p>
                    <p>Qual deles vai ser o primeiro grande mergulho?</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -top-10 -left-10 w-24 h-24 bg-blue-100 dark:bg-blue-500/10 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-orange-100 dark:bg-orange-500/10 rounded-full opacity-60 blur-xl"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;