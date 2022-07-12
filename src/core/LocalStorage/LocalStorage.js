class LocalStorage {
	constructor() {
		this.keyName = 'key';
	}

	getItem() {
		const user = localStorage.getItem(this.keyName);
		if (user !== null) {
			return JSON.parse(user);
		}
		return null;
	}

	setItem(user, keepLogIn) {
		localStorage.setItem(
			this.keyName,
			JSON.stringify({
				fullName: user.fullName,
				role: user.role.slug,
				token: user.token,
				keepLogIn,
			})
		);
	}

	removeItem() {
		localStorage.removeItem(this.keyName);
	}
}

export default LocalStorage;
