/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { Button } from '../components/utils/button';
import { Card } from '../components/utils/card';
import { Header } from "../components/utils/template/header";
import { IoNewspaperOutline, IoRocketOutline } from 'react-icons/io5';
import { HiOutlineBriefcase, HiOutlineBadgeCheck, HiShieldCheck } from 'react-icons/hi';
import { TbMessageCircle } from 'react-icons/tb';
import { FaBurn, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiCopyrightFill } from 'react-icons/ri'
import { Inicio } from '../components/home/inicio';
import { Sobre } from '../components/home/sobre';
import { Solucao } from '../components/home/solucao';
import { Contato } from '../components/home/contato';
import { Footer } from '../components/utils/template/footer';
import { Template } from '../components/utils/template';
import { Mercado } from '../components/home/mercado';

const Home: NextPage = () => {
    return (
        <Template>
            {/* Secctions da landpage */}
            <Inicio/>
            <Sobre/>
            <Mercado/>
            <Solucao/>
            {/* <Calculadora/>*/}
            <Contato/>
        </Template>
    )
}

export default Home
