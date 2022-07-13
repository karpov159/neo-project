import { userLocalStorage } from '../core/LocalStorage/UserLocalStorage';

const getClaimHeaders = (authStatus, headers = {}) => {
	if (authStatus) {
		const { token } = userLocalStorage.getItem();

		return {
			Authorization: `Bearer ${token}`,
			...headers,
		};
	}
};

const httpRequest = async (url, method = 'GET', body = null, authStatus) => {
	try {
		const response = await fetch(url, {
			method,
			body,
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				...getClaimHeaders(authStatus),
			},
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
