import { Button } from "../../utils/button"

export const Inicio = () => {
    return (
        <section id="inicio" role="contentinfo" aria-labelledby='inicio' className='flex pt-16 pb-16 mx-6 my-10 w-screen items-center justify-around lg:h-screen'>            
          
            <div className='grid grid-cols-1 text-white tab:text-start cel:text-center items-center flex-wrap justify-center z-50'>
                <div className='cel:text-4xl cel:mt-14 tab:text-4xl tab:w-[300px] lap:w-[600px] lap:text-5xl desk:text-7xl  bg-textGradient bg-clip-text text-transparent font-bold mt-28'>
                    <h1>Acelere seu <br /> desenvolvimento</h1>
                </div>
                
                <p className='cel:text-lg tab:text-lg lap:text-xl desk:text-2xl mt-4 text-slate-100'>
                    Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocracia.
                </p>
                <div className='mt-8 flex cel:justify-center tab:justify-start'>
                    <Button onClick={() => { }} appendClassName='w-[300px] h-10' >
                        <span className='text-lg text-white font-bold'>Construa seu projeto</span>
                    </Button>
                </div>
            </div>
            <div className='flex cel:hidden tab:hidden lap:inline-block xl:inline-block lap:w-auto'>
                <div className='relative h-[350px] w-[400px]'>
                    <img className='absolute bottom-5 left-0 z-50 floating w-44 ' src='./assets/rocket/rocketWithFire.svg' alt='foguete' />
                    <img className='absolute top-10 left-5 z-30 spin' src='./assets/rocket/planets.svg' alt='planeta' />
                    <img className='absolute top-0 left-0 z-20 pulse ' style={{ animationDelay: "5s" }} src='./assets/rocket/starts1.svg' alt='estrela' />
                </div>
            </div>
        </section>
    )
}