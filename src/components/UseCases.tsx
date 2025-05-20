
import React from "react";
import { GraduationCap, Briefcase, Lightbulb, CheckSquare } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: <GraduationCap className="h-8 w-8 text-brand-blue" />,
      title: "Estudante",
      description:
        "Guarde materiais de aula, links de pesquisa, anotações de voz e nunca mais perca um trabalho importante.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-brand-blue" />,
      title: "Profissional",
      description:
        "Arquive propostas, relatórios, cartões de visita virtuais, insights de reuniões e informações de clientes rapidamente.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-blue" />,
      title: "Empreendedor",
      description:
        "Salve ideias de negócios assim que surgirem, comprovantes de despesas, contatos de fornecedores e inspirações.",
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-brand-blue" />,
      title: "Organizador Pessoal",
      description:
        "Mantenha receitas, listas de compras, informações médicas, documentos importantes e lembretes do dia a dia em um só lugar.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            mynote.ia é Perfeita Para Você, Se Você é...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl border border-gray-100 shadow-md hover:shadow-blue transition-all"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-8 mx-auto">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-center">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
