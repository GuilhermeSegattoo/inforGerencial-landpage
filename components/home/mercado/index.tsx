export const Mercado = () => {
    return (
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
    )
}