interface Props {
    text: string,
    className?: string,
    callback?: () => void,
}

const Button = ({text, callback, className} : Props) => {
    return (
        <div
            onClick={callback ||(() => {})}
            className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white ${className ?? ''}`}>
            {text}
        </div>
    );
};

export default Button;