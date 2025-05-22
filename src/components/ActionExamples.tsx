import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Ajuste o caminho se necessário
import { Card, CardContent } from "@/components/ui/card"; // Ajuste o caminho se necessário

// (Ícones PdfIcon e LinkIcon podem ser mantidos se você planeja usá-los em algum lugar,
// mas para o formato de anexo textual, eles não são estritamente necessários no balão)

const ActionExamples: React.FC = () => {
  const userName = "Alex"; // Ou o nome que preferir

  return (
    <section className="py-16 bg-gray-100"> {/* Fundo geral da seção */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Veja a mynote.ia em Ação</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Exemplos reais de como nossa IA transforma a maneira como você interage com suas informações no WhatsApp.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {/* Exemplo 1: PDF - Com Anexo Textual no Balão */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 z-10"
              data-aos='fade-up'
              data-aos-delay={0 * 150} // Assuming this is the first item (index 0)
            >
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col shadow-lg rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col justify-start p-4 md:p-6 flex-grow space-y-4">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-3">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Documentos Importantes</h3>
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500 text-white p-3 rounded-xl max-w-[85%] relative shadow">
                          <p className="text-sm break-words">
                            Fala Note.IA! Tudo bom? Preciso que você guarde esse PDF de direito civil que vou usar na prova amanhã.
                          </p>
                          <div className="mt-2 p-2 bg-emerald-400/30 rounded-md flex items-center border border-emerald-400/50">
                            <div className="bg-red-500 text-white text-xs font-semibold p-1 rounded mr-2">PDF</div>
                            <span className="text-xs text-emerald-50 break-all">direito_civil_cap3.pdf</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-slate-200 text-slate-800 p-3 rounded-xl max-w-[85%] relative break-words shadow">
                          <p className="text-sm">
                            Oi {userName}! Tudo ótimo 😊 Guardei seu PDF de direito civil no tema "Estudos / Direito". Boa sorte na prova amanhã! Precisa que eu destaque algo importante desse material?
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Exemplo 2: Buscando Links Salvos - Com Anexo Textual no Balão */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3"
 z-10
              data-aos='fade-up'
              data-aos-delay={1 * 150} // Assuming this is the second item (index 1)
            >
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col shadow-lg rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col justify-start p-4 md:p-6 flex-grow space-y-4" >
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full mr-3">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-.757l1.096-1.096m4.206-4.206a4 4 0 015.656 0l4 4a4 4 0 11-5.656 5.656l-1.102-1.101m-.757-.757l-1.096-1.096m7.441-7.441l2.288 2.288a.99.99 0 010 1.404l-2.288 2.288m-.757-.757l-1.096-1.096"></path></svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Buscando Links Salvos</h3>
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500 text-white p-3 rounded-xl max-w-[85%] relative shadow">
                          <p className="text-sm break-words">
                            Note, meu gênio dos links! 🧞‍♂️ Preciso daquele artigo incrível sobre o futuro da computação quântica.
                          </p>
                        </div>
                      </div>
                       <div className="flex justify-start">
                        <div className="bg-slate-200 text-slate-800 p-3 rounded-xl max-w-[85%] relative break-words shadow">
                          <p className="text-sm">
                            Achado, {userName}! 💡 Você salvou "O Amanhã Quântico" no dia 20/03. Segura aí:
                          </p>
                          <div className="mt-2 p-2 bg-slate-100 rounded-md flex items-center border border-slate-200">
                            <div className="bg-blue-500 text-white text-xs font-semibold p-1 rounded mr-2">LINK</div>
                            <span className="text-xs text-slate-700 break-all">o-futuro-da-computacao-quantica.url</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Exemplo 3: Imagens (Visual) */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3"
 z-10
              data-aos='fade-up'
              data-aos-delay={2 * 150} // Assuming this is the third item (index 2)
            >
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col shadow-lg rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col justify-start p-4 md:p-6 flex-grow space-y-4" >
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full mr-3">
                         <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Fotos Inspiradoras</h3>
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500 p-1.5 rounded-xl max-w-[85%] relative shadow">
                          <img
                            src="https://via.placeholder.com/300x200.png?text=Rascunho+Logo"
                            alt="Rascunho de logo"
                            className="rounded-md max-w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                       <div className="flex justify-start">
                        <div className="bg-slate-200 text-slate-800 p-3 rounded-xl max-w-[85%] relative break-words shadow">
                          <p className="text-sm">Uau, que talento, {userName}! Rascunho do logo v3 arquivado. 🎨</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Exemplo 4: Ideias em Áudio (Mockup Visual do Player) */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3"
 z-10
              data-aos='fade-up'
              data-aos-delay={3 * 150} // Assuming this is the fourth item (index 3)
            >
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col shadow-lg rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col justify-start p-4 md:p-6 flex-grow space-y-4" >
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-orange-100 p-3 rounded-full mr-3">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Ideias em Áudio</h3>
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500 text-white p-3 rounded-xl max-w-[85%] relative shadow w-full">
                          <div className="flex items-center space-x-2">
                            <div className="bg-emerald-400 p-2 rounded-full cursor-pointer">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                            </div>
                            <div className="flex-grow bg-emerald-300 h-1.5 rounded-full relative">
                              <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-emerald-600 w-3 h-3 rounded-full border-2 border-emerald-500"></div>
                            </div>
                            <span className="text-xs text-emerald-100">0:42</span>
                          </div>
                        </div>
                      </div>
                       <div className="flex justify-start">
                        <div className="bg-slate-200 text-slate-800 p-3 rounded-xl max-w-[85%] relative break-words shadow">
                          <p className="text-sm">Ideia genial capturada, {userName}! 💡 Sua nota de voz está no cofre. 🐾</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

             {/* Exemplo 5: Nota Rápida (Texto Simples) */}
             <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3"
 z-10
               data-aos='fade-up'
               data-aos-delay={4 * 150} // Assuming this is the fifth item (index 4)
             >
               <div className="p-1 h-full">
                <Card className="h-full flex flex-col shadow-lg rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col justify-start p-4 md:p-6 flex-grow space-y-4" >
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full mr-3">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Lembretes e Notas</h3>
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500 text-white p-3 rounded-xl max-w-[85%] relative shadow">
                           <p className="text-sm break-words">Anotação rapidinha, Note: <span className="font-semibold">📝 Ligar para o Dr. Silva amanhã às 10h - retorno consulta importante.</span></p>
                        </div>
                      </div>
                       <div className="flex justify-start">
                         <div className="bg-slate-200 text-slate-800 p-3 rounded-xl max-w-[85%] relative break-words shadow">
                            <p className="text-sm">Anotado e destacado, {userName}! 📌 Lembrete para o Dr. Silva configurado. Não se preocupe!</p>
                        </div>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

             {/* Exemplo 6: Buscar Notas (Texto Simples) */}
             <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3"
 z-10
               data-aos='fade-up'
               data-aos-delay={5 * 150} // Assuming this is the sixth item (index 5)
             >
               <div className="p-1 h-full">
                <Card className="h-full flex flex-col shadow-lg rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col justify-start p-4 md:p-6 flex-grow space-y-4" >
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full mr-3">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Relembrando Ideias</h3>
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500 text-white p-3 rounded-xl max-w-[85%] relative shadow">
                          <p className="text-sm break-words">
                            Note, o que eu anotei sobre "livros para ler nas férias que realmente valem a pena"?
                          </p>
                        </div>
                      </div>
                       <div className="flex justify-start">
                        <div className="bg-slate-200 text-slate-800 p-3 rounded-xl max-w-[85%] relative break-words shadow">
                          <p className="text-sm">
                            Boas leituras à vista, {userName}! 📚 Você anotou: "1. Duna (clássico!), 2. Fundação (imperdível), 3. O Problema dos 3 Corpos (🤯)". Qual deles vai ser o primeiro grande mergulho?
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-[-25px] sm:left-[-35px] md:left-[-45px] z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-primary disabled:opacity-30" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-[-25px] sm:right-[-35px] md:right-[-45px] z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-primary disabled:opacity-30" />
        </Carousel>
      </div>
    </section>
  );
};

export default ActionExamples;