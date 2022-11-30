

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    text: string;
    color?: string;
    textColor?: string;
    width?: string;
    height?: string;
    textSize?: string;
    bold?: boolean;
}

export const Button = ({onClick,disabled,text,bold,color,textColor,textSize,width,height}: ButtonProps) => {
    return (
        <div className={`cursor-pointer flex rounded ${bold ? 'font-semibold' : '' } p-4 text-center justify-center items-center
            ${textSize ? textSize : ''} ${color ? color : 'bg-violet-800'} ${disabled ? 'disabled' : ''} 
            ${width ? width : 'w-auto'} ${height ? height : 'h-2'} hover:bg-violet-900`} onClick={onClick}>
            <p className={`${textColor ? textColor : 'text-white'}`} >{text}</p>
        </div>
    )
}