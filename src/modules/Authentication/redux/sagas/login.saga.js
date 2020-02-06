import { put, takeLatest } from 'redux-saga/effects';
import {
	LOG_IN_REQUEST,
	logInRequestSuccess,
	logInRequestFailure,
} from '../actions/login.action';
import login from '../../components/Login/api/login';

function* loginRequestSaga({ payload: { email, password } }) {
	if (email === login.username && password === login.password) {
		yield put(logInRequestSuccess());
		console.log('Login Success');
	} else {
		yield put(logInRequestFailure())
		console.log('Login Failure');
	}
}

export default function* loginSaga() {
	yield takeLatest(LOG_IN_REQUEST, loginRequestSaga);
}


