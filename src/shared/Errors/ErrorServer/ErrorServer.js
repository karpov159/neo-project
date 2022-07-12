import Typography from '../../Typography/Typography';
import { useNavigate } from 'react-router-dom';

import './ErrorServer.scss';

const ErrorServer = () => {
	const navigate = useNavigate();

	return (
		<div className='error-server'>
			<Typography component='h2'>
				Something went wrong with the server
			</Typography>
			<div className='error-server__block'>
				<p className='error-server__text'>
					Click here to comeback to the homepage
				</p>
				<button
					onClick={() => navigate('/')}
					className='button button_cancel button_error'>
					Click
				</button>
			</div>
		</div>
	);
};

export default ErrorServer;
