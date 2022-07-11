import { useDispatch, useSelector } from 'react-redux';
import { setOpenedHamburger } from '../../../core/store/menu/menu.reducer';

import './Hamburger.scss';

const Hamburger = () => {
	const dispatch = useDispatch();
	const { openedHamburger } = useSelector((state) => state.menu);

	const handleClick = () => {
		if (openedHamburger) {
			dispatch(setOpenedHamburger(false));
			document.body.style.overflow = '';
		} else {
			dispatch(setOpenedHamburger(true));
			document.body.style.overflow = 'hidden';
		}
	};

	return (
		<div onClick={handleClick} className='hamburger'>
			<span className='hamburger__line' />
			<span className='hamburger__line' />
			<span className='hamburger__line' />
		</div>
	);
};

export default Hamburger;
