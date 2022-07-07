import './Button.scss';

const Button = ({label, addClass, onClick, type}) => {
    const classes = addClass ? 'button ' + addClass : 'button';

    return (
        <button onClick={onClick}
        type={type} 
        className={classes}>
            {label}
        </button>
    )
}

export default Button;


