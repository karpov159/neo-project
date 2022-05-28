import Input from '../input/Input';
import Button from '../App/button/Button';

import EntranceImg from '../../assets/img/entrance_img.png';
import BigLogo from '../../assets/img/logo_big.svg';
import MiniLogo from '../../assets/img/logo_mini.svg';
import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';



import './entrance.scss';

const Entrance = () => {
    return (
        <div className='entrance'>
            <div className='entrance__left'>
                <img src={EntranceImg} alt="structure" />
            </div>
            <div className='entrance__right'>
                <div className="entrance__logo">
                    <img src={BigLogo} alt="logo" />    
                </div>
                <form className="entrance__login">
                    <Input label={'E-MAIL'} placeholder={'Type your e-mail'} icon={Mail} />
                    <Input label={'password'} placeholder={'Type your password'} icon={Lock} />
                    <div className="entrance__check">
                        <input id="checkbox" className='entrance__box' type="checkbox"/>
                        <label className="entrance__label" htmlFor="checkbox"/>
                        <div className="entrance__text">Keep me logged in</div>
                    </div>
                    <Button label={'Login'} addClass={'button_main'}/>
                    <div className="entrance__link">
                    Not a member? &nbsp;
                    <a href="#">
                    Request registration.
                    </a>
                    </div>
                </form>
            </div>
            <footer className='entrance__footer'>
                <img src={MiniLogo} alt='logo'/>
            </footer>
        </div>
    )
}

export default Entrance;