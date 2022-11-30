import Link from 'next/link'
import {FaFacebook,FaInstagram,FaGithub,FaCopyright, FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
    return(
        <div className="relative py-5 pt-8 flex flex-col items-center 
        md:flex-row gap-2 
        px-10 md:px-16 lg:px-32
        text-white justify-between flex-shrink-0 ">
            <div className='flex items-center gap-3'>
                <a href="https://www.facebook.com/profile.php?id=100085246966884" target="blank">
                    <FaFacebook className="text-2xl md:text-3xl text-zinc-400 hover:opacity-50 cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/godevofc/" target="blank">
                    <FaInstagram className="text-2xl md:text-3xl text-zinc-400 hover:opacity-50 cursor-pointer"/>
                </a>
                <a href="">
                    <FaLinkedin className="text-2xl md:text-3xl text-zinc-400 hover:opacity-50 cursor-pointer"/>
                </a>
            </div>
            <div className='flex items-center gap-2 text-zinc-400'>
                <span>GoDev - 2022 - </span>
                <FaCopyright className='text-zinc-400'/> 
                <span className='text-zinc-400'>Todos os direitos reservados</span> 
            </div>
        </div>
    )
}