import Input from '../input/input';
import Button from '../button/button';
import { Link, useNavigate } from 'react-router-dom';


import BigLogo from '../../assets/img/logo_big.svg';


import './login.scss';


const Login = (props) => {
    const {mailIcon, lockIcon, toggleLogin} = props;
    const navigate = useNavigate();

    const onSubmit = () => {
        toggleLogin();
        navigate('homepage');      
    }

    return (
        <>
            <div className="entrance__logo">
                <img src={BigLogo} alt="logo" />    
            </div>
            <form onSubmit={onSubmit} className="form">
                <Input label={'E-MAIL'} placeholder={'Type your e-mail'} icon={mailIcon} />
                <Input label={'password'} placeholder={'Type your password'} icon={lockIcon} />
                <div className="form__check">
                    <input id="checkbox" className='form__box' type="checkbox"/>
                    <label className="form__label" htmlFor="checkbox"/>
                    <div className="form__text">Keep me logged in</div>
                </div>
                <Button label={'Login'} addClass={'button_main'}/>
                <div className="form__link">
                Not a member? &nbsp;
                <Link to="/registration">
                Request registration.
                </Link>
                </div>
            </form>
        </>
    )
}

export default Login;