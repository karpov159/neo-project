import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClaimsList from '../Claims-list/Claims-list';
import Pagination from '../Pagination/Pagination';
import { CREATE_CLAIM } from '../../core/config/RoutesConfig';
import Title from '../../shared/Title/Title';
import Filters from './Filters/Filters';
import ErrorAccess from '../../shared/Errors/ErrorAccess/ErrorAccess';
import { setNewClaimAccesError } from '../../core/store/claim/claim.reducer';
import localStorage from '../../helpers/localStorage';

import './My-claims.scss';

const MyClaims = () => {
	const { browseAccessError, newClaimAccesError } = useSelector(
		(state) => state.claims
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const User = new localStorage();
	const { role } = User.getUser();

	const handleClick = () => {
		if (role === 'work') {
			navigate(CREATE_CLAIM);
		} else {
			dispatch(setNewClaimAccesError(true));
		}
	};

	const createError = newClaimAccesError ? (
		<ErrorAccess text='Only a user with an work role can create new claims' />
	) : null;
	const browseError = browseAccessError ? (
		<ErrorAccess text='Only a user with an admin role can browse claims' />
	) : null;

	return (
		<div className='my-claims'>
			<div className='my-claims__headline'>
				<Title title='Your claims' />

				<button onClick={handleClick} className='my-claims__btn'>
					<svg
						width='40'
						height='40'
						viewBox='0 0 40 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M20 13V27'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M13 20H27'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
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
