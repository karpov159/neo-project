import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getClaimType from '../../helpers/getClaimType';
import claimTypes from '../../helpers/claimTypes';
import { useDispatch } from 'react-redux';
import { createNewClaim } from '../../store/ClaimsSlice';
import validateStr from '../../helpers/validateStr';
import ErrorInput from '../../Shared/Errors/ErrorInput';
import Title from '../../Shared/Title/Title';
import Input from '../../Shared/Input/Input';
import Button from '../../Shared/Button/Button';
import DropDownInput from '../../Shared/Input/DropDownInput';

import IconDown from '../../assets/icons/icon-chevron-down.png';
import './Create-new-claim.scss';

const CreateNewClaim = ({setSearchInput}) => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setSearchInput(false);
        return () => {
            setSearchInput(true);
        }
    })

    const changeValue = (e, func) => {
        func(e.target.value)

        setErrors(() => ({
            title: validateStr(title) ? 'Please type claim title' : false,
            description: validateStr(description) ? 'Please type claim description' : false
        }))
    }

    const changeDropDown = (option) => {
        setType(option)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!errors.title && !errors.description) {
            dispatch(createNewClaim({
                title, 
                description,
                "type": getClaimType(type)
            }))
            .unwrap()
            .then(() => navigate(-1));
        }
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
                {errors.title ? <ErrorInput text={errors.title}/> : null}

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
                onChange={(e) => changeValue(e, setDescription)} 
                value={description} 
                addClass={'input-block_mt40'}
                label={'DESCRIPTION'} 
                placeholder={'Type claim description'}/>
                {errors.description ? <ErrorInput text={errors.description}/> : null}
                
                <div className="new-claim__btns">
                    <Button type="button" onClick={() => navigate(-1)} addClass={'button_cancel'} label={'Cancel'}/>
                    <Button type="submit" label={'Create'}/>
                </div>
            </form>
        </div>

    )
}

export default CreateNewClaim;