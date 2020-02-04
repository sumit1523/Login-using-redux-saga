import {
	LOG_IN_REQUEST,
	LOG_IN_REQUEST_FAILURE,
	LOG_IN_REQUEST_SUCCESS,
	LOG_OUT_REQUEST_SUCCESS,
} from '../actions/login.action';

const initialState = {
	loading: false,
	loggedIn: false,
	error: null,
};

export const loginModuleReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_REQUEST:
			return {
				...state,
				loading: true
			};
		case LOG_IN_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				loggedIn: true,
				error: null
			};
		case LOG_OUT_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				loggedIn: false,
			};
		case LOG_IN_REQUEST_FAILURE:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};
