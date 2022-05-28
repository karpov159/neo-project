

import './input.scss';


const Input = (props) => {
    const {label, placeholder, icon, addClass} = props,
          span = label ? <span className='input__span'>{label}</span> : null,
          classes = addClass ? 'input ' + addClass : 'input';
          
    return (
        <div className={classes}>
            {span}
            <input type="text" placeholder={placeholder} />
            <img className='input__icon' src={icon} alt="icon"/>
        </div>
    )
}

export default Input;