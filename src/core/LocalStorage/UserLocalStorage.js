import LocalStorage from './LocalStorage';

class UserLocalStorage extends LocalStorage {
	constructor() {
		super();
		this.keyName = 'User';
	}
}

export const userLocalStorage = new UserLocalStorage();
