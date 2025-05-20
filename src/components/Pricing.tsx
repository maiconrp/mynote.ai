
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      description: "Perfeito para experimentar a mynote.ia.",
      price: "Grátis",
      period: "para sempre",
      features: [
        "Limite de 50 itens armazenados",
        "Catalogação básica",
        "Busca por pergunta simples",
        "Arquivos até 10MB",
      ],
      buttonText: "Comece Agora (Grátis)",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Para quem quer organização total e sem limites.",
      price: "R$ 19,90",
      period: "/mês",
      features: [
        "Armazenamento de até 5GB",
        "Itens ilimitados",
        "Busca avançada em documentos",
        "Organização com pastas/tags ilimitadas",
        "Suporte prioritário",
        "Arquivos até 50MB",
      ],
      buttonText: "Assinar Plano Pro",
      highlighted: true,
      discount: "Economize 20% no plano anual",
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Escolha o Plano mynote.ia Ideal para Você
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comece grátis e expanda conforme suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-10 ${
                plan.highlighted
                  ? "border-brand-blue shadow-blue"
                  : "border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-brand-blue text-white text-xs font-medium py-1 px-3 rounded-full inline-block mb-5">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mt-2 mb-6">{plan.description}</p>
              <div className="mb-10">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
                {plan.discount && (
                  <div className="mt-2 text-sm text-brand-green font-medium">
                    {plan.discount}
                  </div>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-brand-accent hover:bg-orange-600"
                    : "bg-brand-blue hover:bg-blue-700"
                } text-white font-medium h-12`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
