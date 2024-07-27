import { HiDocumentText, HiCreditCard, HiChat, HiCash, HiChartBar, HiCube } from "react-icons/hi";
import { Card } from "../../utils/card";

export const Sobre = () => {
  return (
    <section
      id="sobre"
      role="grid"
      aria-labelledby="sobre"
      className="bg-white flex flex-col h-screen sm:h-auto gap-1"
    >
      <div className=" flex flex-col items-center justify-center text-center mt-12 mb-12">
        <div className="flex items-center justify-center">
          <hr className="my-8 w-72 h-px bg-indigo-600 border-0 dark:bg-blue-700" />
          <p className="bg-blue-600 bg-clip-text text-clip text-transparent font-bold text-4xl mx-4 pb-2">
          Infor Gerencial
          </p>
          <hr className="my-8 w-72 h-px bg-indigo-600 border-0 dark:bg-blue-700" />
        </div>
        <div className="text-black flex flex-col justify-center items-center">
          <h2 className="text-3xl cel:text-2xl">Como funciona nosso sistema?</h2>
          <h3 className="text-xl cel:text-1xl">
          Oferecemos um sistema de gestão completo, especialmente 
          desenvolvido para atender às<br/> demandas específicas de estabelecimentos comerciais, com foco principal em óticas.
          </h3>
        </div>
      </div>
      <div className="bg-inforColor flex w-full justify-center px-10 lg:p-0 ">
        <div
          className="flex gap-x-6 gap-y-6 w-full p-5  mb-5 max-w-4xl overflow-auto lg:grid lg:grid-cols-3"
          tabIndex={0}
        >
          <Card
            title="NF-e e NFC-e"
            text="Não se preocupe com cálculos tributários e códigos fiscais, tudo é feito automaticamente."
            icon={<HiDocumentText size={35} />}
          />
          <Card
            title="Emissão de boleto"
            text="Disponível para o banco Cora, Banco Inter e Banco do Brasil."
            icon={<HiCreditCard size={35} />}
          />
          <Card
            title="Automação com WhatsApp"
            text="Deixe que o sistema faça de forma automática suas cobranças, mensagens de aniversário..."
            icon={<HiChat size={35} />}
          />
          <Card
            title="Controle financeiro"
            text="Controle caixa, 
                  contas a pagar, contas a receber e demais entradas e saídas."
            icon={<HiCash size={35} />}
          />
          <Card
            title="Relatórios"
            text="Relatórios em PDF e gráficos construídos de acordo com sua necessidade."
            icon={<HiChartBar size={35} />}
          />
          <Card
            title="Estoque"
            text="Controle de estoque com quantidade mínimas e máximas"
            icon={<HiCube size={35} />}
          />
        </div>
      </div>
    </section>
  );
};
