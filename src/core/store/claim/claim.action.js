import { createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../../../helpers/http.hook';
import modifyData from '../../../helpers/modifyData';
import { BASE_URL } from '../../../helpers/constants';
import getHeaders from '../../../helpers/getHeaders';

export const fetchClaims = createAsyncThunk(
	'claims/fetchClaims',
	async ({ columnSort = 'title', orderSort = 'desc', searchInput = '' }) => {
		const { request } = useHttp();
		const res = await request(
			`${BASE_URL}/claim?offset=0&search=${searchInput}&column=${columnSort}&sort=${orderSort}`,
			'GET',
			null,
			getHeaders('claim')
		);
		return res.claims;
	}
);

export const getClaim = createAsyncThunk('claims/getClaim', async (id) => {
	const { request } = useHttp();
	const res = await request(
		`${BASE_URL}/claim/${id}`,
		'GET',
		null,
		getHeaders('claim')
	);
	return modifyData(res);
});

export const createNewClaim = createAsyncThunk(
	'claims/createNewClaim',
	async (body) => {
		const { request } = useHttp();
		const res = await request(
			`${BASE_URL}/claim`,
			'POST',
			JSON.stringify(body),
			getHeaders('claim')
		);
		return modifyData(res);
	}
);

export const updateClaim = createAsyncThunk(
	'claims/updateClaim',
	async ({ claimId, body }) => {
		const { request } = useHttp();
		const res = await request(
			`${BASE_URL}/claim/${claimId}`,
			'PUT',
			JSON.stringify(body),
			getHeaders('claim')
		);

		return res;
	}
);
