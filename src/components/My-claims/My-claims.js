import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewClaimAccessError } from '../../core/store/claim/claim.reducer';
import { CREATE_CLAIM } from '../../core/config/RoutesConfig';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import ClaimsList from '../Claims-list/Claims-list';
import PlusIcon from '../Icons/PlusIcon';
import Pagination from '../Pagination/Pagination';
import Typography from '../../shared/Typography/Typography';
import Filters from './Filters/Filters';
import ErrorAccess from '../../shared/Errors/ErrorAccess/ErrorAccess';

import './My-claims.scss';

const MyClaims = () => {
	const { browseAccessError, newClaimAccessError } = useSelector(
		(state) => state.claims
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { role } = userLocalStorage.getItem();

	const handleClick = () => {
		if (role === 'work') {
			navigate(CREATE_CLAIM);
		} else {
			dispatch(setNewClaimAccessError(true));
		}
	};

	const createError = newClaimAccessError ? (
		<ErrorAccess text='Only a user with an work role can create new claims' />
	) : null;
	const browseError = browseAccessError ? (
		<ErrorAccess text='Only a user with an admin role can browse claims' />
	) : null;

	return (
		<div className='my-claims'>
			<div className='my-claims__headline'>
				<Typography component='h2'>Your claims</Typography>

				<button onClick={handleClick} className='my-claims__btn'>
					<PlusIcon />
				</button>
			</div>

			<div className='claims-list'>
				<Filters />
				<ClaimsList />
			</div>

			<Pagination />
			{browseError}
			{createError}
		</div>
	);
};

export default MyClaims;
