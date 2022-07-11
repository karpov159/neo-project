import localStorage from './localStorage';

const getHeaders = (typeRequest) => {
	const User = new localStorage();

	switch (typeRequest) {
		case 'claim':
			const { token } = User.getUser();
			return {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			};
		default:
			return { 'Content-Type': 'application/json;charset=utf-8' };
	}
};

export default getHeaders;
