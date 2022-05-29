import './button.scss';

const Button = (props) => {
    const {label, addClass, onToggle} = props,
          classes = addClass ? 'button ' + addClass : 'button';
    return (
        <button onClick={onToggle} className={classes}>
            {label}
        </button>
    )
}

export default Button;


