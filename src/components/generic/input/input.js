import './input.scss';

const Input = ({label, placeholder, icon, addClass, onChange, value, name, type, error}) => {
    const span = label ? <span className='input-block__span'>{label}</span> : null,
          img = icon ? <img className='input-block__icon' src={icon} alt="icon"/> : null,
          classes = addClass ? 'input-block ' + addClass : 'input-block',
          inputClasses = error ? 'input-block__input input-block__input_error' : 'input-block__input';

    return (
        <div  
            className={classes}>
            {span}
            <input
            name={name}
            className={inputClasses}
            onChange={onChange} 
            value={value}
            type={type}
            required
            placeholder={placeholder} />
            {img}
        </div>
    )
}

export default Input;