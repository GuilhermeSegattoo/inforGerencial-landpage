import logo from '../../assets/logo.png'
export const Header = () => {
    return (
        <div className="bg-black flex items-center">
            <img src={logo} className="h-10 ml-32 " alt="" />
        </div>
    )
}