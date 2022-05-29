import Input from '../input/input';

import SearchImg from '../../assets/icons/search.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import IconHome from '../../assets/icons/icon-log-out.svg';
import Avatar from '../../assets/icons/avatar.png';


import './header.scss';


const Header = (props) => {
    const {toggleLogin} = props;

    return (
        <header className="header">
            <Input placeholder="Search" addClass={"input_search"} icon={SearchImg}/>
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