import React from 'react';
import gif1 from '../../../public/assets/gif1.gif';
import gif2 from '../../../public/assets/gif2.gif';

export const PassoAPasso = () => {
  return (
    <section
      id="solucao"
      className="bg-white flex flex-col items-center mb-1 py-10"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h2 className="text-black font-bold text-4xl mb-4">
             Relatórios feitos sob medida
          </h2>
          <p className="text-lg text-gray-700">
             Analise suas informações do seu jeito.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={gif1.src as string} alt="Descrição do primeiro GIF" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-10">
        <div className="lg:w-1/2 flex justify-center">
          <img src={gif2.src as string} alt="Descrição do segundo GIF" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
          <h2 className="text-black font-bold text-4xl mb-4">
            Focado na simplicidade de uso
          </h2>
          <p className="text-lg text-gray-700">
            Faça vendas e demais operações em segundos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PassoAPasso;
