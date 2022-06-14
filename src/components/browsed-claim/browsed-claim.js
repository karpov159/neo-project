import { useEffect, useState } from 'react';
import Title from '../title/title';
import Input from '../input/input';
import useProjectService from '../../services/ProjectService';
import Button from '../button/button';
import { useParams } from 'react-router-dom';
import getBallColor from '../../libs/getBallColor';

import IconDown from '../../assets/icons/icon-chevron-down.png'


import './browsed-claim.scss';

const BrowsedClaim = (props) => {
    const {showClaim, setSearchInput} = props,
          [title, setTitle] = useState(''),
          [type, setType] = useState(''),
          [descr, setDescr] = useState('');

    const {claimId} = useParams();
    const {getClaim} = useProjectService();


    useEffect(() => {
        getClaim(claimId).then(claim => {
                setTitle(claim.title);
                setType(claim.type ? claim.type.name : 'Type was not selected');
                setDescr(claim.description)
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
                {/* <Input
                value={title} 
                addClass={'input-block_mt40 input-block_gray'} 
                label={'TITLE'} 
                readOnly/>
                <Input
                icon={IconDown}
                value={type} 
                addClass={'input-block_mt40 input-block_gray'} 
                label={'TYPE'} 
                readOnly/>
                <Input
                value={descr} 
                addClass={'input-block_mt40 input-block_gray'} 
                label={'DESCRIPTION'} 
                placeholder={'Type claim description'} 
                readOnly/> */}
                <div className="browse-claim__item">
                    <span className="browse-claim__label">Title</span>
                    <div className="browse-claim__text">{title}</div>
                </div>
                <div className="browse-claim__item">
                    <span className="browse-claim__label">TYPE</span>
                    <div className="browse-claim__type">
                        <span style={{'background': `${getBallColor(type)}`}} className="browse-claim__ball"></span>
                        <div className="browse-claim__text">{type}</div>
                    </div>
                    <img src={IconDown} alt="icon-down" className="browse-claim__img" />
                </div>
                <div className="browse-claim__item">
                    <span className="browse-claim__label">DESCRIPTION</span>
                    <div className="browse-claim__text">{descr}</div>
                </div>
            <div className="browse-claim__btns">
                <Button onClick onToggle={() => showClaim(null)} addClass={'button_cancel'} label={'Cancel'}/>
                <Button label={'Done'}/>
                <Button addClass={'button_decline'} label={'Decline'}/>
            </div>
    </div>
    )   
}

export default BrowsedClaim;