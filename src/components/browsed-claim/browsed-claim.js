/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Title from '../generic/title/title';
import useProjectService from '../../services/ProjectService';
import Button from '../generic/button/button';
import { useParams } from 'react-router-dom';
import getBallColor from '../../helpers/getBallColor';
import getClaimType from '../../helpers/getClaimType';
import { useNavigate } from 'react-router-dom';

import IconDown from '../../assets/icons/icon-chevron-down.png'

import './browsed-claim.scss';

const BrowsedClaim = (props) => {
    const {setSearchInput} = props,
          [title, setTitle] = useState(''),
          [type, setType] = useState(''),
          [descr, setDescr] = useState(''),
          {claimId} = useParams(),
          {getClaim, updateClaim, error, clearError} = useProjectService(),
          navigate = useNavigate();

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
    // вынести в отдельную функцию(?)
    const onUpdateClaim = (status) => {
        clearError();
        updateClaim({
            "title": title, 
            "description": descr, 
            "type": getClaimType(type),
            'status': status
        }, claimId)
        .then(navigate(-1))
    }

    return (
        <div className="browse-claim">
            <Title title={'Incoming claim'}/>
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
                {error ? <div className='error'>{error.message}</div> : null}
            <div className="browse-claim__btns">
                <Button onClick={() => navigate(-1)} addClass={'button_cancel'} label={'Cancel'}/>
                <Button onClick={() => onUpdateClaim('done')}label={'Done'}/>
                <Button onClick={() => onUpdateClaim('decl')}addClass={'button_decline'} label={'Decline'}/>
            </div>
    </div>
    )   
}

export default BrowsedClaim;