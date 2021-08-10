// import { LOGIN, LOGOUT, LOGIN_ERROR, UPDATE, REGISTER, REGISTER_ERROR } from '../type';
import reduxToolkit from '../../core/reduxToolkit';
import Auth from '../../service/auth';

let initState = {
	login: JSON.parse(localStorage.getItem('login')),
	loginError: '',
	registerError: '',
};

let { action, reducer, TYPE } = reduxToolkit({
	initialState: initState,
	name: 'auth',
	reducers: {
		login: (state, action) => {
			localStorage.setItem('login', JSON.stringify(action.payload));
			return {
				...state,
				login: action.payload,
			};
		},
		logout: (state, action) => {
			localStorage.setItem('login', false);
			localStorage.setItem('token', false);
			return {
				...state,
				login: false,
			};
		},
		register: (state, action) => {
			return {
				...state,
				registerError: '',
			};
		},
		update: (state, action) => {
			localStorage.setItem('login', JSON.stringify(action.payload));
			return {
				...state,
				login: action.payload,
			};
		},
		errorLogin: (state, action) => {
			return {
				...state,
				loginError: action.payload,
			};
		},
		errorRegister: (state, action) => {
			return {
				...state,
				registerError: action.payload,
			};
		},
	},
});

export default reducer;

export const { error, update, logout } = action;

export const AUTH_TYPE = TYPE;

export function loginAction(data) {
	return async (dispatch) => {
		let res = await Auth.login(data);
		if (res.data) {
			dispatch({
				type: AUTH_TYPE.login,
				payload: res.data,
			});
		} else if (res.error) {
			dispatch({
				type: AUTH_TYPE.errorLogin,
				payload: res.error,
			});
		}
	};
}

export function registerAction(data) {
	return async (dispatch) => {
		let res = await Auth.register(data);
		if (res.data) {
			dispatch({
				type: AUTH_TYPE.register,
				payload: res,
			});
		} else if (res.error) {
			dispatch({
				type: AUTH_TYPE.errorRegister,
				payload: res.error,
			});
		}
	};
}

export function updateAction(data) {
	return async (dispatch) => {
		let res = await Auth.update(data);
		if (res.data) {
			dispatch({
				type: AUTH_TYPE.update,
				payload: res.data,
			});
		} else if (res.error) {
			dispatch({
				// type: ERROR,
				payload: res.error,
			});
		}
	};
}
export function logoutAction() {
	return {
		type: AUTH_TYPE.logout,
	};
}

//redux middle

// export default function authReducer(state = initState, action) {
// 	switch (action.type) {
// 		case LOGIN:
// 			localStorage.setItem('login', JSON.stringify(action.payload));
// 			return {
// 				...state,
// 				login: action.payload,
// 			};
// 		case LOGOUT:
// 			localStorage.setItem('login', false);
// 			return {
// 				...state,
// 				login: false,
// 			};
// 		case LOGIN_ERROR:
// 			return {
// 				...state,
// 				loginError: action.payload,
// 			};
// 		case REGISTER_ERROR:
// 			return {
// 				...state,
// 				registerError: action.payload,
// 			};
// 		case UPDATE:
// 			localStorage.setItem('login', JSON.stringify(action.payload));
// 			return {
// 				...state,
// 				login: action.payload,
// 			};
// 		case REGISTER:
// 			return {
// 				...state,
// 				registerError: '',
// 			};
// 		default:
// 			return state;
// 	}
// 	return state;
// }
