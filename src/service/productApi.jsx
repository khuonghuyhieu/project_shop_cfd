import Api from '../core/Api';
import { endpoint } from './config';

const ProductApi = {
	list(page) {
		return fetch(`${endpoint}/product${page ? `?${page}` : ''}`).then((res) => res.json());
	},

	categories() {
		return Api.get('/categories');
	},
};

export default ProductApi;
