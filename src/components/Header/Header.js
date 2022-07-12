import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeSearchInput,
	setBrowseAccessError,
	setNewClaimAccesError,
	changePage,
} from '../../core/store/claim/claim.reducer';
import { setLoggedIn } from '../../core/store/login/login.reducer';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import Input from '../../shared/Input/Input';
import Hamburger from './Hamburger/Hamburger';
import NotifyIcon from '../Icons/NotifyIcon';
import UserIcon from '../Icons/UserIcon';
import ExitIcon from '../Icons/ExitIcon';

import SearchImg from '../../assets/icons/search.svg';
import adminAvatar from '../../assets/icons/avatar.png';
import './Header.scss';

const Header = ({ isSearchInput }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { searchInput } = useSelector((state) => state.claims);
	const { fullName, role } = userLocalStorage.getItem();

	const changeValue = (e) => {
		dispatch(changeSearchInput(e.target.value));
	};

	const handleClick = () => {
		dispatch(setLoggedIn(false));
		dispatch(changeSearchInput(''));
		dispatch(setNewClaimAccesError(false));
		dispatch(setBrowseAccessError(false));
		dispatch(changePage(1));
		userLocalStorage.removeItem();
		navigate('/');
	};

	const profileImg =
		role === 'admin' ? (
			<img src={adminAvatar} alt='notification' />
		) : (
			<UserIcon />
		);

	return (
		<header className='header'>
			<Hamburger />

			{isSearchInput ? (
				<Input
					onChange={changeValue}
					value={searchInput}
					placeholder='Search'
					addClass={'input-block_search'}
					icon={SearchImg}
				/>
			) : null}

			<div className='header__options'>
				<button className='header__btn'>
					<NotifyIcon />
				</button>

				<button className='header__btn header__btn_bigger'>
					{profileImg}
				</button>

				<div className='header__name'>{fullName}</div>

				<button onClick={handleClick} className='header__btn'>
					<ExitIcon />
				</button>
			</div>
		</header>
	);
};

export default Header;
