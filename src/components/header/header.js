import { useNavigate } from 'react-router-dom';
import Input from '../generic/input/Input';
import Hamburger from './hamburger/Hamburger';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../claims-list/ClaimsSlice';

import SearchImg from '../../assets/icons/search.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import IconHome from '../../assets/icons/icon-log-out.svg';
import adminAvatar from '../../assets/icons/avatar.png';
import './header.scss';

const Header = ({toggleLogin, isSearchInput}) => {
    const navigate = useNavigate(),
          dispatch = useDispatch(),
          {searchInput} = useSelector(state => state.claims),
          {fullName, role} = JSON.parse(localStorage.getItem('User'));

    const changeValue = (e) => {
        dispatch(changeSearchInput(e.target.value));
    }

    const profileImg = role === 'admin' ?
    <img src={adminAvatar} alt="notification" /> :
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>


    return (
        <header className="header">
            <Hamburger/>
            {isSearchInput ? 
            <Input 
            onChange={changeValue}
            value={searchInput}
            placeholder="Search" 
            addClass={"input-block_search"} 
            icon={SearchImg}/> 
            : null}
            <div className="header__options">
                    <button className="header__btn">
                        <img src={Notification} alt="notification" />
                    </button>
                    <button className="header__btn header__btn_bigger">
                        {profileImg}
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