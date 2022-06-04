import { useState, useEffect, useRef } from 'react';

import './input.scss';


const Input = (props) => {

    const [active, setActive] = useState(false);
    const DropDownInput = useRef(null);
    
    useEffect(() => {
        const handleCLick = (e) => {
            if (DropDownInput.current && !DropDownInput.current.contains(e.target)) {
                setActive(false)
            }
        }

        document.addEventListener('click', handleCLick);
        return () => {
            document.removeEventListener('click', handleCLick);
        }
    }, [active, DropDownInput]);

    const toggleActive = () => {
        setActive(active => !active);
    }

    const disabledInput = () => {
        onChange('');
    }

    const {label, placeholder, icon, addClass, options, onChange, value, dropDown, readOnly} = props,

          span = label ? <span className='input__span'>{label}</span> : null,

          img = icon ? <img className='input__icon' src={icon} alt="icon"/> : null,

          clickableImg = dropDown ? <img style={{'cursor': 'pointer'}}
          onClick={toggleActive}
          className='input__icon' src={icon} alt="icon"/> : null,

          classes = addClass ? 'input ' + addClass : 'input';
          
    
    const DropDown = () => {
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
        <div ref={DropDownInput} 
            className={classes}>
            {span}
            <input 
            onClick={dropDown ? toggleActive : null}
            onChange={dropDown ? disabledInput : onChange} 
            value={value}
            readOnly={readOnly}
            style={options ? {'cursor': 'pointer'} : null}
            required type="text" 
            placeholder={placeholder} />
            {clickableImg ? clickableImg : img}
            {dropDown ? <DropDown/> : null}
        </div>
    )
}

export default Input;