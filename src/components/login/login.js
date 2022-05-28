import Input from '../input/input';
import Button from '../button/button';

import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';

import './login.scss';


const Login = () => {
    return (
        <form className="login">
        <Input label={'E-MAIL'} placeholder={'Type your e-mail'} icon={Mail} />
        <Input label={'password'} placeholder={'Type your password'} icon={Lock} />
        <div className="login__check">
            <input id="checkbox" className='login__box' type="checkbox"/>
            <label className="login__label" htmlFor="checkbox"/>
            <div className="login__text">Keep me logged in</div>
        </div>
        <Button label={'Login'} addClass={'button_main'}/>
        <div className="login__link">
        Not a member? &nbsp;
        <a href="#">
        Request registration.
        </a>
        </div>
    </form>
    )
}

export default Login;