export const Solucao = () => {
    return (
        <section id="solucao" className=' bg-black/25 flex flex-col justify-center items-center mb-1'>
            <div className='container mx-auto flex flex-col mt-20 max-w-4xl '>
                <div className='flex justify-center lg:text-start lg:flex-row items-center'>
                    <h2 className='text-white font-bold text-4xl p-4'>Os quatro E`s da GoDev</h2>
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
    )
}