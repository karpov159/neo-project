import { createAsyncThunk } from '@reduxjs/toolkit';
import httpRequest from '../../../helpers/httpRequest';
import modifyData from '../../../helpers/modifyData';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchClaims = createAsyncThunk(
	'claims/fetchClaims',
	async ({ columnSort = 'title', orderSort = 'desc', searchInput = '' }) => {
		const res = await httpRequest(
			`${BASE_URL}/claim?offset=0&search=${searchInput}&column=${columnSort}&sort=${orderSort}`,
			'GET',
			null,
			true
		);
		return res.claims;
	}
);

export const getClaim = createAsyncThunk('claims/getClaim', async (id) => {
	const res = await httpRequest(`${BASE_URL}/claim/${id}`, 'GET', null, true);
	return modifyData(res);
});

export const createNewClaim = createAsyncThunk(
	'claims/createNewClaim',
	async (body) => {
		const res = await httpRequest(
			`${BASE_URL}/claim`,
			'POST',
			JSON.stringify(body),
			true
		);
		return modifyData(res);
	}
);

export const updateClaim = createAsyncThunk(
	'claims/updateClaim',
	async ({ claimId, body }) => {
		const res = await httpRequest(
			`${BASE_URL}/claim/${claimId}`,
			'PUT',
			JSON.stringify(body),
			true
		);

		return res;
	}
);
