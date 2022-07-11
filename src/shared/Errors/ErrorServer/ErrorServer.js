import Title from '../../Title/Title';
import { useNavigate } from 'react-router-dom';

import './ErrorServer.scss';

const ErrorServer = () => {
	const navigate = useNavigate();

	return (
		<div className='error-server'>
			<Title title='Something went wrong with the server' />
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
