import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClaimsList from '../claims-list/Claims-list';
import Pagination from '../pagination/Pagination';
import Title from '../generic/title/Title';
import Filters from './filters/Filters';
import ErrorAccess from '../generic/errors/ErrorAccess';
import { setNewClaimAccesError } from '../claims-list/ClaimsSlice';


import './my-claims.scss';

const MyClaims = ({showClaim}) => {
    const {browseAccessError, newClaimAccesError} = useSelector(state => state.claims),
          navigate = useNavigate(),
          dispatch = useDispatch(),
          {role} = JSON.parse(localStorage.getItem('User'));
 
    const onClick = () => {
        if (role === 'work') {
            navigate('create-new-claim');
        } else {
            dispatch(setNewClaimAccesError(true));
        }
    }

    const createError = newClaimAccesError ? <ErrorAccess text="Only a user with an work role can create new claims"/> : null;
    const browseError = browseAccessError ? <ErrorAccess text="Only a user with an admin role can browse claims"/> : null;

    return (
        <div className="my-claims">
            <div className="my-claims__headline">
                <Title title='Your claims'/>
                <button
                onClick={onClick} 
                className="my-claims__btn">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 13V27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 20H27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="claims-list">
                <Filters/>
                <ClaimsList 
                showClaim={showClaim}
                />
            </div>
            <Pagination/>
            {browseError}
            {createError}
        </div>
    )
}



export default MyClaims;