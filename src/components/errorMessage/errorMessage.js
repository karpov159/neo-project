import Title from '../title/title';
import { useNavigate } from 'react-router-dom';

import './errorMessage.scss';

const ErrorMessage = () => {
    const navigate = useNavigate();
    return (
        <div className='error'>
            <Title title="Something went wrong with the server"/>
            <div className="error__block">
                <p className="error__text">Click here to comeback to the homepage</p>
                <button onClick={() => navigate('/')} className='button button_cancel button_error'>Click</button>
            </div>

        </div>
    )
}

export default ErrorMessage;

