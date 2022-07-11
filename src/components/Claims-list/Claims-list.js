import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchClaims } from '../../core/store/claim/claim.action';
import { selectAll } from '../../core/store/claim/claim.reducer';
import store from '../../core/store';
import Claim from './Claim/Claim';
import Spinner from '../../shared/Spinner/Spinner';
import ErrorServer from '../../shared/Errors/ErrorServer/ErrorServer';

import './Claims-list.scss';

const ClaimsList = () => {
	const {
		claimsLoadingStatus,
		currentPage,
		searchInput,
		columnSort,
		orderSort,
	} = useSelector((state) => state.claims);
	const dispatch = useDispatch();
	const numOfClaimsToSee = 10;
	const lastPageIndex = currentPage * numOfClaimsToSee;
	const firstPageIndex = lastPageIndex - numOfClaimsToSee;
	const allClaims = selectAll(store.getState());

	useEffect(() => {
		const details = {
			columnSort,
			orderSort,
			searchInput,
		};
		dispatch(fetchClaims(details));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchInput, columnSort, orderSort]);

	const renderClaims = (claims) => {
		return claims.map(({ title, createdAt, type, status, _id }) => {
			return (
				<Claim
					title={title}
					createdAt={createdAt.slice(0, 10)}
					type={type ? type.name : null}
					status={status ? status.name : null}
					key={_id}
					id={_id}
				/>
			);
		});
	};

	const error = claimsLoadingStatus === 'error' ? <ErrorServer /> : null;
	const loading = claimsLoadingStatus === 'loading' ? <Spinner /> : null;
	const claims = allClaims.slice(firstPageIndex, lastPageIndex);
	const elements = renderClaims(claims);

	return (
		<>
			{error}
			{loading}
			{elements}
		</>
	);
};

export default ClaimsList;
