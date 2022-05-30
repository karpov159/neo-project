import Input from '../input/input';

import SearchImg from '../../assets/icons/search.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import IconHome from '../../assets/icons/icon-log-out.svg';
import Avatar from '../../assets/icons/avatar.png';


import './header.scss';


const Header = (props) => {
    const {toggleLogin, isSearchInput, setSearchWord} = props;

    const changeValue = (e) => {
        setSearchWord(e.target.value)
    }

    return (
        <header className="header">
            {!isSearchInput ? <Input onChange={changeValue} placeholder="Search" addClass={"input_search"} icon={SearchImg}/> : null}
            <div className="header__options">
                    <button className="header__btn">
                        <img src={Notification} alt="notification" />
                    </button>
                    <button className="header__btn header__btn_bigger">
                        <img src={Avatar} alt="notification" />
                    </button>          
                    <div className="header__name">
                        Ivan Ivanov    
                    </div>          
                    <button onClick={toggleLogin} className="header__btn">
                        <img src={IconHome} alt="notification" />
                    </button>
                </div>
        </header>
    )
}

export default Header;