import { FaChartLine, FaCheckDouble } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import {
  MdEngineering,
  MdGroup,
  MdGroups,
  MdOutlineScience,
  MdOutlineStickyNote2,
} from "react-icons/md";
import { Step } from "../../utils/step";

export const PassoAPasso = () => {
  return (
    <section
      id="passo_a_passo"
      role="grid"
      aria-labelledby="passo_a_passo"
      className="bg-black/25 flex flex-col items-center h-auto"
    >
      <h2 className="text-white text-center font-bold text-4xl p-4 mt-14 max-w-2xl">
        Como funciona?
      </h2>
      <div className="flex flex-col items-center mt-10 mx-10 md:mx-20 lg:mx-44 divide-y divide-slate-600 max-w-6xl">
        <Step
          icon={<MdGroup />}
          title="Reunião com a equipe de vendas"
          number={1}
        >
          O primeiro contato é uma reunião com a equipe de vendas da LeadDev, para
          entender as necessidades dos clientes, quais são os principais
          desafios e assim entender a demanda geral do projeto. Com base nessas
          informações, é possível definir os requisitos para atender ás
          necessidades dos usuários.
        </Step>
        <Step icon={<MdGroups />} title="Seleção da equipe" number={2}>
          Depois de entendermos as necessidades do cliente, é preciso selecionar
          uma equipe de desenvolvedores e as tecnologias que vão ser usadas no
          projeto. A equipe inclui desenvolvedores experientes em tecnologias
          específicas que serão usadas no projeto, um gerente de projeto e as
          interfaces serão desenvolvidas pela equipe de UI/UX.
        </Step>
        <Step icon={<FaChartLine />} title="Reunião de alinhamento" number={3}>
          Com a equipe selecionada, é hora de fazer uma reunião de alinhamento
          para definir as metas do projeto, as responsabilidades de cada membro
          da equipe e os prazos para cada fase do projeto.
        </Step>
        <Step
          icon={<MdOutlineStickyNote2 />}
          title="Definir metodologia de trabalho"
          number={4}
        >
          As equipes trabalham de forma colaborativa, com ciclos de feedback
          frequentes para garantir que o projeto esteja no padrão desejado pelo
          cliente.
        </Step>
        <Step
          icon={<MdOutlineScience />}
          title="Desenvolvimento de protótipos"
          number={5}
        >
          Em seguida, a equipe deve desenvolver protótipos do software, para
          garantir que as funcionalidades que estão sendo desenvolvidas atendam
          às necessidades dos usuários.
        </Step>
        <Step
          icon={<MdEngineering />}
          title="Desenvolvimento do software"
          number={6}
        >
          Com os protótipos aprovados, é hora de iniciar o desenvolvimento do
          software. A equipe deve trabalhar de forma ágil, com ciclos de
          desenvolvimento curtos e frequentes para garantir que o software está
          sendo desenvolvido para que atenda às necessidades dos usuários.
        </Step>
        <Step icon={<FaCheckDouble />} title="Testes e validação" number={7}>
          Após o desenvolvimento do software, é importante testar e validar cada
          funcionalidade, a fim de garantir que o software esteja funcionando
          corretamente e atendendo aos usuários.
        </Step>
        <Step icon={<IoRocketOutline />} title="Lançamento" number={8}>
          Com o software finalizado e testado, é hora de lançá-lo. É importante
          monitorar o software durante o lançamento para garantir que ele esteja
          funcionando corretamente e para fazer ajustes se necessário.
        </Step>
      </div>
    </section>
  );
};
