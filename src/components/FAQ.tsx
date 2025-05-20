
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como começo a usar a mynote.ia?",
      answer:
        "É super fácil! Basta adicionar nosso número no WhatsApp e enviar uma mensagem dizendo 'Oi'. A mynote.ia vai te dar as boas-vindas e orientações iniciais. Você já pode começar a enviar arquivos para armazenar e acessar depois.",
    },
    {
      question: "Meus dados estão seguros com a mynote.ia?",
      answer:
        "Absolutamente! Seus dados são armazenados com criptografia e você tem controle total sobre eles. Seguimos rigorosas práticas de segurança e privacidade. Você pode excluir qualquer informação a qualquer momento, e ninguém além de você tem acesso aos seus dados.",
    },
    {
      question: "Quais tipos de arquivo posso enviar?",
      answer:
        "Você pode enviar praticamente qualquer tipo de arquivo que o WhatsApp suporta: PDFs, documentos Word, Excel, imagens, áudios, vídeos, links, contatos e, claro, mensagens de texto. A mynote.ia vai gerenciar e organizar todos eles.",
    },
    {
      question: "Posso usar a mynote.ia em mais de um número de WhatsApp?",
      answer:
        "Atualmente, cada conta mynote.ia está vinculada a um único número de WhatsApp. No entanto, você pode criar contas separadas para cada número, se necessário.",
    },
    {
      question: "Como funciona o limite do plano gratuito?",
      answer:
        "No plano gratuito, você pode armazenar até 50 itens diferentes. Um 'item' pode ser um arquivo, uma nota de texto, um link ou qualquer elemento único que você enviar. Ao atingir o limite, você precisará excluir alguns itens ou fazer upgrade para o plano Pro.",
    },
    {
      question: "Como cancelo minha assinatura do plano Pro?",
      answer:
        "Para cancelar sua assinatura, basta enviar uma mensagem para a mynote.ia com o texto 'Cancelar assinatura' e seguir as instruções. Você pode cancelar a qualquer momento, mas terá acesso aos recursos premium até o final do período já pago.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ainda Tem Dúvidas? A Gente Responde!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira algumas das perguntas mais frequentes sobre a mynote.ia
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-brand-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
