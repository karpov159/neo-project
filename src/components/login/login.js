import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Input from '../generic/input/Input';
import Button from '../generic/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { auth, clearLoadingStatus, setLoggedIn } from './LoginSlice';
import ErrorInput from '../generic/errors/ErrorInput';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';
import BigLogo from '../../assets/img/logo_big.svg';

import './login.scss';

const onChangeInput = (e, func) => {
    func(e.target.value);
}

const Login = () => {
    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [keepLogIn, setKeepLogIn] = useState(false),
          dispatch = useDispatch(),
          {authLoadingStatus} = useSelector(state => state.auth),
          navigate = useNavigate();
    
    useEffect(() => {
        dispatch(clearLoadingStatus())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const error = authLoadingStatus === 'error' ? true : false;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(auth({
            "email": email,
            "password": password
        }))
        .unwrap()
        .then((res) => {
            localStorage.setItem("Token", res.token);
            localStorage.setItem('User', 
                JSON.stringify({
                    'fullName': res.fullName,
                    'role': res.role.slug,
                    keepLogIn
                }));
            dispatch(setLoggedIn(true));
            navigate('homepage'); 
        });
    };

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
                {error ? <ErrorInput addClass="error-input_block" text="Wrong password"/> : null}

                <div className="form__check">
                    <input
                    onClick={() => setKeepLogIn(keepLogIn => !keepLogIn)} 
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