import Login from '../login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';
import Registration from '../registration/registration';
import EntranceImg from '../../assets/img/entrance_img.png';
import MiniLogo from '../../assets/img/logo_mini.svg';

import './entrance.scss';

const Entrance = (props) => {
    const {toggleLogin} = props;
    return (
        // <Router basename='/'>
            <div className='entrance'>
                <div className='entrance__left'>
                    <img src={EntranceImg} alt="structure" />
                </div>
                <div className='entrance__right'>
                    <Routes>
                        <Route path="/registration" element={<Registration mailIcon={Mail} lockIcon={Lock}/>}/>
                        <Route path="/" element={<Login toggleLogin={toggleLogin} mailIcon={Mail} lockIcon={Lock}/>}/>                        
                    </Routes>
                </div>
                <footer className='entrance__footer'>
                    <img src={MiniLogo} alt='logo'/>
                </footer>
            </div>
        /* </Router> */
    )
}

export default Entrance;