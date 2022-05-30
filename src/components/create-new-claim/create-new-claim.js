import { useState } from 'react';

import Title from '../title/title';
import Input from '../input/input';
import Button from '../button/button';

import IconDown from '../../assets/icons/icon-chevron-down.png'
import './create-new-claim.scss';

const CreateNewClaim = (props) => {

    const {onToggle} = props;

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [descr, setDescr] = useState('');


    const changeValue = (e, func) => {
        func(e.target.value)
    }

    const changeDropDown = (option) => {
        setType(option)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            'title' : title,
            'type': type,
            'descr': descr
        })
        setTitle('')
        setType('')
        setDescr('')
        onToggle();
    }

    const options = ['Hardware', 'Software', 'Troubleshooting', 'Networking'];
    return (
        <div className="new-claim">
            <Title title={'Creating new claim'}/>
            <form onSubmit={(e) => onSubmit(e) } className="new-claim__form">
                <Input 
                onChange={(e) => changeValue(e, setTitle)} 
                value={title} 
                addClass={'input_mt40'} 
                label={'TITLE'} 
                placeholder={'Type claim title'}/>
                <Input 
                dropDown={true}
                icon={IconDown}
                onChange={changeDropDown}
                value={type} 
                options={options}
                addClass={'input_mt40'} 
                label={'TYPE'} 
                placeholder={'Select type'} />
                <Input 
                onChange={(e) => changeValue(e, setDescr)} 
                value={descr} 
                addClass={'input_mt40'} 
                label={'DESCRIPTION'} 
                placeholder={'Type claim description'} />
                <div className="new-claim__btns">
                    <Button onToggle={onToggle} addClass={'button_cancel'} label={'Cancel'}/>
                    <Button label={'Create'}/>
                </div>
            </form>
        </div>

    )
}

export default CreateNewClaim;