import { useNavigate } from 'react-router-dom';
import './button.scss';

const Button = (props) => {
    const {label, addClass, onClick, type} = props,
          classes = addClass ? 'button ' + addClass : 'button',
          navigate = useNavigate();

    return (
        <button onClick={() => {
           if (onClick) {
            navigate(-1);
           }
        }}
        type={type} 
        className={classes}>
            {label}
        </button>
    )
}

export default Button;


