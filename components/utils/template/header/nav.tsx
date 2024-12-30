import clsx from "clsx"
import { NavItem } from "./navItem"

interface Props {
    mode ?: string,
    onClick ?: Function
}

export const Nav = ({mode = "normal", onClick} : Props) => {

    const map : Array<{text : string, href : string}> = [
        {text : "Home"       , href : "#home"},
        {text : "Recursos"        , href : "#sobre"},
        {text : "Preços", href : "#solucao"},
        {text : "FAQ"  , href : "#contato"}
    ]
    
    return (
        <nav>
            <ul className={
                clsx("", {
                    "flex xl:gap-16 tab:gap-4 cel:hidden tab:inline-flex lap:inline-flex xl:inline-flex justify-center items-center" : mode == "normal",
                    "flex flex-col text-3xl" : mode == "tel"
                })
            }>
                {map.map(({text, href}, _) => 
                    <NavItem key={text} text={text} href={href} mode={mode} onClick={onClick}/>
                )}
            </ul>
        </nav>
    )
}