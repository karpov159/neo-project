import useProjectService from '../../services/ProjectService';
import Input from '../input/input';
import Button from '../button/button';
import { useNavigate, NavLink } from 'react-router-dom';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';
import BigLogo from '../../assets/img/logo_big.svg';


import './login.scss';


const Login = (props) => {
    const { toggleLogin} = props;
    const navigate = useNavigate();
    const {onAuthorization} = useProjectService();

    const onSubmit = (e) => {
        e.preventDefault();
        toggleLogin();
        onAuthorization({
            "email": "karpov123",
            "password": "123456"
        }).then(console.log)
        navigate('homepage');      
    }

    return (
        <>
            <div className="entrance__logo">
                <img src={BigLogo} alt="logo" />    
            </div>
            <form onSubmit={(e) => onSubmit(e)} className="form">
                <Input label={'E-MAIL'} placeholder={'Type your e-mail'} icon={Mail} />
                <Input label={'password'} placeholder={'Type your password'} icon={Lock} />
                <div className="form__check">
                    <input id="checkbox" className='form__box' type="checkbox"/>
                    <label className="form__label" htmlFor="checkbox"/>
                    <div className="form__text">Keep me logged in</div>
                </div>
                <Button label={'Login'} addClass={'button_main'}/>
                <div className="form__link">
                Not a member? &nbsp;
                <NavLink end to="/registration">
                Request registration.
                </NavLink>
                </div>
            </form>
        </>
    )
}

export default Login;