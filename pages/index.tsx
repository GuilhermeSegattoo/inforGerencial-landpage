/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Sobre } from "../components/home/sobre";
import { Solucao } from "../components/home/solucao";
import { Contato } from "../components/home/contato";
import { Inicio } from "../components/home/inicio";
import { PassoAPasso } from "../components/home/passo_a_passo";
import { Template } from "../components/utils/template";
import { FAQ } from "../components/home/FAQ/Faq";

const Home: NextPage = () => {
  return (
    <Template>
      <Inicio />
      <Sobre />
      <Solucao />
      <PassoAPasso />
      <FAQ />
      <Contato />
    </Template>
  );
};

export default Home;
