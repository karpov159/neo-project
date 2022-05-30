import { useState, useEffect } from 'react';
import ClaimsList from '../claims-list/claims-list';
import Title from '../title/title';
import IconPlus from '../../assets/icons/icon-plus.svg';

import './my-claims.scss';

const MyClaims = (props) => {
    const {onToggle, searchWord, dataFromTheServer} = props;

    const filterClaims = (searchWord, data) => {
        if (searchWord < 1) {
            console.log(data)
            return data;
        }

        return data.filter(item => item.title.toLowerCase().indexOf(searchWord.toLowerCase()) > -1);
    }

    const visibleData = searchWord ? filterClaims(searchWord, dataFromTheServer) : dataFromTheServer;

    return (
        <div className="my-claims">
            <div className="my-claims__headline">
                <Title title={'Your claims'}/>
                <button onClick={onToggle} className="my-claims__btn">
                    <img src={IconPlus} alt="plus"/>
                    Create claim
                </button>
            </div>
            <ClaimsList data={visibleData}/>
        </div>
    )
}

export default MyClaims;