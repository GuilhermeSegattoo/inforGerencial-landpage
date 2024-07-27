import { Button } from "../../utils/button";

export const Inicio = () => {
  return (
    <section
      id="inicio"
      role="contentinfo"
      aria-labelledby="inicio"
      className="bg-inforColor flex py-8 items-center justify-around min-h-screen"
    >
      <div className="grid grid-cols-1 text-black cel:pb-0 cel:mb-0 lap:text-start tab:text-center cel:text-center items-center flex-wrap justify-center z-50">
        <div className="cel:text-4xl cel:mt-10 tab:text-4xl lap:text-5xl text-transparent font-bold mt-28 flex justify-center lap:justify-start">
          <h1 className="bg-white bg-clip-text">
            Gerencie sua empresa <br /> de forma simples!
          </h1>
        </div>

        <p className="text-white cel:text-lg tab:text-lg lap:text-xl desk:text-2xl mt-4 ">
          Acesse de onde estiver, pelo computador, tablet ou <br /> celular sem precisar instalar nada...
        </p>
        <div className="mt-8 flex cel:justify-center tab:justify-center lap:justify-start">
          <a href="#contato">
            <Button onClick={() => {}} appendClassName="w-[300px] h-15">
              <span className="text-lg text-blue-800 font-bold">
                Agendar uma apresentação
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div className="flex cel:hidden tab:hidden lap:inline-block xl:inline-block lap:auto">
        <div className="relative h-[350px] w-[400px] xl:ml-80">
          <img
            className="absolute top-20 left-0 z-30 floating "
            src="./assets/oculos.svg"
            alt="planeta"
          />
          <img
            className="absolute top-0 left-0 z-20 pulse"
            style={{ animationDelay: "5s" }}
            src="./assets/rocket/starts1.svg"
            alt="estrela"
          />
        </div>
      </div>
    </section>
  );
};
