import { Button } from "../../utils/button";

export const Inicio = () => {
  return (
    <section
      id="inicio"
      role="contentinfo"
      aria-labelledby="inicio"
      className="flex py-8 lap:mx-10 desk:mx-6 my-10 w-screen items-center justify-around lg:h-screen"
    >
      <div className="grid grid-cols-1 text-white cel:pb-0 cel:mb-0 lap:text-start tab:text-center cel:text-center items-center flex-wrap justify-center z-50">
        <div className="cel:text-4xl cel:mt-10 tab:text-4xl lap:text-5xl  text-transparent font-bold mt-28 flex justify-center lap:justify-start">
          <h1 className="bg-textGradient bg-clip-text">
            Acelere seu <br /> desenvolvimento
          </h1>
        </div>

        <p className="cel:text-lg tab:text-lg lap:text-xl desk:text-2xl mt-4 text-slate-100">
          Construa a tecnologia do seu negócio com rapidez, qualidade e sem
          burocracia.
        </p>
        <div className="mt-8 flex cel:justify-center tab:justify-center lap:justify-start">
          <a href="#contato">
            <Button onClick={() => {}} appendClassName="w-[300px] h-10">
              <span className="text-lg text-white font-bold">
                Construa seu projeto
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div className="flex cel:hidden tab:hidden lap:inline-block xl:inline-block lap:auto">
        <div className="relative h-[350px] w-[400px] xl:ml-80">
          <img
            className="absolute bottom-5 left-0 z-50 floating w-44 "
            src="./assets/rocket/rocketWithFire.svg"
            alt="foguete"
          />
          <img
            className="absolute top-10 left-5 z-30 spin"
            src="./assets/rocket/planets.svg"
            alt="planeta"
          />
          <img
            className="absolute top-0 left-0 z-20 pulse "
            style={{ animationDelay: "5s" }}
            src="./assets/rocket/starts1.svg"
            alt="estrela"
          />
        </div>
      </div>
    </section>
  );
};
