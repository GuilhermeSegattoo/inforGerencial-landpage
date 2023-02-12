
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    appendClassName : string
    children : string | JSX.Element | undefined
}

export const Button = ({appendClassName,children, ...rest}: ButtonProps) => {
    return (
        <button 
            className={`cursor-pointer flex rounded p-4 text-center justify-center items-center
            bg-violet-800 hover:bg-violet-900 ${appendClassName}`} 
            {...rest}
        >
            {children}
        </button>
    )
}