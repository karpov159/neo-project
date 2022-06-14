import { useRef, useState, useEffect } from "react";

const DropDownInput = (props) => {

    // устанавливает открыт список или нет
    const [active, setActive] = useState(false);
    // привязывает к выпадающему списку
    const DropDownInput = useRef(null);
    // обработчик события для закрытия списка опций по клику  
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

    const {label, placeholder, icon, addClass, options, onChange, value, readOnly} = props,
          classes = addClass ? 'input-block ' + addClass : 'input-block';

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
            readOnly={readOnly}
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
            options={options} 
            onChange={onChange} 
            toggleActive={toggleActive}
            />}
        </div>
    )
}

const View = (props) => {
    const {options, onChange, toggleActive } = props;

    const ballColor = (type) => {
        switch (type) {
            case 'Software':
                return '#FF7675';
            case 'Troubleshooting':
                return '#6C5CE7';
            case 'Networking':
                return '#FDCB6E';
            default:
                return '#7DB59A';
            }   
        } 

    return (
        
        <div  className="input-block__content">
        {options.map((option) => (
            <div 
            onClick={
                (e) => {
                onChange(option);
                toggleActive(false);
                }}
            key={option}
            className="input-block__option">
                <span style={{'background': `${ballColor(option)}`}} className="input-block__ball"></span>
                <div className="input-block__item">
                {option}
                </div>    
            </div>
        ))}

        </div>
    )
}

export default DropDownInput;