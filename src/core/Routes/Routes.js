import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
	BASE,
	HOMEPAGE,
	REGISTRATION,
	CREATE_CLAIM,
	BROWSE_CLAIM,
	NOT_FOUND,
} from '../config/RoutesConfig';
import { HomePage, PageNotFound, PreScreenPage } from '../../components/Pages';
import MyClaims from '../../components/My-claims/My-claims';
import CreateNewClaim from '../../components/Create-new-claim/Create-new-claim';
import BrowsedClaim from '../../components/Browsed-claim/Browsed-claim';
import Registration from '../../components/Registration/Registration';
import Login from '../../components/Login/Login';

const AppRoutes = () => {
	const [isSearchInput, setSearchInput] = useState(true);
	const { isLoggedIn } = useSelector((state) => state.auth);

	return (
		<Routes>
			<Route
				path={HOMEPAGE}
				element={
					isLoggedIn ? (
						<HomePage isSearchInput={isSearchInput} />
					) : (
						<Navigate to={BASE} />
					)
				}>
				<Route path='' element={<MyClaims />} />
				<Route
					path={CREATE_CLAIM}
					element={<CreateNewClaim setSearchInput={setSearchInput} />}
				/>
				<Route
					path={BROWSE_CLAIM}
					element={<BrowsedClaim setSearchInput={setSearchInput} />}
				/>
			</Route>
			<Route
				path={BASE}
				element={
					isLoggedIn ? <Navigate to={HOMEPAGE} /> : <PreScreenPage />
				}>
				<Route path={REGISTRATION} element={<Registration />} />
				<Route path={BASE} element={<Login />} />
			</Route>
			<Route path={NOT_FOUND} element={<PageNotFound />} />
		</Routes>
	);
};

export default AppRoutes;
