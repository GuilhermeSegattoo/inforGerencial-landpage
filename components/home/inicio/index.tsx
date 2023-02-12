import { Button } from "../../utils/button"

export const Inicio = () => {
    return (
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
    )
}