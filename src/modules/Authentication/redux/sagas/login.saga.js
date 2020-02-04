import {takeEvery, takeLatest} from 'redux-saga/effects';
import {
	LOG_IN_REQUEST,
	LOG_OUT_REQUEST,
} from '../actions/login.action';

function* loginRequestSaga({payload}) {

}

function* logoutRequestSaga({payload}) {
	
}

export default function* loginSaga() {
	yield takeLatest(LOG_IN_REQUEST, loginRequestSaga);
	yield takeEvery(LOG_OUT_REQUEST, logoutRequestSaga);
}


