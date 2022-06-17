import { useNavigate } from 'react-router-dom';
import Input from '../generic/input/input';
import Hamburger from './hamburger/hamburger';

import SearchImg from '../../assets/icons/search.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import IconHome from '../../assets/icons/icon-log-out.svg';
import Profile from '../../assets/icons/avatar.png';
import './header.scss';

const Header = ({toggleLogin, isSearchInput, setSearchWord}) => {
    const navigate = useNavigate(),
          {fullName} = JSON.parse(localStorage.getItem('User'));

    const changeValue = (e) => {
        setSearchWord(e.target.value)
    }

    return (
        <header className="header">
            <Hamburger/>
            {isSearchInput ? <Input onChange={changeValue} placeholder="Search" addClass={"input-block_search"} icon={SearchImg}/> : null}
            <div className="header__options">
                    <button className="header__btn">
                        <img src={Notification} alt="notification" />
                    </button>
                    <button className="header__btn header__btn_bigger">
                        <img src={Profile} alt="notification" />
                    </button>          
                    <div className="header__name">
                        {fullName}   
                    </div>          
                    <button onClick={() => {
                        toggleLogin();
                        navigate('/')
                    }} 
                    className="header__btn">
                        <img src={IconHome} alt="notification" />
                    </button>
                </div>
        </header>
    )
}

export default Header;