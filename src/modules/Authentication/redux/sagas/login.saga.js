import { put, takeEvery } from 'redux-saga/effects';
import {
	LOG_IN_REQUEST,
	logInRequestSuccess,
	logInRequestFailure,
} from '../actions/login.action';

function* loginRequestSaga({ payload: { email, password } }) {
	if (email === 'hruday@gmail.com' && password === '123') {
		yield put(logInRequestSuccess());
		console.log('Login Success');
	} else {
		yield put(logInRequestFailure())
		console.log('Login Failure');
	}
}

export default function* loginSaga() {
	yield takeEvery(LOG_IN_REQUEST, loginRequestSaga);
}


