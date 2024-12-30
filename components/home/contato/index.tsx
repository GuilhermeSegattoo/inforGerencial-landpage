import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../utils/button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
}

export const Contato = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "a80ec0d9-ec01-41c9-ad8d-f0a130686be5",
        ...data,
      });

      if (response.status === 200) {
        toast.success("Formulário enviado com sucesso!");
        reset();  // Reseta os campos do formulário
      } else {
        toast.error("Erro ao enviar o formulário");
      }
    } catch (error) {
      toast.error("Erro ao enviar o formulário");
      console.error("Erro ao enviar o formulário", error);
    }
  };

  return (
    <section
      id="contato"
      className="flex lg:h-screen justify-center items-center bg-blue-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mt-2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-3xl font-bold">Agendar uma demonstração</h2>
          <span className="text-white text-center px-4">
            Preencha o formulário abaixo e entraremos em contato com você em 24h.
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
                {...register("name", { required: "Nome é obrigatório" })}
                className="bg-white rounded p-1"
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col col-span-full">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="contato@email.com"
                {...register("email", { required: "Email é obrigatório" })}
                className="bg-white rounded p-1"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col col-span-full">
              <label htmlFor="phone" className="text-white">
                Celular
              </label>
              <input
                id="phone"
                type="text"
                className="bg-white rounded p-1"
                placeholder="(xx) xxxx-xxxx"
                {...register("phone", {
                  required: "Celular é obrigatório",
                  pattern: {
                    value: /^\(\d{2}\) \d{5}-\d{4}$/,
                    message: "Formato inválido. Use (xx) xxxx-xxxx"
                  }
                })}
              />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>

            <Button type="submit" appendClassName="text-lg h-10 mt-3">
              <p className="text-inforColor font-bold">Fale com um Especialista</p>
            </Button>
          </form>
        </div>

        <div className="flex justify-center items-center mt-16 lg:mt-0">
          <div className="flex cel:w-48 tab:w-48 lap:w-auto xl:w-auto cel:mx-auto">
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
                className="absolute top-0 right-20 z-20"
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
      <ToastContainer />
    </section>
  );
};
