import { Button } from "../button";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { useState } from "react";
export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    
    return (
        <nav className="bg-black bg-opacity-50 flex items-center justify-center cel:px-5 px-14 w-full z-[99] shadow h-16 lg:h-[85px] fixed">
            <section role="menubar" aria-label="navigation menu bar"  className="container items-center flex cel:justify-center tab:justify-between lap:justify-between">
                <div className="w-28 cel:flex cel:justify-center cel:items-center cel:text-center lap:">
                    <img src="assets/logo.svg"  alt="logo" />
                </div>
                <ul className="flex xl:gap-16 tab:gap-4 cel:hidden tab:inline-flex lap:inline-flex xl:inline-flex justify-center items-center">
                    <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline">
                        <a href="#inicio" className="p-8 sm:p-5 lg:p-8 inline-block">
                            <span>Início</span>
                        </a>
                    </li>
                    <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline">
                        <a href="#sobre" className="p-8 sm:p-5 lg:p-8 inline-block">
                            <span>Sobre</span>
                        </a>
                    </li>
                    <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline">
                        <a href="#solucao" className="p-8 sm:p-5 lg:p-8 inline-block">
                            <span>Nossa solução</span>
                        </a>
                    </li>
                    <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline">
                        <a href="#contato" className="p-8 sm:p-5 lg:p-8 inline-block">
                            <span>Tecnologias</span>
                        </a>
                    </li>
                </ul>
                <div className="cel:hidden tab:inline-block lap:inline-block xl:inline-block">
                    <a href="#contato">
                        <Button appendClassName="h-6 w-48">
                            <p className="text-white">Entre em contato</p>
                        </Button>
                    </a>
                </div>
            </section>
            <section role="menu" aria-label="navigation menu button" className="block cel:inline-block tab:hidden lap:hidden xl:hidden">
                <div className="text-[#D30490] cursor-pointer" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                    <GiHamburgerMenu size={30} />
                </div>
            </section>
            {
                isMenuOpen ? (
                    <section className="lg:hidden bg-black absolute top-16 left-0 w-full flex flex-col items-center justify-center ">
                        <ul className="flex flex-col">
                            <a href="#inicio" onClick={()=>closeMenu()}>
                                <li className="flex justify-center cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    <span>Início</span>
                                </li>
                            </a>
                            <a href="#sobre" onClick={()=>closeMenu()}>
                                <li className="flex justify-center cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    <span>Sobre</span>
                                </li>
                            </a>
                            <a href="#solucao" onClick={()=>closeMenu()}>
                                <li className="flex justify-center cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    Nossa solução
                                </li>
                            </a>
                            <a>
                                <li className="flex justify-center cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    <span>Tecnologias</span>
                                </li>
                            </a>
                        </ul>
                    </section>
                ) : null
            }

        </nav>
    )
}