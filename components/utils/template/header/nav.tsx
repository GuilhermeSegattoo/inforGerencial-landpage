import clsx from "clsx"
import { NavItem } from "./navItem"

interface Props {
    mode ?: string,
    onClick ?: Function
}

export const Nav = ({mode = "normal", onClick} : Props) => {

    const map : Array<{text : string, href : string}> = [
        {text : "Inicio"       , href : "#inicio"},
        {text : "Sobre"        , href : "#sobre"},
        {text : "Nossa solução", href : "#solucao"},
        {text : "Tecnologias"  , href : "#contato"}
    ]
    
    return (
        <nav>
            <ul className={
                clsx("", {
                    "flex xl:gap-16 tab:gap-4 cel:hidden tab:inline-flex lap:inline-flex xl:inline-flex justify-center items-center" : mode == "normal",
                    "flex flex-col" : mode == "tel"
                })
            }>
                {map.map(({text, href}, _) => 
                    <NavItem key={text} text={text} href={href} mode={mode} onClick={onClick}/>
                )}
            </ul>
        </nav>
    )
}