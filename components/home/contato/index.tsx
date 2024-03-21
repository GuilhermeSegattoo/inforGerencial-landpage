import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../utils/button";
import InputMask from "react-input-mask";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
}

export const Contato = () => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <section
      id="contato"
      className="flex lg:h-screen justify-center items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mt-2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-3xl font-bold">Agendar uma demo.</h2>
          <span className="text-white text-center px-4">
            Preencha o formulário abaixo e entre em contato com o nosso time
            comercial.
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full max-w-xs"
          >
            <div className="flex flex-col col-span-full sm:col-span-6">
              <label htmlFor="name" className="text-white">
                Nome
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className="bg-white rounded  p-1"
              />
            </div>
            <div className="flex flex-col col-span-full ">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="contato@email.com"
                {...register("email", { required: true })}
                className="bg-white rounded  p-1"
              />
            </div>

            <div className="flex flex-col col-span-full">
              <label htmlFor="phone" className="text-white">
                celular
              </label>
              <InputMask
                id="phone"
                type="text"
                className="bg-white rounded  p-1"
                placeholder="(99) 99999-9999"
                mask="(99) 99999-9999"
                maskChar={null}
                {...register("phone", { required: true })}
              />
            </div>

            <Button type="submit" appendClassName="text-lg h-10 mt-3">
              <p className="text-white font-bold">Fale com um Especialista</p>
            </Button>
          </form>
        </div>

        <div className="flex justify-center items-center mt-16 lg:mt-0">
          <div className="flex cel:w-48 tab:w-48 lap:w-auto xl:w-auto cel:mx-auto ">
            <div className="relative h-80 w-80">
              <img
                className="absolute bottom-44 lg:bottom-24 left-8 lg:left-10 z-30 w-24 lg:w-40"
                src="./assets/rocket_boy/OnlySmoke.svg"
                alt="fumaça"
              />
              <img
                className="absolute bottom-[200px] lg:bottom-32 left-7 lg:left-14 z-30 floating h-36 lg:h-60"
                src="./assets/rocket_boy/OnlyRocket.svg"
                alt="foguete"
              />
              <img
                className="absolute top-0 rigth-20 z-20 "
                width={300}
                src="./assets/rocket_boy/Clouds.svg"
                alt="nuvens"
              />
              <img
                className="absolute top-0 left-0 z-0"
                width={300}
                src="./assets/rocket_boy/Stars.svg"
                alt="estrelas"
              />
              <img
                className="absolute top-0 left-0 z-20"
                width={300}
                src="./assets/rocket_boy/CharacterBase.svg"
                alt="character start"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
