import React from 'react';

interface PlanProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonStyle: string;
  containerStyle?: string;
}

const PlanCard: React.FC<PlanProps> = ({ title, price, features, buttonText, buttonStyle, containerStyle }) => {
  return (
    <div className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${containerStyle}`}>
      <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
      
      <div className='text-center font-medium'>
        {features.map((feature, index) => (
          <p key={index} className='py-2 border-b mx-8 mt-8'>{feature}</p>
        ))}
      </div>
      <div className='flex justify-center my-6'>
        <a href="#contato">
          <button className={`rounded-md font-medium px-6 py-3 ${buttonStyle}`}>
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

const PlansSection: React.FC = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10'>
        <PlanCard
          title="Demonstrativo de lentes"
          price="$xx/mês"
          features={["Fotossensível", "Transitions", "Tratamentos", "Ambientes", "Comparativos"]}
          buttonText="Solicitar Demo"
          buttonStyle="bg-inforColor text-white"
          containerStyle="bg-white"
        />

        <PlanCard
          title="Sistema Completo"
          price="$xx/mês"
          features={["Notas Fiscais", "Cadastros", "Financeiro", "Estoque", "Boletos", "Crediário", "Controle de OS", "Status do pedido", "E muito mais!"]}
          buttonText="Solicitar Demo!"
          buttonStyle="bg-inforColor text-white"
          containerStyle="bg-gray-100"
        />

        <PlanCard
          title="Adicionais"
          price="+$40/Plano"
          features={["Automação com WhatsApp", "Emissão de boletos", "Demonstrativo de lentes"]}
          buttonText="Solicitar Demo"
          buttonStyle="bg-inforColor text-white"
        />
      </div>
    </div>
  );
};

export const Solucao: React.FC = () => {
  return (
    <section
      id="solucao"
      className="bg-white flex flex-col justify-center items-center mb-1"
    >
      <div className="container mx-auto flex flex-col mt-20 max-w-4xl ">
        <div className="flex justify-center lg:text-start flex-col lg:flex-row items-center">
          <h1 className="text-black font-bold text-6xl p-4 text-center">
            Nossos Planos
          </h1>
        </div>
        <div className="flex justify-center lg:text-start flex-col lg:flex-row items-center">
          <span className="text-inforColor text-2xl">
            Escolha seu melhor plano!
          </span>
        </div>
        <PlansSection />
      </div>
    </section>
  );
};
