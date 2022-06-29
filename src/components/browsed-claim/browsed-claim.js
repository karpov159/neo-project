import { useEffect, useState } from 'react';
import Title from '../generic/title/Title';
import Button from '../generic/button/Button';
import { updateClaim, getClaim } from '../claims-list/ClaimsSlice';
import { useDispatch } from 'react-redux';
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
          [description, setDescription] = useState(''),
          {claimId} = useParams(),
          dispatch = useDispatch(),
          navigate = useNavigate();

    useEffect(() => {
        dispatch(getClaim(claimId))
        .unwrap()
        .then(claim => {
            setTitle(claim.title);
            setType(claim.type);
            setDescription(claim.description)
        })
        .catch(() => {
            setTitle('no data');
            setType('no data');
            setDescription('no data')
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [claimId])

    useEffect(() => {
        setSearchInput(false);
        return () => {
            setSearchInput(true);
        }
    })

    const onUpdateClaim = (status) => {
        const updatedClaim = {
            body: {
                title, 
                description, 
                "type": getClaimType(type),
                status
            },
            claimId
        }
        dispatch(updateClaim(updatedClaim))
        .unwrap()
        .then(() => navigate(-1));
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
                    <div className="browse-claim__text">{description}</div>
                </div>
                {null ? <div className='error'>'fdfd</div> : null}
            <div className="browse-claim__btns">
                <Button onClick={() => navigate(-1)} addClass={'button_cancel'} label={'Cancel'}/>
                <Button onClick={() => onUpdateClaim('done')}label={'Done'}/>
                <Button onClick={() => onUpdateClaim('decl')}addClass={'button_decline'} label={'Decline'}/>
            </div>
    </div>
    )   
}

export default BrowsedClaim;