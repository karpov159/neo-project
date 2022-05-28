

import './input.scss';


const Input = (props) => {
    const {label, placeholder, icon} = props;
          
    return (
        <div className="input">
            <span className='input__span'>{label}</span>
            <input type="text" placeholder={placeholder} />
            <img className='input__icon' src={icon} alt="icon"/>
        </div>
    )
}

export default Input;