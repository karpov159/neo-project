import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchClaims , selectAll} from '../../store/ClaimsSlice';
import store from '../../store';

import Claim from './Claim/Claim';
import Spinner from '../../shared/Spinner/Spinner';
import ErrorServer from '../../shared/Errors/ErrorServer';

import './Claims-list.scss';

const ClaimsList = () => {

    const {claimsLoadingStatus, currentPage, searchInput, columnSort, orderSort} = useSelector(state => state.claims);
    const dispatch = useDispatch();
    const numOfClaimsToSee = 10;
    const lastPageIndex = currentPage * numOfClaimsToSee;
    const firstPageIndex = lastPageIndex - numOfClaimsToSee;
    const allClaims = selectAll(store.getState());

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