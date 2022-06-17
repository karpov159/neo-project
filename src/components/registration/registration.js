import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import useProjectService from "../../services/ProjectService";
import Input from "../generic/input/input"
import Button from "../generic/button/button";
import Title from "../generic/title/title";

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';

const Registration = () => {
    const navigate = useNavigate();
    const {registration, error, clearError} = useProjectService();    

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
                    clearError();

                    const errors = {};

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
                    clearError();
                    registration({
                        "fullName": values.name + ' ' + values.surname,
                        "email": values.email,
                        "password": values.password
                    }).then(navigate(-1))                    
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
                    <form className="form form_mt20" onSubmit={handleSubmit}>
                        <Input
                        type="text"
                        name="name"
                        value={values.name} 
                        onChange={handleChange} 
                        label={'Name'} 
                        placeholder={'Type your name'} 
                        icon={Mail} />
                        <Input
                        type="text"
                        name="surname"
                        value={values.surname} 
                        onChange={handleChange} 
                        label={'surname'} 
                        placeholder={'Type your surname'} 
                        icon={Mail} />
                        <Input
                        type="email"
                        name="email"
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        label={'E-MAIL'} 
                        placeholder={'Type your e-mail'} 
                        icon={Mail} />
                        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
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
                        {errors.password && touched.secondPassword ? <div className='error'>{errors.password}</div> : null}
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
                        {errors.terms && touched.terms && !error ? <div className='error'>{errors.terms}</div> : null}
                        {error ? <div className='error'>{error.message}</div> : null}
                        <div className="form__btns">
                            <Button type="button" onClick={() => navigate(-1)} label={'Cancel'} addClass={'button_cancel button_w45'}/>
                            <Button type="submit" label={'Continue'} addClass={'button_w45'} />
                        </div>
                    </form>
                )}
            </Formik>
        </>

    )
}

export default Registration;