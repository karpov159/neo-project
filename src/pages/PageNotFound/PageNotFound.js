import { useNavigate } from 'react-router-dom';
import { HOMEPAGE } from '../../core/config/RoutesConfig';
import Typography from '../../shared/Typography/Typography';
import Button from '../../shared/Button/Button';

import './PageNotFound.scss';

const PageNotFound = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(HOMEPAGE);
	};

	return (
		<div className='not-found'>
			<Typography component='h2'>No such page</Typography>
			<Button
				addClass='button_decline'
				onClick={handleClick}
				label='Go back'
			/>
		</div>
	);
};

export default PageNotFound;
