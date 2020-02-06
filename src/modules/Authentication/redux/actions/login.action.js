export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_REQUEST_SUCCESS = 'LOG_IN_REQUEST_SUCCESS';
export const LOG_IN_REQUEST_FAILURE = 'LOG_IN_REQUEST_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const logInRequest = (payload) => ({
	type: LOG_IN_REQUEST, payload
});

export const logInRequestSuccess = () => ({
	type: LOG_IN_REQUEST_SUCCESS
});

export const logInRequestFailure = () => ({
	type: LOG_IN_REQUEST_FAILURE
});

export const logOutRequest = () => ({
	type: LOG_OUT_REQUEST
});