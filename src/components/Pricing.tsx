import React from "react";
import { Button } from "@/components/ui/button"; // Ajuste o caminho se necessário
import { Check, Sparkles, Rocket, Zap, Gift } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Note Curioso 😉",
      description: "Pra dar um 'oi' pra organização e ver a mágica acontecer, sem gastar nada!",
      price: "Grátis",
      priceSize: "text-4xl md:text-5xl", // Tamanho específico para "Grátis"
      period: "de verdade, pra sempre!",
      features: [
        "Até 50 itens pra guardar (já dá um alívio!)",
        "Mágica básica de catalogação",
        "Busca tipo 'cadê?' (simples e rápida)",
        "Arquivos leves (até 10MB)",
      ],
      buttonText: "Quero essa moralzinha!",
      buttonIcon: <Sparkles className="mr-2 h-4 w-4" />,
      highlighted: false,
      buttonColorClass: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600", // Cor azul para o botão básico
    },
    {
      name: "Note Mestre Zen ✨",
      description: "A paz de espírito de quem tem TUDO no lugar e NUNCA mais perde nada. Sem stress!",
      price: "R$ 9,90",
      priceSize: "text-4xl md:text-5xl", // Mesmo tamanho para consistência visual do preço
      period: "/mês",
      subPeriodText: "(menos que um lanche!)", // Texto do período separado para melhor controle
      trialOffer: "Experimente 7 Dias Grátis!", // Nova propriedade para a oferta
      features: [
        "Espaço DE VERDADE (até 5GB pra sua vida digital)",
        "Guarde TUDO, sem dó nem piedade (itens ilimitados)",
        "Busca nível Sherlock Holmes (até dentro dos docs!)",
        "Pastas e tags ILIMITADAS pra sua OCD de organização",
        "Help VIP quando precisar (suporte prioritário)",
        "Arquivos mais parrudos (até 50MB)",
      ],
      buttonText: "Virar Mestre Zen AGORA!",
      buttonIcon: <Rocket className="mr-2 h-4 w-4" />,
      highlighted: true,
      badgeText: "O Queridinho da Galera!",
      discount: "Pague anual e ganhe 2 meses na faixa!",
      buttonColorClass: "bg-[hsl(var(--accent))] hover:bg-orange-500 dark:hover:bg-orange-400", // Cor de acento para o botão destacado
    },
  ];

  return (
    <>
    <style>{`
      /* Animação de pulso para o botão destacado */
      @keyframes pulse-subtle-glow {
        0%, 100% {
          box-shadow: 0 0 5px hsla(var(--accent), 0.3), 0 0 0px hsla(var(--accent), 0.2) inset;
        }
        50% {
          box-shadow: 0 0 15px hsla(var(--accent), 0.5), 0 0 5px hsla(var(--accent), 0.3) inset;
        }
      }
      .animate-subtle-pulse-btn {
        animation: pulse-subtle-glow 2s infinite ease-in-out;
      }
      .highlighted-card-transform {
        transform: translateY(-8px) scale(1.02); /* Leve elevação e zoom */
      }
    `}</style>
    <section id="planos" className="py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-slate-50 dark:bg-zinc-900" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Descomplique seu Zap: Escolha seu Plano MyNote.ia!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comece de boa no grátis ou turbine sua organização. Você decide o rolê!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto items-stretch"> {/* items-stretch para tentar igualar alturas */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 ease-in-out
                ${
                plan.highlighted
                  ? "border-2 border-[hsl(var(--accent))] shadow-2xl shadow-orange-500/20 dark:shadow-orange-400/20 relative highlighted-card-transform"
                  : "border border-gray-200 dark:border-zinc-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.highlighted && plan.badgeText && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[hsl(var(--accent))] text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-md whitespace-nowrap z-10">
                  {plan.badgeText}
                </div>
              )}

              <div className="flex-grow"> {/* Div para permitir que o conteúdo cresça e empurre o botão para baixo */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6 text-sm md:text-base min-h-[3.5em]">{plan.description}</p>
                
                <div className="mb-8 text-left"> {/* Alinhamento à esquerda para preço e período */}
                  <span className={`${plan.priceSize} font-extrabold text-gray-900 dark:text-gray-100`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Grátis" && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1 text-base">{plan.period}</span>
                  )}
                   {plan.price === "Grátis" && plan.period && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1 text-base">{plan.period}</span>
                  )}
                  {plan.subPeriodText && (
                     <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.subPeriodText}</span>
                  )}
                  {plan.discount && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400 font-semibold flex items-center">
                      <Zap className="inline h-4 w-4 mr-1.5" /> {plan.discount}
                    </div>
                  )}
                </div>
                {/* Trial Offer para plano Pro */}
                {plan.highlighted && plan.trialOffer && (
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/50">
                      <Gift className="h-5 w-5 mr-2" />
                      {plan.trialOffer}
                    </div>
                  </div>
                )}
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button // Botão agora está fora do div flex-grow para ficar na base
                className={`w-full font-semibold h-12 md:h-14 text-base md:text-lg rounded-lg transition-transform hover:scale-105 mt-auto
                  ${plan.buttonColorClass}
                  ${plan.highlighted ? "text-white animate-subtle-pulse-btn shadow-md shadow-orange-500/40" : "text-white"
                }`}
              >
                {plan.buttonIcon}
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Pricing;