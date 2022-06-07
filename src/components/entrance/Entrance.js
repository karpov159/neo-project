import { Outlet } from 'react-router-dom';

import EntranceImg from '../../assets/img/entrance_img.png';
import MiniLogo from '../../assets/img/logo_mini.svg';

import './entrance.scss';

const Entrance = (props) => {
    return (
            <div className='entrance'>
                <div className='entrance__left'>
                    <img src={EntranceImg} alt="structure" />
                </div>
                <div className='entrance__right'>
                    <Outlet/>
                </div>
                <footer className='entrance__footer'>
                    <img src={MiniLogo} alt='logo'/>
                </footer>
            </div>        
    )
}

export default Entrance;