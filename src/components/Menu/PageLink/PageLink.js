import { useSelector } from 'react-redux';

const PageLink = ({ icon, active, mobileName }) => {
	const { openedHamburger } = useSelector((state) => state.menu);
	const classes = active ? 'menu__link menu__link_active' : 'menu__link';
	const name = openedHamburger ? (
		<div className='menu__name'>{mobileName}</div>
	) : null;

	return (
		<button className={classes}>
			<img src={icon} alt='icon' />
			{name}
		</button>
	);
};

export default PageLink;
