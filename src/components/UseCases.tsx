import React from "react";
import { GraduationCap, Briefcase, Lightbulb, CheckSquare } from "lucide-react";

// Defina sua cor 'brand-blue' no seu tailwind.config.js ou substitua pela cor desejada
// Ex: text-blue-600

const UseCases = () => {
  const cases = [
    {
      iconComponent: GraduationCap, // Passando o componente do ícone
      title: "Estudante",
      description:
        "Guarde materiais de aula, links de pesquisa, anotações de voz e nunca mais perca um trabalho importante.",
    },
    {
      iconComponent: Briefcase,
      title: "Profissional",
      description:
        "Arquive propostas, relatórios, cartões de visita virtuais, insights de reuniões e informações de clientes rapidamente.",
    },
    {
      iconComponent: Lightbulb,
      title: "Empreendedor",
      description:
        "Salve ideias de negócios assim que surgirem, comprovantes de despesas, contatos de fornecedores e inspirações.",
    },
    {
      iconComponent: CheckSquare,
      title: "Organizador Pessoal",
      description:
        "Mantenha receitas, listas de compras, informações médicas, documentos importantes e lembretes do dia a dia em um só lugar.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-blue-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            mynote.ia é Perfeita Para Você, Se Você é...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {cases.map((useCase, index) => {
            // Renderiza o ícone dinamicamente
            const Icon = useCase.iconComponent; 
            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
              >
                {/* Flex container para Ícone e Bloco de Texto (Título + Descrição) */}
                <div className="flex items-start space-x-4">
                  {/* Ícone com fundo */}
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  {/* Bloco de Texto (Título + Descrição) */}
                  <div className="flex-grow"> {/* Este div permitirá que o título e a descrição fiquem alinhados à esquerda dele */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2"> {/* Adicionado mb-2 para espaço antes da descrição */}
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;