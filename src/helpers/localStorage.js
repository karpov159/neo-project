class localStorage {
	constructor() {
		this.keyName = 'User';
	}

	getUser() {
		const user = window.localStorage.getItem(this.keyName);
		if (user !== null) {
			return JSON.parse(user);
		}
		return null;
	}

	putUser(user, keepLogIn) {
		window.localStorage.setItem(
			this.keyName,
			JSON.stringify({
				fullName: user.fullName,
				role: user.role.slug,
				token: user.token,
				keepLogIn,
			})
		);
	}

	deleteUser() {
		window.localStorage.removeItem(this.keyName);
	}
}

export default localStorage;
