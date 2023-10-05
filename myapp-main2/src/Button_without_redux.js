function Button_without_redux({text, onClick}) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default Button_without_redux;