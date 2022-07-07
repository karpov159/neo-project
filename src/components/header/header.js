import { useNavigate } from 'react-router-dom';
import Input from '../../Shared/Input/Input';
import Hamburger from './Hamburger/Hamburger';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../../store/ClaimsSlice';
import { setLoggedIn } from '../../store/LoginSlice';

import SearchImg from '../../assets/icons/search.svg';
import adminAvatar from '../../assets/icons/avatar.png';
import './Header.scss';

const Header = ({ isSearchInput}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {searchInput} = useSelector(state => state.claims);
    const {fullName, role} = JSON.parse(localStorage.getItem('User'));

    const changeValue = (e) => {
        dispatch(changeSearchInput(e.target.value));
    };

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
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.73 29C21.5542 29.3031 21.3018 29.5547 20.9982 29.7295C20.6946 29.9044 20.3504 29.9965 20 29.9965C19.6496 29.9965 19.3054 29.9044 19.0018 29.7295C18.6982 29.5547 18.4458 29.3031 18.27 29M30 25H10C10.7956 25 11.5587 24.6839 12.1213 24.1213C12.6839 23.5587 13 22.7956 13 22V17C13 15.1435 13.7375 13.363 15.0503 12.0503C16.363 10.7375 18.1435 10 20 10C21.8565 10 23.637 10.7375 24.9497 12.0503C26.2625 13.363 27 15.1435 27 17V22C27 22.7956 27.3161 23.5587 27.8787 24.1213C28.4413 24.6839 29.2044 25 30 25V25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="header__btn header__btn_bigger">
                        {profileImg}
                    </button>          
                    <div className="header__name">
                        {fullName}   
                    </div>          
                    <button onClick={() => {
                        dispatch(setLoggedIn(false));
                        localStorage.removeItem('User');
                        localStorage.removeItem('Token');
                        navigate('/');
                    }} 
                    className="header__btn">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 29H13C12.4696 29 11.9609 28.7893 11.5858 28.4142C11.2107 28.0391 11 27.5304 11 27V13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H17" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M24 25L29 20L24 15" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29 20H17" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </button>
                </div>
        </header>
    )
}

export default Header;