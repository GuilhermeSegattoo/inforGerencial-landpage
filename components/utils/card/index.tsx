
interface Props {
    title: string;
    text: string;
    icon: JSX.Element
}
export const Card = ({title,text,icon}:Props) =>{
    return (
        <div className="p-[0.85px] bg-inforColor hover:scale-105 duration-150 ease-in-out cursor-pointer rounded-3xl shadow-card ">
            <div className=" box-border rounded-3xl p-8 w-64 h-72 mx-auto ">
                <div className="text-white">{icon}</div>
                <div className="font-bold text-lg font text-white">{title}</div>
                <hr className="w-20 border-2 rounded bg-white mt-1 mb-6"/>
                <div className="text-white">{text}</div>
            </div> 
        </div>
    )
}