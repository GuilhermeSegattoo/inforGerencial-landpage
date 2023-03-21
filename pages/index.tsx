/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { Inicio } from '../components/home/inicio';
import { Sobre } from '../components/home/sobre';
import { Solucao } from '../components/home/solucao';
import { Contato } from '../components/home/contato';
import { Template } from '../components/utils/template';

const Home: NextPage = () => {
    return (
        <Template>
            {/* Secctions da landpage */}
            <Inicio/>
            <Sobre/>            
            <Solucao/>            
            <Contato/>
        </Template>
    )
}

export default Home
