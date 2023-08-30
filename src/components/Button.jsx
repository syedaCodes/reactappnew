const Button = ({ children, onHandleClick }) => {
    return (
        <button className="btn-primary" onClick={onHandleClick}>
            {children}
        </button>
    );
};

export default Button;
