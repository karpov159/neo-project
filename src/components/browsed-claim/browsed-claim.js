import { useEffect, useState } from 'react';
import Title from '../title/title';
import Input from '../input/input';
import Button from '../button/button';

import IconDown from '../../assets/icons/icon-chevron-down.png'


import './browsed-claim.scss';

const BrowsedClaim = (props) => {
    const {id, data, showClaim, setSearchInput} = props,
          [title, setTitle] = useState(),
          [type, setType] = useState(),
          [descr, setDescr] = useState();


    useEffect(() => {
        data.forEach(item => {
            if (item.key === id) {
                setTitle(item.title);
                setType(item.type);
                setDescr('some descr')
            }
        })
    }, [id])

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