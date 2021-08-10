import { endpoint } from '../service/config';

class Api {
	accessToken;

	useToken = false;

	token() {
		this.useToken = true;
		return this;
	}

	json(res) {
		if (res.status === 200) {
			return res.json();
		}
	}

	setupHeader() {
		let headers = {
			'Content-Type': 'application/json',
		};

		if (this.useToken) {
			let token = JSON.parse(localStorage.getItem('token'));

			if (token?.accessToken) {
				headers.Authorization = `Bearer ${token.accessToken}`;
			}
		}

		this.useToken = false;
		return headers;
	}

	get(url) {
		let headers = this.setupHeader();
		return fetch(`${endpoint}${url}`, { headers }).then(this.json);
	}

	post(url, data = {}) {
		let headers = this.setupHeader();
		let body = JSON.stringify(data);
		return fetch(`${endpoint}${url}`, { method: 'POST', headers, body }).then(this.json);
	}

	put(url, data = {}) {
		let headers = this.setupHeader();
		let body = JSON.stringify(data);
		return fetch(`${endpoint}${url}`, { method: 'PUT', headers, body }).then(this.json);
	}
	delete(url) {
		let headers = this.setupHeader();
		return fetch(`${endpoint}${url}`, { method: 'DELETE', headers }).then(this.json);
	}
}

export default new Api();
