import SessionStorage from './SessionStorage';

class UserSessionStorage extends SessionStorage {
	constructor() {
		super();
		this.keyName = 'User';
	}
}

export const userSessionStorage = new UserSessionStorage();
