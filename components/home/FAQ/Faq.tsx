import { useState } from "react";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      role="region"
      aria-labelledby="faq"
      className="bg-white py-16 px-4 lg:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Dúvidas Frequentes</h2>

        <div className="space-y-4">
          {/* Pergunta 1 */}
          <div
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleAnswer(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Como funciona a emissão de notas fiscais?
              </h3>
              <span className="text-gray-500">?</span>
            </div>
            {activeIndex === 0 && (
              <p className="text-gray-700 mt-4">
                A emissão de notas fiscais pode ser feita diretamente no nosso sistema, de forma automática, com o preenchimento dos dados de venda.
              </p>
            )}
          </div>

          {/* Pergunta 2 */}
          <div
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleAnswer(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                O sistema funciona em qualquer dispositivo?
              </h3>
              <span className="text-gray-500">?</span>
            </div>
            {activeIndex === 1 && (
              <p className="text-gray-700 mt-4">
                Sim, o nosso sistema é totalmente responsivo e pode ser acessado de qualquer dispositivo, como computadores, tablets e smartphones.
              </p>
            )}
          </div>

          {/* Pergunta 3 */}
          <div
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleAnswer(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Preciso instalar algo no computador?
              </h3>
              <span className="text-gray-500">?</span>
            </div>
            {activeIndex === 2 && (
              <p className="text-gray-700 mt-4">
                Não, nosso sistema é baseado na web, você só precisa de uma conexão com a internet e um navegador atualizado.
              </p>
            )}
          </div>

          {/* Pergunta 4 */}
          <div
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleAnswer(3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Como é feito o suporte técnico?
              </h3>
              <span className="text-gray-500">?</span>
            </div>
            {activeIndex === 3 && (
              <p className="text-gray-700 mt-4">
                O suporte técnico é realizado de forma online, pelo nosso número de telefone ou até mesmo via videochamada, conforme a necessidade.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
