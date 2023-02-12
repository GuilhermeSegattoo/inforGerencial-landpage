export const Calculadora = () => {
    return (
        <section className='py-10 flex flex-col w-full justify-center items-center'>
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
        </section> 
    )
}