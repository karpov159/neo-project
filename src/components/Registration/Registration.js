import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../core/store/registration/reg.action';
import { clearLoadingStatus } from '../../core/store/registration/reg.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLoggedIn } from '../../core/store/login/login.reducer';
import { HOMEPAGE } from '../../core/config/RoutesConfig';
import localStorage from '../../helpers/localStorage';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Title from '../../shared/Title/Title';
import ErrorInput from '../../shared/Errors/ErrorInput/ErrorInput';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';

const Registration = () => {
	const navigate = useNavigate();
	const { registrationLoadingStatus } = useSelector(
		(state) => state.registration
	);
	const dispatch = useDispatch();
	const User = new localStorage();
	const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	useEffect(() => {
		dispatch(clearLoadingStatus());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Title
				addClass='title_hidden'
				title='Create your personal account'
			/>
			<Formik
				initialValues={{
					name: '',
					surname: '',
					email: '',
					password: '',
					secondPassword: '',
					terms: false,
				}}
				validate={(values) => {
					const errors = {};

					if (!values.name) {
						errors.name = 'Please type your name';
					}

					if (!values.surname) {
						errors.surname = 'Please type your surname';
					}

					if (!regEmail.test(values.email)) {
						errors.email = 'Invalid email address';
					}

					if (values.password !== values.secondPassword) {
						errors.password = 'Passwords did not match';
					}

					if (!values.terms) {
						errors.terms = 'You have to agree with the terms';
					}

					return errors;
				}}
				onSubmit={(values) => {
					dispatch(
						registration({
							fullName: values.name + ' ' + values.surname,
							email: values.email,
							password: values.password,
						})
					)
						.unwrap()
						.then((res) => {
							User.putUser(res, false);
							dispatch(setLoggedIn(true));
							navigate(HOMEPAGE);
						});
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form className='form form_reg' onSubmit={handleSubmit}>
						<Input
							addClass='input-block_reg'
							type='text'
							name='name'
							value={values.name}
							onChange={handleChange}
							label={'Name'}
							placeholder={'Type your name'}
							onBlur={handleBlur}
							icon={Mail}
						/>
						{errors.name && touched.name ? (
							<ErrorInput text={errors.name} />
						) : null}

						<Input
							addClass='input-block_reg'
							type='text'
							name='surname'
							value={values.surname}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'surname'}
							placeholder={'Type your surname'}
							icon={Mail}
						/>
						{errors.surname && touched.surname ? (
							<ErrorInput text={errors.surname} />
						) : null}

						<Input
							addClass='input-block_reg'
							type='email'
							name='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'E-MAIL'}
							placeholder={'Type your e-mail'}
							autoComplete='username'
							icon={Mail}
						/>
						{errors.email && touched.email ? (
							<ErrorInput text={errors.email} />
						) : null}

						<Input
							addClass='input-block_reg'
							type='password'
							name='password'
							value={values.password}
							onChange={handleChange}
							label={'password'}
							placeholder={'Type your password'}
							autoComplete='new-password'
							icon={Lock}
						/>

						<Input
							addClass='input-block_reg'
							type='password'
							name='secondPassword'
							value={values.secondPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'password'}
							placeholder={'Type your password again'}
							autoComplete='new-password'
							icon={Lock}
						/>
						{errors.password && touched.secondPassword ? (
							<ErrorInput text={errors.password} />
						) : null}

						<div className='form__check form__check_mt40'>
							<input
								name='terms'
								value={values.terms}
								onChange={handleChange}
								onBlur={handleBlur}
								id='checkbox'
								className='form__box'
								type='checkbox'
							/>

							<label className='form__label' htmlFor='checkbox'>
								I have read and accept the Privacy Statement{' '}
							</label>
						</div>
						{errors.terms && touched.terms ? (
							<ErrorInput text={errors.terms} />
						) : null}

						<div className='form__btns'>
							<Button
								type='button'
								onClick={() => {
									navigate(-1);
								}}
								label={'Cancel'}
								addClass={'button_cancel button_w45'}
							/>

							<Button
								type='submit'
								label={'Continue'}
								addClass={'button_w45'}
							/>
						</div>
						{registrationLoadingStatus === 'error' ? (
							<ErrorInput text='Registration failure!' />
						) : null}
					</form>
				)}
			</Formik>
		</>
	);
};

export default Registration;
