import './button.scss';

const Button = (props) => {
    const {label, addClass} = props,
          classes = addClass ? 'button ' + addClass : 'button';
    return (
        <button className={classes}>
            {label}
        </button>
    )
}

export default Button;


