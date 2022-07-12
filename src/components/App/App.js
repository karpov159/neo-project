import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { setLoggedIn } from '../../core/store/login/login.reducer';
import { useDispatch } from 'react-redux';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import Routes from '../../core/Routes/Routes';

import './App.scss';

const App = () => {
	const { keepLogIn } = userLocalStorage.getItem()
		? userLocalStorage.getItem()
		: false;
	const dispatch = useDispatch();

	useEffect(() => {
		if (keepLogIn) {
			dispatch(setLoggedIn(true));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router>
			<div className='App'>
				<Routes />
			</div>
		</Router>
	);
};

export default App;
