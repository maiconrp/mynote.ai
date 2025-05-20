
import React from "react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-brand-blue to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para um WhatsApp Mais Inteligente e Organizado?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Experimente gratuitamente e veja como é fácil ter todas as suas informações importantes na palma da mão.
        </p>
        <Button className="bg-white text-brand-blue hover:bg-gray-100 font-medium h-14 px-8 text-lg">
          Experimente mynote.ia Grátis Agora!
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
