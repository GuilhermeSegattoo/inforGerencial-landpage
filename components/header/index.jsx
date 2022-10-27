import { Button } from "../button"

export const Header = () => {
    return (
        <div className="bg-black flex justify-between items-center py-5 px-10">
            <img src="assets/logo.png" className="h-10œ" alt="" />
            <ul className="flex gap-16">
                <li className="cursor-pointer text-white text-sm font-normal">Início</li>
                <li className="cursor-pointer text-white text-sm font-normal">Sobre</li>
                <li className="cursor-pointer text-white text-sm font-normal">Nossa solução</li>
                <li className="cursor-pointer text-white text-sm font-normal">Tecnologias</li>
            </ul>
            <div className="">
                <Button text="Agende uma demo" height="h-7" />
            </div>
        </div>
    )
}