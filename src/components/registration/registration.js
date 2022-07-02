import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import { registration, clearLoadingStatus } from './RegistrationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Input from "../generic/input/Input"
import Button from "../generic/button/Button";
import Title from "../generic/title/Title";
import ErrorInput from '../generic/errors/ErrorInput';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';

const Registration = () => {
    const navigate = useNavigate(),
          {registrationLoadingStatus} = useSelector(state => state.registration),
          dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearLoadingStatus())
    }, []);

    return (
        <>
            <Title title="Create your personal account"/>
            <Formik
                initialValues = {{
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    secondPassword: '',
                    terms: false
                }}

                validate = {values => {

                    const errors = {};

                    if (!values.name) {
                        errors.name = 'Please type your name'
                    }

                    if (!values.surname) {
                        errors.surname = 'Please type your surname'
                    }

                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (values.password !== values.secondPassword) {
                        errors.password = 'Passwords did not match'
                    }

                    if (!values.terms) {
                        errors.terms = 'You have to agree with the terms'
                    }

                    return errors;
                    
                }}

                onSubmit = {values => {
                    dispatch(registration({
                        "fullName": values.name + ' ' + values.surname,
                        "email": values.email,
                        "password": values.password
                    }))
                    .unwrap()
                    .then(() => navigate(-1))
                }}
            >
                {({
                    values, 
                    errors, 
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form className="form form_reg" onSubmit={handleSubmit}>
                        <Input
                        type="text"
                        name="name"
                        value={values.name} 
                        onChange={handleChange} 
                        label={'Name'} 
                        placeholder={'Type your name'}
                        onBlur={handleBlur}
                        icon={Mail} />
                        {errors.name && touched.name ? <ErrorInput text={errors.name}/>  : null}
                        <Input
                        type="text"
                        name="surname"
                        value={values.surname} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        label={'surname'} 
                        placeholder={'Type your surname'} 
                        icon={Mail} />
                        {errors.surname && touched.surname ? <ErrorInput text={errors.surname}/> : null}
                        <Input
                        type="email"
                        name="email"
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        label={'E-MAIL'} 
                        placeholder={'Type your e-mail'} 
                        icon={Mail} />
                        {errors.email && touched.email ? <ErrorInput text={errors.email}/> : null}
                        <Input
                        type="password"
                        name="password"
                        value={values.password} 
                        onChange={handleChange} 
                        label={'password'} 
                        placeholder={'Type your password'} 
                        icon={Lock} />
                        <Input
                        type="password"
                        name="secondPassword"
                        value={values.secondPassword} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        label={'password'} 
                        placeholder={'Type your password again'} 
                        icon={Lock} />
                        {errors.password && touched.secondPassword ? <ErrorInput text={errors.password}/> : null}
                        <div className="form__check form__check_mt40">
                            <input 
                            name="terms"
                            value={values.terms}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            id="checkbox" 
                            className='form__box' 
                            type="checkbox"/>
                            <label className="form__label" htmlFor="checkbox">I have read and accept the Privacy Statement </label>
                        </div>
                        {errors.terms && touched.terms ? <ErrorInput text={errors.terms}/> : null}
                        <div className="form__btns">
                            <Button 
                            type="button" 
                            onClick={() =>{
                                navigate(-1)
                            }} 
                            label={'Cancel'} 
                            addClass={'button_cancel button_w45'}/>
                            <Button 
                            type="submit" 
                            label={'Continue'} 
                            addClass={'button_w45'} />
                        </div>
                        {registrationLoadingStatus === 'error' ? <ErrorInput text="Registration failure!"/> : null}
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Registration;