import getBallColor from '../../helpers/getBallColor';
import { useRef, useState, useEffect } from "react";

const DropDownInput = ({label, placeholder, icon, addClass, claimTypes, onChange, value}) => {

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
        onChange(value);
    }

    const classes = addClass ? 'input-block ' + addClass : 'input-block';

    return (
        <div 
        ref={DropDownInput} 
        className={classes}
        >
            <span className='input-block__span'>{label}</span>  
            <input 
            className='input-block__input'
            onClick={toggleActive}
            onChange={disabledInput} 
            value={value}
            required 
            type="text"
            placeholder={placeholder} 
            style={{'cursor': 'pointer'}}
            />
            <img style={{'cursor': 'pointer'}}
            onClick={toggleActive}
            className='input-block__icon' src={icon} alt="icon"
            /> 
            {active && 
            <View 
            claimTypes={claimTypes} 
            onChange={onChange} 
            toggleActive={toggleActive}
            />}
        </div>
    )
}

const View = ({claimTypes, onChange, toggleActive }) => {
    return (  
        <div  className="input-block__content">
        {claimTypes.map((claim) => (
            <div 
            onClick={
                () => {
                onChange(claim);
                toggleActive(false);
                }}
            key={claim}
            className="input-block__option">
                <span style={{'background': `${getBallColor(claim)}`}} className="input-block__ball"></span>
                <div className="input-block__item">
                {claim}
                </div>    
            </div>
        ))}
        </div>
    )
}

export default DropDownInput;