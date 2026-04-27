interface Props {
    text: string,
}

const Button = ({text} : Props) => {
    return (
        <div className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white`}>
            {text}
        </div>
    );
};

export default Button;