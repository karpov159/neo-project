import { selectAll } from './ClaimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchClaims } from './ClaimsSlice';
import store from '../../store';

import Claim from './claim/Claim';
import Spinner from '../generic/spinner/Spiner';
import ErrorServer from '../generic/errors/ErrorServer';

import './claims-list.scss';

const ClaimsList = () => {

    const {claimsLoadingStatus, currentPage, searchInput, columnSort, orderSort} = useSelector(state => state.claims),
          dispatch = useDispatch(),
          numOfClaimsToSee = 10,
          lastPageIndex = currentPage * numOfClaimsToSee,
          firstPageIndex = lastPageIndex - numOfClaimsToSee,
          allClaims = selectAll(store.getState());

    useEffect(() => {
        const details = {
            columnSort,
            orderSort,
            searchInput
        }
        dispatch(fetchClaims(details))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput, columnSort, orderSort]);

    if (claimsLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (claimsLoadingStatus === 'error') {
        return <ErrorServer/>
    }

    const renderClaims = (claims) => {
        return claims.map(({title, createdAt, type, status, _id}) => {
            return <Claim 
            title={title} 
            createdAt={createdAt.slice(0, 10)} 
            type={type ? type.name : null} 
            status={status ? status.name : null}
            key={_id}
            id={_id}
            />
        })
    }

    const claims = allClaims.slice(firstPageIndex, lastPageIndex);
    const elements = renderClaims(claims);

    return (
        <>
            {elements}
        </>
    )
}

export default ClaimsList;