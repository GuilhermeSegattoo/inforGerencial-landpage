import {FaFacebook,FaInstagram,FaGithub,FaCopyright} from 'react-icons/fa'

export const Footer = () => {
    return(
        <div className="relative mx-40 flex text-white justify-between flex-shrink-0">
            <div className='flex items-center gap-3'>
                <FaFacebook />
                <FaInstagram />
                <FaGithub />
            </div>
            <div className='flex items-center'>
                <FaCopyright/> 
                <span>Todos os direitos reservados</span> 
            </div>
        </div>
    )
}