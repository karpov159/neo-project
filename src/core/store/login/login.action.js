import { createAsyncThunk } from '@reduxjs/toolkit';
import httpRequest from '../../../helpers/httpRequest';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const auth = createAsyncThunk('auth/userAuthorization', async (body) => {
	const res = await httpRequest(
		`${BASE_URL}/auth/login`,
		'POST',
		JSON.stringify(body)
	);

	return await res;
});
