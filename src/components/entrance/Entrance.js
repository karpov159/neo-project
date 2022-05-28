import Login from '../login/login';

import EntranceImg from '../../assets/img/entrance_img.png';
import BigLogo from '../../assets/img/logo_big.svg';
import MiniLogo from '../../assets/img/logo_mini.svg';




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
                <Login/>
            </div>
            <footer className='entrance__footer'>
                <img src={MiniLogo} alt='logo'/>
            </footer>
        </div>
    )
}

export default Entrance;