import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setOpenedHamburger } from '../../core/store/menu/menu.reducer';
import { useDispatch } from 'react-redux';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

import './HomePage.scss';

const HomePage = ({ isSearchInput }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleCLick = (e) => {
			const target = e.target;

			if (target.classList.contains('menu__overlay')) {
				dispatch(setOpenedHamburger());
				document.body.style.overflow = '';
			}
		};

		document.addEventListener('click', handleCLick);

		return () => {
			document.removeEventListener('click', handleCLick);
		};
	}, [dispatch]);

	return (
		<section className='homepage'>
			<Menu />
			<Header isSearchInput={isSearchInput} />
			<Outlet />
		</section>
	);
};

export default HomePage;
