import { createAsyncThunk } from '@reduxjs/toolkit';
import httpRequest from '../../../helpers/httpRequest';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registration = createAsyncThunk(
	'registration/userRegistration',
	async (body) => {
		const res = await httpRequest(
			`${BASE_URL}/auth/registration`,
			'POST',
			JSON.stringify(body)
		);

		return await res;
	}
);
