import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProjectService from '../../services/ProjectService';
import getClaimType from '../../libs/getClaimType';

import Title from '../title/title';
import Input from '../input/input';
import Button from '../button/button';
import DropDownInput from '../input/DropDownInput';

import IconDown from '../../assets/icons/icon-chevron-down.png';
import './create-new-claim.scss';

const CreateNewClaim = (props) => {

    const {setSearchInput} = props;

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [descr, setDescr] = useState('');
    const navigate = useNavigate();

    const {error, clearError, createNewClaim} = useProjectService();

    useEffect(() => {
        setSearchInput(false);
        return () => {
            setSearchInput(true);
        }
    })

    const changeValue = (e, func) => {
        func(e.target.value)
    }

    const changeDropDown = (option) => {
        setType(option)
    }

    const onSubmit = (e) => {
        clearError();
        e.preventDefault();
        createNewClaim({
            "title": title, 
            "description": descr, 
            "type": getClaimType(type)
        })
        // .then(results => results ? navigate(-1) : null);
    }

    const options = ['Hardware', 'Software', 'Troubleshooting', 'Networking'];
    return (
        <div className="new-claim">
            <Title title={'Creating new claim'}/>
            <form onSubmit={(e) => onSubmit(e) } className="new-claim__form">
                <Input 
                onChange={(e) => changeValue(e, setTitle)} 
                value={title} 
                addClass={'input-block_mt40'} 
                label={'TITLE'} 
                placeholder={'Type claim title'}/>
                
                <DropDownInput 
                icon={IconDown}
                onChange={changeDropDown}
                value={type}
                options={options}
                addClass={'input-block_mt40'} 
                label={'TYPE'} 
                placeholder={'Select type'}                
                />

                <Input 
                onChange={(e) => changeValue(e, setDescr)} 
                value={descr} 
                addClass={'input-block_mt40'} 
                label={'DESCRIPTION'} 
                placeholder={'Type claim description'}/>
                {error ? <div className='error'>Cant create new claim</div> : null}
                <div className="new-claim__btns">
                    <Button onClick addClass={'button_cancel'} label={'Cancel'}/>
                    <Button label={'Create'}/>
                </div>
            </form>
        </div>

    )
}

export default CreateNewClaim;