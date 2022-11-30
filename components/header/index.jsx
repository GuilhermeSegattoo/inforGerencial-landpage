import { Button } from "../button"

export const Header = () => {
    return (
        <nav className="bg-black flex items-center justify-center cel:px-5 px-14 ">
            <section className="container items-center flex cel:justify-center tab:justify-between lap:justify-between">
                <div className="cel:flex cel:justify-center cel:items-center cel:text-center lap:">
                    <img src="assets/logo.png" className="h-10" alt="" />
                </div>
                <ul className="flex xl:gap-16 tab:gap-4 cel:hidden tab:inline-flex lap:inline-flex xl:inline-flex  ">
                    <a href="">
                        <li className="cursor-pointer text-slate-100 text-sm font-normal link-underline p-5" href="#sobre">
                            <span>Início</span>
                        </li>
                    </a>
                    <a href="#sobre">
                        <li className="cursor-pointer text-slate-100 text-sm font-normal link-underline p-5">
                            <span>Sobre</span>
                        </li>
                    </a>
                    <a>
                        <li className="cursor-pointer text-slate-100 text-sm font-normal link-underline p-5">
                            Nossa solução
                        </li>
                    </a>
                    <a>
                        <li className="cursor-pointer text-slate-100 text-sm font-normal link-underline p-5">
                            <span>Tecnologias</span>
                        </li>
                    </a>
                </ul>
                <div className="cel:hidden tab:inline-block lap:inline-block xl:inline-block">
                    <Button text="Entre em contato" height="h-7" />
                </div>
            </section>
        </nav>
    )
}