interface Props {
    text: string,
}

const Text = ({text}: Props) => {
    return (
        <p className="text-3xl text-justify leading-normal tracking-widest">
            {text}
        </p>
    );
};

export default Text;