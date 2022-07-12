import { userLocalStorage } from '../core/LocalStorage/UserLocalStorage';

const getClaimHeaders = (typeHeaders) => {
	if (typeHeaders === 'claim') {
		return {
			Authorization: `Bearer ${userLocalStorage.getItem().token}`,
			'Content-Type': 'application/json',
		};
	} else {
		return { 'Content-Type': 'application/json;charset=utf-8' };
	}
};

const httpRequest = async (url, method = 'GET', body = null, typeHeaders) => {
	try {
		const response = await fetch(url, {
			method,
			body,
			headers: getClaimHeaders(typeHeaders),
		});
		if (!response.ok) {
			throw new Error('error');
		}
		const data = await response.json();

		return data;
	} catch (e) {
		throw e;
	}
};

export default httpRequest;
