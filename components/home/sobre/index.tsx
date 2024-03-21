import { FaBurn } from "react-icons/fa";
import {
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
  HiShieldCheck,
} from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { Card } from "../../utils/card";

export const Sobre = () => {
  return (
    <section
      id="sobre"
      role="grid"
      aria-labelledby="sobre"
      className="bg-black/25 flex flex-col h-screen sm:h-auto"
    >
      <div className="flex flex-col items-center justify-center text-center mt-12 mb-12">
        <div className="flex items-center justify-center">
          <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700" />
          <p className="bg-textGradient bg-clip-text text-clip text-transparent font-bold text-4xl mx-4 pb-2">
            LeadDev
          </p>
          <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700" />
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className="text-3xl cel:text-2xl">Como funciona a plataforma</h2>
          <h3 className="text-xl cel:text-base">
            Com a LeadDev, é possível tirar suas ideias do papel. Conheça alguns
            benefícios da nossa solução!
          </h3>
        </div>
      </div>
      <div className="flex w-full justify-center px-10 lg:p-0">
        <div
          className="flex gap-x-11 gap-y-8 w-max p-2  mb-5 max-w-4xl overflow-auto lg:grid lg:grid-cols-3"
          tabIndex={0}
        >
          <Card
            title="Burocracia"
            text="Profissionais de TI disponível para sua empresa sem a burocracia de contratação"
            icon={<HiOutlineBriefcase size={35} />}
          />
          <Card
            title="Praticidade"
            text="Praticidade para tirar o seu projeto do papel"
            icon={<IoRocketOutline size={35} />}
          />
          <Card
            title="Segurança"
            text="Transparência e confiança desde o desenvolvimento a entrega"
            icon={<HiShieldCheck size={35} />}
          />
          <Card
            title="Exclusividade"
            text="Sua tecnologia de forma única e estruturada para o seu negócio"
            icon={<FaBurn size={35} />}
          />
          <Card
            title="Especialistas"
            text="Equipes especializadas em diversos tipos de linguagem de programação"
            icon={<HiOutlineBadgeCheck size={35} />}
          />
          <Card
            title="Automação"
            text="Tecnologias para diferenciar sua empresa, e conectar-se cada vez mais com seus clientes"
            icon={<TbMessageCircle size={35} />}
          />
        </div>
      </div>
    </section>
  );
};
