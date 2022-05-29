import { useState, useEffect, createRef } from 'react';

import './input.scss';


const Input = (props) => {

    const [active, setActive] = useState(false);
    const ref = createRef();
    
    // закрытие инпута кликом вне окна
    const handleCLick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setActive(false)
        }
    
    }

    useEffect(() => {
        document.addEventListener('click', handleCLick);
        return () => {
            document.removeEventListener('click', handleCLick);
        }
    })

    const toggleActive = () => {
        setActive(active => !active);
    }

    const disabledInput = () => {
        onChange('');
    }

    const {label, placeholder, icon, addClass, options, onChange, value, dropDown} = props,
          span = label ? <span className='input__span'>{label}</span> : null,
          img = icon ? <img className='input__icon' src={icon} alt="icon"/> : null,
          clickableImg = dropDown ? <img style={{'cursor': 'pointer'}}
          onClick={toggleActive}
          className='input__icon' src={icon} alt="icon"/> : null,
          classes = addClass ? 'input ' + addClass : 'input';
          
    
    const showDropDown = () => {
        return ( active &&
            <div  className="input__content">
                {options.map((option) => (
                <div
                key={option}
                onClick={(e) => {
                onChange(option);
                toggleActive(false);
                }}
                className="input__item"
                >
                {option}
                </div>
                ))}
            </div>
        )
    }

    return (
        <div ref={ref} className={classes}>
            {span}
            <input  onClick={toggleActive}
            onChange={dropDown ? disabledInput : onChange} 
            value={value} 
            style={options ? {'cursor': 'pointer'} : null}
            required type="text" 
            placeholder={placeholder} />
            {clickableImg ? clickableImg : img}
            {dropDown ? showDropDown() : null}
        </div>
    )
}

export default Input;