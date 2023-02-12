/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Header } from "../components/header";
import { IoNewspaperOutline, IoRocketOutline } from 'react-icons/io5';
import { HiOutlineBriefcase, HiOutlineBadgeCheck, HiShieldCheck } from 'react-icons/hi';
import { TbMessageCircle } from 'react-icons/tb';
import { FaBurn, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiCopyrightFill } from 'react-icons/ri'

const Home: NextPage = () => {
    return (
        <div className=''>
            <Head>
                <title>GoDev</title>

                <meta charSet="utf-8" />
                <meta name="author" content="GoDev" />
                <meta name="keywords" content="sites, web, desenvolvimento, development" />
                <meta name="description" content="Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocrácia com a GoDev. " />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, all" />

                {/* open graph protocol tags */}
                <meta property="og:title" content="GoDev" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.godevcompany.com.br" />
                <meta property="og:image" content="https://www.godevcompany.com.br/assets/icon.png" />
                <meta property="og:image:secure_url" content="https://www.godevcompany.com.br/assets/icon.png" />
                <meta property="og:image:alt" content="GoDev logo image" />
                <meta property="og:description" content="Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocrácia com a GoDev. " />
                <meta property="og:site_name" content="GoDev" />
                <meta property="og:locale" content="pt_BR" />


                <link rel="canonical" href="https://www.godevcompany.com.br" key="canonical" />

                <link rel="icon" href="./assets/icon.png" />
            </Head>

            <main className='relative overflow-x-hidden'>
                <div className="flex flex-col w-full h-full">
                    <Header />

                    <section id="inicio" role="contentinfo" aria-labelledby='inicio' className='grid cel:grid-cols-1 tab:grid-cols-1 lap:grid-cols-3 pt-16 pb-16 mx-auto my-10 items-center justify-center lg:h-screen'>
                        <div className='flex cel:w-48 tab:w-48 lap:w-auto xl:w-auto cel:mx-auto'>
                            <div className='relative h-[300px] w-[300px]'>
                                <img className='absolute bottom-0 right-0 z-30 floating' width={180} src='./assets/astroneer/astroneer.svg' alt='astronauta' />
                                <img className='absolute top-0 left-0 z-20 spin' width={300} src='./assets/astroneer/planets.svg' alt='planetas' />
                                <img className='absolute top-0 left-0 z-10 spin' width={300} src='./assets/astroneer/smoke.svg' alt='fumaça' />
                                <img className='absolute top-0 left-0 z-0 pulse' width={300} src='./assets/astroneer/stars.svg' alt='estrelas' />
                            </div>
                        </div>
                        <div className='text-white text-center items-center flex flex-col z-50'>
                            <div className='text-6xl cel:text-4xl cel:mt-14 tab:text-5xl lap:text-6xl bg-textGradient bg-clip-text text-transparent font-bold mt-28'>
                                <h1>Acelere seu <br /> desenvolvimento</h1>
                            </div>
                            <p className='text-2xl cel:text-lg tab:text-xl lap:text-2xl mt-4 px-2 text-slate-100'>
                                Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocracia.
                            </p>
                            <div className='mt-8'>
                                <Button onClick={() => { }} appendClassName='w-[300px] h-10' >
                                    <span className='text-lg text-white font-bold'>Construa seu projeto</span>
                                </Button>
                            </div>
                        </div>
                        <div className='flex cel:hidden tab:hidden lap:inline-block xl:inline-block justify-center lap:w-auto'>
                            <div className='relative h-[300px] w-[300px]'>
                                <img className='absolute bottom-5 left-0 z-50 floating w-44 ' src='./assets/rocket/rocketWithFire.svg' alt='foguete' />
                                <img className='absolute top-10 left-5 z-30 spin' src='./assets/rocket/planets.svg' alt='planeta' />
                                <img className='absolute top-0 left-10 z-20 pulse ' style={{ animationDelay: "5s" }} src='./assets/rocket/starts1.svg' alt='estrela' />
                                <img className='absolute top-0 left-0 z-20 pulse ' style={{ animationDelay: "5s" }} src='./assets/rocket/starts2.svg' alt='estrela' />
                            </div>
                        </div>
                    </section>

                    <section id="sobre" role="grid" aria-labelledby='sobre' className='bg-black/25 flex flex-col h-screen sm:h-auto'>
                        <div className='flex flex-col items-center justify-center text-center mt-16 mb-12'>
                            <div className='flex items-center justify-center'>
                                <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700" />
                                <p className='bg-textGradient bg-clip-text text-clip text-transparent font-bold text-4xl mx-4 pb-2'>GoDev</p>
                                <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700" />
                            </div>
                            <div className='text-white flex flex-col justify-center items-center'>
                                <h2 className='text-3xl cel:text-2xl'>Como funciona a plataforma</h2>
                                <h3 className='text-xl cel:text-base'>Com a GoDev, é possível tirar suas ideias do papel. Conheça alguns benefícios da nossa solução!</h3>
                            </div>
                        </div>
                        <div className='flex w-full justify-center px-10 lg:p-0'>
                            <div className='flex gap-x-11 gap-y-8 w-max p-2  mb-5 max-w-4xl overflow-auto lg:grid lg:grid-cols-3' tabIndex={0}>
                            <Card title='Burocracia' text='Profissionais de TI disponível para sua empresa sem a burocracia de contratação' icon=                   {<HiOutlineBriefcase size={35} />} />
                                <Card title='Praticidade' text='Praticidade para tirar o seu projeto do papel' icon={<IoRocketOutline size={35} />} />
                                <Card title='Segurança' text='Transparência e confiança desde o desenvolvimento a entrega' icon={<HiShieldCheck size={35} />} />
                                <Card title='Exclusividade' text='Sua tecnologia de forma única e estruturada para o seu negócio' icon={<FaBurn size={35} />} />
                                <Card title='Especialistas' text='Equipes especializadas em diversos tipos de linguagem de programação' icon={<HiOutlineBadgeCheck size={35} />} />
                                <Card title='Automação' text='Tecnologias para diferenciar sua empresa, e conectar-se cada vez mais com seus clientes' icon={<TbMessageCircle size={35} />} />
                            </div>
                        </div>
                    </section>
                    <section className=' bg-black/25 flex flex-col h-screen justify-center items-center'>
                        <div className='container mx-auto flex flex-col max-w-4xl'>
                            <div className='flex text-center lg:text-start'>
                                <p className='text-white font-bold text-4xl px-6'>Tire sua ideia do papel e transforme em lucro<span className='text-[#D30490]'>.</span></p>
                                <img className='hidden sm:hidden lg:block top-0 right-0 h-14' src='assets/icon.png' alt='icone da godev' />
                            </div>
                            <div className='p-10 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-[#D30490] text-3xl'>+426,9 <span className='text-white'>bi</span></span>
                                    <hr className="w-20 border-2 rounded bg-white"/>
                                    <p className='text-slate-100'>Faturamento anual em reais de empresas que têm sistemas tecnológicos</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-[#D30490] text-3xl'>+174 <span className='text-white'>bi</span></span>
                                    <hr className="w-20 border-2 rounded bg-white" />
                                    <p className='text-slate-100'>Aumento anual em reais para empresas que utilizam de sistemas online e aplicativos em seu negócio</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="solucao" className=' bg-black/25 flex flex-col justify-center items-center mb-10'>
                        <div className='container mx-auto flex flex-col mt-20 max-w-4xl '>
                            <div className='flex text-center lg:text-start flex-col lg:flex-row items-center'>
                                <h2 className='text-white font-bold text-4xl p-4'>A GoDev tira seu projeto do papel com os seguintes passos:</h2>
                                <div className='flex flex-col justify-end w-72 items-center lg:items-start'>
                                    <hr className="border-blue-800 w-20 border-1 rounded bg-white mt-2 mb-2" />
                                    <span className='text-slate-200'>Os quatro E`s da GoDev</span>
                                </div>
                            </div>
                            <div className='p-10 my-16 grid grid-cols-1 lg:grid-cols-2 gap-16'>
                                <div className='flex flex-col items-center gap-2'>
                                    <div className='relative'>
                                        <img src='assets/planets/neptune.svg' alt='planeta netuno' />
                                        <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 drop-shadow'>1</span>
                                    </div>
                                    <span className='font-bold text-white text-2xl'>Entrevista</span>
                                    <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                                    <p className='text-slate-100 text-center px-10'> Aqui entendemos o seu negócio e a sua ideia, para executar da melhor forma de acordo com sua expectativa.</p>
                                </div>

                                <div className='flex flex-col items-center gap-2'>
                                    <div className='relative'>
                                        <img src='assets/planets/mars.svg' alt='planeta marte' />
                                        <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 drop-shadow'>2</span>
                                    </div>
                                    <span className='font-bold text-white text-2xl'>Equipes</span>
                                    <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                                    <p className='text-slate-100 text-center px-10'>Organização da equipe com profissionais especializados na sua necessidade para desenvolver seu projeto.</p>
                                </div>

                                <div className='flex flex-col items-center gap-2'>
                                    <div className='relative'>
                                        <img src='assets/planets/jupiter.svg' alt='planeta jupiter' />
                                        <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 drop-shadow'>3</span>
                                    </div>
                                    <span className='font-bold text-white text-2xl'>Execução</span>
                                    <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                                    <p className='text-slate-100 text-center px-10'>Equipe atuando exclusivamente em seu projeto, com garantia de sigilo e qualidade entregue pela GoDev.</p>
                                </div>

                                <div className='flex flex-col items-center gap-2'>
                                    <div className='relative'>
                                        <img src='assets/planets/saturn.svg' alt='planeta saturno' />
                                        <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 drop-shadow'>4</span>
                                    </div>
                                    <span className='font-bold text-white text-2xl'>Entrega</span>
                                    <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                                    <p className='text-slate-100 text-center px-10'>Entrega do projeto totalmente funcional, sendo liberado para uso e seus clientes se conectarem o mais rápido possível.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className='py-10 flex flex-col w-full justify-center items-center'>
            <div className='container mx-auto flex flex-col mt-10 max-w-2xl'>
              <div className='flex justify-center lg:justify-start'>
                <h3 className='text-white font-bold text-4xl'>Calculando orçamento<span className='text-[#D30490]'>.</span></h3>
              </div>

              <div className='px-10 my-16 grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center gap-10 flex-col lg:flex-row'>
                  <div className='text-white'>
                    <h2 className='font-bold text-3xl'>R$ 0,00 /hora</h2>
                    <span>O valor por hora</span>
                  </div>
                  <div className='w-44 h-0.5 lg:w-0.5 rounded lg:h-44 bg-blue-600 mb-10 lg:mb-0'></div>
                </div>

                <div>
                  <form className="flex flex-col gap-10">
                    <div className='px-5'>
                      <div className='flex items-end'>
                        <input type="number" className='text-xl text-white bg-black/5 border-[#D30490] rounded-l-lg w-24 border-2 p-3' />
                        <label className='flex bg-[#D30490] justify-center text-base text-white font-semibold px-2 py-4 lg:px-2 whitespace-nowrap rounded-r w-full'>Quantidade de membros</label>
                      </div>
                      <span className='text-xs text-slate-200'>Quantos membros são necessários para o projeto?</span>
                    </div>
                    <div className='px-5'>
                      <div className='flex items-end'>
                        <input type="number" className='text-xl text-white bg-black/5 border-[#D30490] rounded-l-lg w-24 border-2 p-3' />
                        <label className='bg-[#D30490] text-base text-white font-semibold p-4 whitespace-nowrap rounded-r w-full'>Duração do projeto</label>
                      </div>

                      <span className='text-xs text-slate-200'>Quantos meses precisa para o projeto ser feito?</span>
                    </div>
                    <div className='px-5'>
                      <div className='flex items-end full'>
                        <input type="number" className='text-xl text-white bg-black/5 border-[#D30490] rounded-l-lg w-40 border-2 p-3' />
                        <label className='bg-[#D30490] text-base text-white font-semibold p-4 whitespace-nowrap rounded-r w-full'>Tecnologias</label>
                      </div>

                      <span className='text-xs text-slate-200'>Quais tecnologias serão usadas no projeto?</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section> */}

                    <section id="contato" className='flex lg:h-screen justify-center items-center'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-4xl'>
                            <div className='flex flex-col items-center gap-4'>
                                <h2 className='text-white text-3xl font-bold'>Agendar uma demo.</h2>
                                <span className='text-white text-center px-4'>Preencha o formulário abaixo e entre em contato com o nosso time comercial.</span>
                                <form className='flex flex-col justify-center items-center'>
                                    <div className='flex gap-3 flex-col sm:flex-row px-2'>
                                        <div className='flex flex-col'>
                                            <label htmlFor='form_name' className='text-white'>Nome</label>
                                            <input type="text" id='form_name' className='bg-white rounded w-80 sm:w-44 p-1' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor='form_last_name' className='text-white'>Sobrenome</label>
                                            <input type="text" id='form_last_name' className='bg-white rounded w-80 sm:w-44 p-1' />
                                        </div>
                                    </div>
                                    <div className='flex gap-3 flex-col sm:flex-row px-2'>
                                        <div className='flex flex-col'>
                                            <label htmlFor='form_email' className='text-white'>E-mail corporativo*</label>
                                            <input type="text" id='form_email' className='bg-white rounded w-80 sm:w-44 p-1' />
                                        </div>
                                        <div className='flex justify-start items-end gap-3'>
                                            <div className='flex flex-col'>
                                                <label htmlFor='form_cellphone' className='text-white'>celular</label>
                                                <input type="text" id='form_cellphone' className='bg-white rounded w-80 sm:w-44 p-1' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 flex-col sm:flex-row px-2'>
                                        <div className='flex flex-col'>
                                            <label htmlFor='form_office' className='text-white'>Qual é o seu cargo?*</label>
                                            <input type="text" id='form_office' className='bg-white rounded w-80 sm:w-44 p-1' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor='form_website' className='text-white'>Site da Empresa</label>
                                            <input type="text" id='form_website' className='bg-white rounded w-80 sm:w-44 p-1' />
                                        </div>
                                    </div>

                                    <div className='p-8'>
                                        <Button onClick={() => { }} appendClassName="text-lg h-10">
                                            <p className='text-white font-bold'>Fale com um Especialista</p>
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='flex cel:w-48 tab:w-48 lap:w-auto xl:w-auto cel:mx-auto '>
                                    <div className='relative h-80 w-80'>
                                        <img className='absolute bottom-44 lg:bottom-24 left-8 lg:left-10 z-30 w-24 lg:w-40' src='./assets/rocket_boy/OnlySmoke.svg' alt='fumaça' />
                                        <img className='absolute bottom-[200px] lg:bottom-32 left-7 lg:left-14 z-30 floating h-36 lg:h-60' src='./assets/rocket_boy/OnlyRocket.svg' alt='foguete' />
                                        <img className='absolute top-0 rigth-20 z-20 ' width={300} src='./assets/rocket_boy/Clouds.svg' alt='nuvens' />
                                        <img className='absolute top-0 left-0 z-0' width={300} src='./assets/rocket_boy/Stars.svg' alt='estrelas' />
                                        <img className='absolute top-0 left-0 z-20' width={300} src='./assets/rocket_boy/CharacterBase.svg' alt='character start' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </main>

            <footer className='bg-black min-h-[200px] py-10 px-4 sm:px-2'>
                <div className='container mx-auto justify-center sm:justify-between'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-5'>
                        <div className='w-32'>
                            <img src='assets/logo.svg' alt='logo da godev' />
                        </div>
                        <div className='text-slate-400 text-sm flex flex-col gap-4'>
                            <h2 className='text-2xl text-white'>Contato</h2>
                            <div className=''>
                                <a href="tel:+5584999398021">
                                    <h3>+55 (84) 99939-8021</h3>
                                </a>
                                <a href="mailto:atendimento@godevcompany.com.br">
                                    <h3>atendimento@godevcompany.com.br</h3>
                                </a>
                            </div>
                            <div>
                                <h4>Rua Francisco Mota Bairro, 572 - Pres. Costa e Silva</h4>
                                <h4>Mossoró - RN, 59625-900</h4>
                            </div>
                            <div className='flex gap-2 text-lg'>
                                <div className='hover:text-[#D30490]'>
                                    <a href="https://github.com/GoDev-Br" target="_blank" rel="noreferrer" aria-label='Link Para Nosso Github'>
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className='hover:text-[#D30490]'>
                                    <a href="https://www.linkedin.com/company/godevcompany/about/" target="_blank" rel="noreferrer" aria-label='Link para Nosso Linkedin'>
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className='hover:text-[#D30490]'>
                                    <a href="https://www.instagram.com/godevofc/" target="_blank" rel="noreferrer" aria-label='Link para Nosso Instagram'>
                                        <FaInstagram />
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className='text-slate-400 text-sm flex flex-col gap-4'>
                            <h2 className='text-2xl text-white'>Informações</h2>
                            <div className='hover:text-[#D30490]'>
                                <a href="#sobre">
                                    <h3>Sobre</h3>
                                </a>
                            </div>
                            <div className='hover:text-[#D30490]'>
                                <a href="#contato">
                                    <h3>Fale Conosco</h3>
                                </a>
                            </div>
                            <div className='hover:text-[#D30490]'>
                                <h3 className='cursor-pointer'>Termos e Condições</h3>
                            </div>
                        </div>

                    </div>
                    <div className='inline-block text-white'>
                        <div className='flex gap-2 justify-center items-center text-sm text-slate-400'>
                            <RiCopyrightFill />
                            <span>Todos os direitos reservados.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
