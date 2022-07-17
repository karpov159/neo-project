class SessionStorage {
	constructor() {
		this.keyName = 'key';
	}

	getItem() {
		const user = sessionStorage.getItem(this.keyName);
		if (user !== null) {
			return JSON.parse(user);
		}
		return null;
	}

	setItem(user) {
		sessionStorage.setItem(
			this.keyName,
			JSON.stringify({
				fullName: user.fullName,
				role: user.role.slug,
				token: user.token,
			})
		);
	}

	removeItem() {
		sessionStorage.removeItem(this.keyName);
	}
}

export default SessionStorage;
