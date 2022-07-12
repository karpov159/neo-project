import LocalStorage from './LocalStorage';

class UserLocalStorage extends LocalStorage {
	costructor() {
		this.key = 'User';
	}
}

export const userLocalStorage = new UserLocalStorage();
