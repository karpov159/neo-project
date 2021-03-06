import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../core/store/login/login.action';
import {
	clearLoadingStatus,
	setLoggedIn,
} from '../../core/store/login/login.reducer';
import { REGISTRATION, HOMEPAGE } from '../../core/config/RoutesConfig';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import { userSessionStorage } from '../../core/SessionStorage/UserSessionStorage';
import ErrorInput from '../../shared/Errors/ErrorInput/ErrorInput';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';
import BigLogo from '../../assets/img/logo_big.svg';
import './Login.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [keepLogIn, setKeepLogIn] = useState(false);
	const { authLoadingStatus } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const error = authLoadingStatus === 'error' ? true : false;

	useEffect(() => {
		dispatch(clearLoadingStatus());
	}, [dispatch]);

	const onChangeInput = (e, func) => {
		func(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			auth({
				email,
				password,
			})
		)
			.unwrap()
			.then((res) => {
				userLocalStorage.setItem(res, keepLogIn);
				userSessionStorage.setItem(res);
				dispatch(setLoggedIn(true));
				navigate(HOMEPAGE);
			});
	};

	return (
		<>
			<div className='pre-screen__logo'>
				<img src={BigLogo} alt='logo' />
			</div>
			<form onSubmit={(e) => onSubmit(e)} className='form'>
				<Input
					addClass='input-block_log'
					error={error}
					onChange={(e) => onChangeInput(e, setEmail)}
					type='email'
					label={'E-MAIL'}
					placeholder={'Type your e-mail'}
					autoComplete='username'
					icon={Mail}
				/>

				<Input
					addClass='input-block_log'
					error={error}
					onChange={(e) => onChangeInput(e, setPassword)}
					type='password'
					label={'password'}
					placeholder={'Type your password'}
					autoComplete='current-password'
					icon={Lock}
				/>
				{error ? (
					<ErrorInput
						addClass='error-input_block'
						text='Wrong password'
					/>
				) : null}

				<div className='form__check'>
					<input
						onClick={() => setKeepLogIn((keepLogIn) => !keepLogIn)}
						value={keepLogIn}
						id='checkbox'
						className='form__box'
						type='checkbox'
					/>
					<label className='form__label' htmlFor='checkbox'>
						Keep me logged in
					</label>
				</div>

				<Button label={'Login'} addClass={'button_main'} />

				<div className='form__link'>
					Not a member? &nbsp;
					<NavLink end to={REGISTRATION}>
						Request registration.
					</NavLink>
				</div>
			</form>
		</>
	);
};

export default Login;
