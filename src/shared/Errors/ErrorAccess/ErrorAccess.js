import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	setBrowseAccessError,
	setNewClaimAccessError,
} from '../../../core/store/claim/claim.reducer';
import ExclamIcon from '../../../components/Icons/ExclamIcon';
import './ErrorAccess.scss';

const ErrorAccess = ({ text }) => {
	const dispatch = useDispatch();
	const { browseAccessError, newClaimAccessError } = useSelector(
		(state) => state.claims
	);

	useEffect(() => {
		const errorTimeout = setTimeout(() => {
			dispatch(setBrowseAccessError(false));
			dispatch(setNewClaimAccessError(false));
		}, 3000);

		return () => {
			clearTimeout(errorTimeout);
		};
	}, [dispatch]);

	const handleClick = () => {
		if (browseAccessError) {
			dispatch(setBrowseAccessError(false));
		}
		if (newClaimAccessError) {
			dispatch(setNewClaimAccessError(false));
		}
	};

	return (
		<div className='error-access'>
			<div onClick={handleClick} className='error-access__close'>
				×
			</div>

			<div className='error-access__img'>
				<ExclamIcon />
			</div>

			<p className='error-access__text'>{text}</p>
		</div>
	);
};

export default ErrorAccess;
