import {FaFacebook,FaInstagram,FaGithub,FaCopyright} from 'react-icons/fa'

export const Footer = () => {
    return(
        <div className="relative mx-40 flex text-white justify-between mb-4 flex-shrink-0">
            <div className='flex items-center gap-3'>
                <FaFacebook size={30}/>
                <FaInstagram size={30}/>
                <FaGithub size={30}/>
            </div>
            <div className='flex items-center'>
                <FaCopyright/> 
                <span>Todos os direitos reservados</span> 
            </div>
        </div>
    )
}