import { Button } from "../../utils/button"

export const Contato = () => {
    return (
        <section id="contato" className='flex lg:h-screen justify-center items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-4xl mt-2' >
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
    )
}