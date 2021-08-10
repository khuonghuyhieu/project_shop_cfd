import reduxToolkit from '../../core/reduxToolkit';
import ProductApi from '../../service/productApi';

let initState = {
	category: [],
	products: [],
	paginate: [],
};

let { action, reducer, TYPE } = reduxToolkit({
	initialState: initState,
	name: 'product',
	reducers: {
		catalog: (state, action) => {
			return {
				...state,
				category: action.payload,
			};
		},
		product: (state, action) => {
			return {
				...state,
				products: action.payload.data,
				paginate: action.payload.paginate,
			};
		},
	},
});

export default reducer;
export const { catalog, products } = action;
export const PRODUCT_TYPE = TYPE;

export function getCatalog() {
	return async (dispatch) => {
		let res = await ProductApi.categories();
		if (res) {
			dispatch({
				type: PRODUCT_TYPE.catalog,
				payload: res,
			});
		}
	};
}
export function getProduct(page) {
	return async (dispatch) => {
		let res = await ProductApi.list(page);
		if (res) {
			dispatch({
				type: PRODUCT_TYPE.product,
				payload: res,
			});
		}
	};
}
