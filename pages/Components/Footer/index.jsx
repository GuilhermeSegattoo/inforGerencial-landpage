import {FaFacebook,FaInstagram,FaGithub,FaCopyright} from 'react-icons/fa'

export const Footer = () => {
    return(
        <div className="relative py-5 px-10 md:px-16 lg:px-32 flex flex-col items-center md:flex-row gap-2 text-white justify-between mb-4 flex-shrink-0 ">
            <div className='flex items-center gap-3'>
                <FaFacebook className="text-2xl lg:text-3xl text-zinc-400"/>
                <FaInstagram className="text-2xl lg:text-3xl text-zinc-400"/>
                <FaGithub className="text-2xl lg:text-3xl text-zinc-400"/>
            </div>
            <div className='flex items-center gap-2 text-zinc-400'>
                <FaCopyright className='text-zinc-400'/> 
                <span className='text-zinc-400'>Todos os direitos reservados</span> 
            </div>
        </div>
    )
}