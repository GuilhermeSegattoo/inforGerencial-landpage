import clsx from "clsx"

interface Props {
    text : string,
    href : string,
    mode ?: string,
    onClick ?: Function
}

export const NavItem = ({text, href, mode, onClick=()=>{}} : Props) => {
    return (
        <li 
        onClick={() => { console.log(mode) ; mode == "tel" ? onClick() : null }}
        className={
            clsx("",{
                "cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline" : mode == "normal",
                "flex justify-center cursor-pointer text-slate-100 text-sm font-normal hover:text-white link-underline p-8" : mode == "tel"
            })
        }>
            <a href={href} className="p-8 sm:p-5 lg:p-8 inline-block">
                <span>{text}</span>
            </a>
        </li>
    )
}