import {all} from 'redux-saga/effects';
import loginSaga from './login.saga';

export default function* loginModuleSaga() {
	yield all([
		loginSaga(),
	]);
}