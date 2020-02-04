export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_REQUEST_SUCCESS = 'LOG_IN_REQUEST_SUCCESS';
export const LOG_IN_REQUEST_FAILURE = 'LOG_IN_REQUEST_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_REQUEST_SUCCESS = 'LOG_OUT_REQUEST_SUCCESS';
export const LOG_OUT_REQUEST_FAILURE = 'LOG_OUT_REQUEST_FAILURE';

export const logInRequest = (payload) => ({
	type: LOG_IN_REQUEST, payload
});

export const logInRequestSuccess = payload => ({
	type: LOG_IN_REQUEST_SUCCESS, payload
});

export const logInRequestFailure = error => ({
	type: LOG_IN_REQUEST_FAILURE, error
});

export const logOutRequest = (payload) => ({
	type: LOG_OUT_REQUEST, payload
});

export const logOutRequestSuccess = payload => ({
	type: LOG_OUT_REQUEST_SUCCESS, payload
});

export const logOutRequestFailure = payload => ({
	type: LOG_OUT_REQUEST_FAILURE, payload
});