import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBrowseAccessError } from '../../../core/store/claim/claim.reducer';
import getStatusColor from '../../../helpers/getStatusColor';
import getBallColor from '../../../helpers/getBallColor';
import localStorage from '../../../helpers/localStorage';

import './Claim.scss';

const Claim = ({ title, createdAt, type, status, id }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const User = new localStorage();
	const { role } = User.getUser();

	const onClick = () => {
		if (role === 'admin') {
			navigate(`${id}`);
		} else {
			dispatch(setBrowseAccessError(true));
		}
	};

	return (
		<div className='claim'>
			<div className='claim__title'>
				<div className='claim__text claim__text_white'>{title}</div>
			</div>

			<div className='claim__block'>
				<div className='claim__filter'>Created</div>
				<div className='claim__text'>{createdAt}</div>
			</div>
			<div className='claim__block'>
				<div className='claim__filter'>Type</div>
				<div className='claim__type'>
					<span
						style={{ background: `${getBallColor(type)}` }}
						className='claim__ball'></span>
					<div className='claim__text'>{type}</div>
				</div>
			</div>
			<div className='claim__block'>
				<div className='claim__filter'>Status</div>
				<div
					style={{ background: `${getStatusColor(status)}` }}
					className='claim__status'>
					{status}
				</div>
			</div>

			<button onClick={onClick} className='claim__button'>
				Browse
			</button>
		</div>
	);
};

export default Claim;
