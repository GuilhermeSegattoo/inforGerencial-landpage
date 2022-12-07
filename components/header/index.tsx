import { Button } from "../button";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { useState } from "react";
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    return (
        <nav className="bg-black flex items-center justify-center cel:px-5 px-14 w-full z-[99] shadow h-16 lg:h-[85px]">
            <section className="container items-center flex cel:justify-center tab:justify-between lap:justify-between">
                <div className="cel:flex cel:justify-center cel:items-center cel:text-center lap:">
                    <img src="assets/logo.png"  alt="" />
                </div>
                <ul className="flex xl:gap-16 tab:gap-4 cel:hidden tab:inline-flex lap:inline-flex xl:inline-flex">
                    <a href="">
                        <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                            <span>Início</span>
                        </li>
                    </a>
                    <a href="#sobre">
                        <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                            <span>Sobre</span>
                        </li>
                    </a>
                    <a>
                        <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                            Nossa solução
                        </li>
                    </a>
                    <a>
                        <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                            <span>Tecnologias</span>
                        </li>
                    </a>
                </ul>
                <div className="cel:hidden tab:inline-block lap:inline-block xl:inline-block">
                    <Button text="Entre em contato" height="h-7" onClick={() => {}} />
                </div>
            </section>
            <section className="lg:hidden">
                <div className="text-[#D30490] cursor-pointer" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                    <GiHamburgerMenu />
                </div>
            </section>
            {
                isMenuOpen ? (
                    <section className="lg:hidden bg-black absolute top-16 left-0 w-full flex flex-col items-center justify-center">
                        <ul className="flex flex-col">
                            <a href="">
                                <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    <span>Início</span>
                                </li>
                            </a>
                            <a href="#sobre" onClick={()=>closeMenu()}>
                                <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    <span>Sobre</span>
                                </li>
                            </a>
                            <a>
                                <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
                                    Nossa solução
                                </li>
                            </a>
                            <a>
                                <li className="cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8">
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