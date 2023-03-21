/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { Contato } from '../components/home/contato';
import { Inicio } from '../components/home/inicio';
import { Mercado } from '../components/home/mercado';
import { PassoAPasso } from '../components/home/passo_a_passo';
import { QuemSomos } from '../components/home/quem_somos';
import { Sobre } from '../components/home/sobre';
import { Solucao } from '../components/home/solucao';
import { Template } from '../components/utils/template';

const Home: NextPage = () => {
    return (
        <Template>
            {/* Secctions da landpage */}
            <Inicio/>
            <QuemSomos/>
            <PassoAPasso/>
            <Sobre/>
            <Mercado/>
            <Solucao/>
            {/* <Calculadora/>*/}
            <Contato/>
        </Template>
    )
}

export default Home
