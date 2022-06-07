import { useEffect, useState } from 'react';
import Title from '../title/title';
import Input from '../input/input';
import Button from '../button/button';
import { useParams } from 'react-router-dom';

import IconDown from '../../assets/icons/icon-chevron-down.png'


import './browsed-claim.scss';

const BrowsedClaim = (props) => {
    const {claims, showClaim, setSearchInput} = props,
          [title, setTitle] = useState(''),
          [type, setType] = useState(''),
          [descr, setDescr] = useState('');

    const {claimId} = useParams();


    useEffect(() => {
        claims.forEach(item => {
            if (item.key === claimId) {
                setTitle(item.title);
                setType(item.type);
                setDescr('some descr')
            }
        })
    }, [claimId])

    useEffect(() => {
        setSearchInput(false);
        return () => {
            setSearchInput(true);
        }
    })




    return (
        <div className="browse-claim">
            <Title title={'Incoming claim'}/>
                <Input
                value={title} 
                addClass={'input_mt40 input_gray'} 
                label={'TITLE'} 
                readOnly/>
                <Input
                icon={IconDown}
                value={type} 
                addClass={'input_mt40 input_gray'} 
                label={'TYPE'} 
                readOnly/>
                <Input
                value={descr} 
                addClass={'input_mt40 input_gray'} 
                label={'DESCRIPTION'} 
                placeholder={'Type claim description'} 
                readOnly/>
                <div className="browse-claim__btns">
                    <Button onClick onToggle={() => showClaim(null)} addClass={'button_cancel'} label={'Cancel'}/>
                    <Button label={'Done'}/>
                    <Button addClass={'button_decline'} label={'Decline'}/>
                </div>
    </div>
    )   
}

export default BrowsedClaim;