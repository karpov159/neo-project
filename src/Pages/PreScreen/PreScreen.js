import { Outlet } from 'react-router-dom';

import EntranceImg from '../../assets/img/entrance_img.png';
import MiniLogo from '../../assets/img/logo_mini.svg';
import './PreScreen.scss';

const Entrance = () => {
	return (
		<div className='pre-screen'>
			<div className='pre-screen__left'>
				<img src={EntranceImg} alt='structure' />
			</div>

			<div className='pre-screen__right'>
				<Outlet />
			</div>

			<footer className='pre-screen__footer'>
				<img src={MiniLogo} alt='logo' />
			</footer>
		</div>
	);
};

export default Entrance;
