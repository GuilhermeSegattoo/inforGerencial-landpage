
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    appendClassName : string
    children : string | JSX.Element | undefined
}

export const Button = ({appendClassName,children, ...rest}: ButtonProps) => {
    return (
        <button 
            className={`cursor-pointer flex rounded p-4 text-center justify-center items-center
            bg-white text-blue-800 hover:bg-blue-300 ${appendClassName}`} 
            {...rest}
        >
            {children}
        </button>
    )
}