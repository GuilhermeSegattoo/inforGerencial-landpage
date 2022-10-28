import { Button } from "../button"

export const Header = () => {
    return (
        <div className="bg-black flex cel:justify-center tab:justify-between lap:justify-between items-center py-5 cel:py-3 cel:px-5 px-10">
            <div className="cel:flex cel:justify-center cel:items-center cel:text-center lap:">
                <img src="assets/logo.png" className="h-10" alt="" />
            </div>
            <ul className="flex xl:gap-16 tab:gap-4 cel:hidden tab:inline-flex lap:inline-flex xl:inline-flex lap:gap-14  ">
                <a href=""><li className="cursor-pointer text-white text-sm font-normal" href="#sobre">Início</li></a>
                <a href="#sobre"><li className="cursor-pointer text-white text-sm font-normal">Sobre</li></a>
                <li className="cursor-pointer text-white text-sm font-normal">Nossa solução</li>
                <li className="cursor-pointer text-white text-sm font-normal">Tecnologias</li>
            </ul>
            <div className="cel:hidden tab:inline-block lap:inline-block xl:inline-block">
                <Button text="Entre em contato" height="h-7" />
            </div>
        </div>
    )
}