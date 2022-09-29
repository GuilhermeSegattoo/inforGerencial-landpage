import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>goDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative min-h-screen'>
        <div className="flex flex-col relative min-h-screen h-full">
          <Header />
            <div className='lg:px-32 lg:py-10 lg:h-5/6 block'>
              <div className=" max-w-max relative grid px-16 py-5 lg:grid-cols-2 lg:px-24 lg:py-24 items-center text-white justify-between
                bg-zinc-400/5 rounded-lg h-full ">
                <div className="order-last md:order-none">
                  <h1 className="bg-textGradient text-5xl md:text-6xl lg:text-7xl text-clip 
                  text-center md:text-justify
                  text-transparent bg-clip-text my-5 animate-fade ">
                    Em Breve
                  </h1>
                  <p className="text-white text-xl text-center md:text-justify animate-fade">A goDev nasceu do espirito e da vontade de empreender dos estudantes de computação da Universidade Federal Rural do Semiárido, e de levar vocês em uma jornada pensada para conduzir suas mentes em um processo de construção visual e tecnológica, dentro do espectro do desenvolvimento digital. Os olhos estão abrindo, e a você não vai querer perder esse nascimento.</p>
                </div>
                <div className="flex items-center justify-center animate-fade">
                  {/*<img src="./assets/fontImage.png" width={400} alt=""/>*/}
                  <img src="./assets/cabeca.png" width={400} className="lg:h-[659px] lg:w-[755px] -z-10 lg:absolute" alt="" />
                </div>
              </div>
            </div>
          <Footer />
        </div>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}

export default Home
