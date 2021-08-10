// import { endpoint } from './config';
import Api from '../core/Api';
import { endpoint } from './config';

const Auth = {
	async refreshToken() {
		let refreshToken = JSON.stringify(localStorage.getItem('token'))?.refreshToken;
		let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
			method: 'POST',
			body: JSON.stringify({
				refreshToken: refreshToken,
			}),
			headers: {
				'Content-type': 'application/json',
			},
		}).then((res) => res.json());
		if (res?.data?.accessToken) {
			localStorage.setItem('token', JSON.stringify(res.data));
		}
		return true;
	},

	update(data) {},

	login(data) {
		return Api.post('/login', data);
	},

	async register(data) {
		let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
		return fetch(`${endpoint}/register`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}).then((res) =>
			tokenHandle(res, () => {
				let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
				return fetch(`${endpoint}/register`, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}).then((res) => res.json());
			})
		);
	},
};

export async function tokenHandle(res, callback) {
	if (res.status === 200) {
		return res.json();
	}
	if (res.status === 400) {
		await Auth.refreshToken();
		let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
		return callback();
	}
}

export default Auth;
