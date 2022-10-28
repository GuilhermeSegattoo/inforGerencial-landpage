/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Header } from "../components/header";
import {IoNewspaperOutline, IoRocketOutline} from 'react-icons/io5';
import {HiOutlineBriefcase, HiOutlineBadgeCheck, HiShieldCheck} from 'react-icons/hi';
import {TbMessageCircle} from 'react-icons/tb';
import {FaBurn} from 'react-icons/fa';


const Home: NextPage = () => {
    
  return (
    <div className=''>
      <Head>
        <title>goDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./assets/icon.png" />
      </Head>

      <main className='relative overflow-x-hidden'>
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className='grid cel:grid-cols-1 tab:grid-cols-1 lap:grid-cols-3 mt-20 container mx-auto items-center justify-center'>
            <div className='flex cel:w-48 tab:w-48 lap:w-auto xl:w-auto cel:mx-auto '>
              <img  src="./assets/astronauta.svg" alt=""/>
            </div>
            <div className='text-white text-center items-center flex flex-col'>
              <p className='text-6xl cel:text-4xl cel:mt-14 tab:text-5xl lap:text-6xl bg-textGradient bg-clip-text text-transparent font-bold mt-28'>Acelere seu <br/>desenvolvimento</p>
              <p className='text-2xl cel:text-lg tab:text-xl lap:text-2xl mt-4'>Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocrácia.</p>
              <div className='mt-8'>
                <Button onClick={()=>{}} bold={true} textSize="text-lg" text="Construa seu projeto" width='w-[300px]' height='h-10'/>
              </div>
            </div>
            <div className='flex cel:hidden tab:hidden lap:inline-block xl:inline-block justify-center lap:w-auto '>
              <img src="./assets/nave.svg" alt="" />
            </div>
          </div> 
          <div className='flex flex-col items-center justify-center text-center mt-44 cel:mt-32 mb-12'>
              <div className='flex items-center justify-center'>
                <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700"/>
                <p id="sobre" className='bg-textGradient bg-clip-text text-clip text-transparent font-bold text-4xl mx-4 pb-2'>goDev</p>
                <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700"/>
              </div>
              <div className='text-white flex flex-col justify-center items-center'>
                <p className='text-3xl cel:text-2xl'>Como funciona a plataforma</p>
                <p className='text-xl cel:text-base'>Com a GoDev, é possível tirar suas ideias do papel. Conheça alguns benefícios da nossa solução!</p>
              </div>
          </div>
          <div className='grid cel:grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 gap-4 w-fit mb-5 container mx-auto'>
            <Card title='Burocracia' text='Profissionais de TI disponível para sua empresa sem a burocracia de contratação' icon={<HiOutlineBriefcase size={35}/>}/>
            <Card title='Praticidade' text='Praticidade para tirar o seu projeto do papel' icon={<IoRocketOutline size={35}/>}/>
            <Card title='Segurança' text='Transparência e confiança desde o desenvolvimento a entrega' icon={<HiShieldCheck size={35}/>}/>
            <Card title='Exclusividade' text='Praticidade para tirar o seu projeto do papel' icon={<FaBurn size={35}/>}/>
            <Card title='Especialistas' text='Equipes especializadas em diversos tipos de linguagem de programação' icon={<HiOutlineBadgeCheck size={35}/>}/>
            <Card title='Automação' text='Tecnologias para diferenciar sua empresa, e conectar-se cada vez mais com seus clientes' icon={<TbMessageCircle size={35}/>}/>
          </div>
        </div>
      </main>
      
      <footer >
        
      </footer>
    </div>
  )
}

export default Home
