import Title from '../title/title';
import { useNavigate } from 'react-router-dom';

import './errorMessage.scss';

const ErrorMessage = () => {
    const navigate = useNavigate();
    return (
        <div className='error-message'>
            <Title title="Something went wrong with the server"/>
            <div className="error-message__block">
                <p className="error-message__text">Click here to comeback to the homepage</p>
                <button onClick={() => navigate('/')} className='button button_cancel button_error'>Click</button>
            </div>

        </div>
    )
}

export default ErrorMessage;

