
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 bg-gradient-to-br from-brand-blue to-blue-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-brand-accent opacity-10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Transforme seu WhatsApp em uma <span className="text-brand-accent">Memória Digital Inteligente</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Chega de perder arquivos importantes, links valiosos ou mensagens essenciais em conversas intermináveis. A mynote.ia organiza tudo para você.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Button className="bg-white text-brand-blue hover:bg-gray-100 font-medium h-14 px-8 text-lg w-full sm:w-auto">
            Experimente mynote.ia Grátis
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium h-14 px-8 text-lg w-full sm:w-auto">
            Ver Planos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="text-white/80 text-sm mt-4">Sem cartão de crédito | Cancele quando quiser</p>
      </div>
    </section>
  );
};

export default FinalCTA;
