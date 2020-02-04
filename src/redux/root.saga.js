import {all} from 'redux-saga/effects';
import loginModuleSaga from '../modules/Authentication/redux/sagas/index';

export function* rootSaga() {
	yield all([
		loginModuleSaga(),
	]);
}