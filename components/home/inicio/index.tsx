import { Button } from "../../utils/button";

export const Inicio = () => {
  return (
    <section
      id="home"
      role="contentinfo"
      aria-labelledby="inicio"
      className="bg-blue-800 flex py-8 items-center justify-center h-[calc(100vh-380px)] text-white"
    >
      <div className="text-center flex flex-col items-center justify-center z-50">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Gestão Completa para sua Ótica
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6">
          Emissão de notas fiscais, controle de estoque e gestão financeira em uma única plataforma
        </p>
        <div className="mt-8">
          <a href="#contato">
            <Button appendClassName="w-[300px] h-15 bg-white text-blue-800 font-semibold">
              Faça uma demonstração
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
