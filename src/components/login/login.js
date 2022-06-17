import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import useProjectService from '../../services/ProjectService';
import Input from '../generic/input/input';
import Button from '../generic/button/button';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';
import BigLogo from '../../assets/img/logo_big.svg';

import './login.scss';

const onChangeInput = (e, func) => {
    func(e.target.value);
}

const Login = ({toggleLogin}) => {
    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [keepLogIn, setKeepLogIn] = useState(false),
          navigate = useNavigate(),
          {authorization, error, clearError} = useProjectService();
    // вынести в отдельную функцию(?)
    const onSubmit = (e) => {
        clearError();
        e.preventDefault();
        authorization({
            "email": email,
            "password": password
        }).then(result => {
            if (result) {
                console.log(result.role.slug)
                toggleLogin();
                navigate('homepage'); 
            }
        })
    }

    return (
        <>
            <div className="entrance__logo">
                <img src={BigLogo} alt="logo" />    
            </div>
            <form onSubmit={(e) => onSubmit(e)} className="form">
                <Input 
                error={error}
                onChange={(e) => onChangeInput(e, setEmail)} 
                type="email"
                label={'E-MAIL'} 
                placeholder={'Type your e-mail'} 
                icon={Mail} />
                <Input 
                error={error}
                onChange={(e) => onChangeInput(e, setPassword)} 
                type="password"
                label={'password'} 
                placeholder={'Type your password'} 
                icon={Lock} />
                {error ? <div className='error error_block'>Wrong password</div> : null}

                <div className="form__check">
                    <input 
                    value={keepLogIn} 
                    id="checkbox" 
                    className='form__box' 
                    type="checkbox"/>
                    <label className="form__label" htmlFor="checkbox">Keep me logged in </label>
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