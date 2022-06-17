import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProjectService from '../../services/ProjectService';
import getClaimType from '../../helpers/getClaimType';
import claimTypes from '../../helpers/claimTypes';

import Title from '../generic/title/title';
import Input from '../generic/input/input';
import Button from '../generic/button/button';
import DropDownInput from '../generic/input/DropDownInput';

import IconDown from '../../assets/icons/icon-chevron-down.png';
import './create-new-claim.scss';

const changeValue = (e, func) => {
    func(e.target.value)
}

const CreateNewClaim = ({setSearchInput}) => {

    const [title, setTitle] = useState(''),
          [type, setType] = useState(''),
          [descr, setDescr] = useState(''),
          navigate = useNavigate(),
          {error, clearError, createNewClaim} = useProjectService();

    useEffect(() => {
        setSearchInput(false);
        return () => {
            setSearchInput(true);
        }
    })

    const changeDropDown = (option) => {
        setType(option)
    }
    // вынести в отдельную функцию(?)
    const onSubmit = (e) => {
        clearError();
        e.preventDefault();
        createNewClaim({
            "title": title, 
            "description": descr, 
            "type": getClaimType(type)
        })
        .then(navigate(-1));
    }

    
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
                claimTypes={claimTypes}
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
                    <Button onClick={() => navigate(-1)} addClass={'button_cancel'} label={'Cancel'}/>
                    <Button label={'Create'}/>
                </div>
            </form>
        </div>

    )
}

export default CreateNewClaim;