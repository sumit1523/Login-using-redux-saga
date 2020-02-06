import { combineReducers } from 'redux';
import { loginModuleReducer } from '../modules/Authentication/redux/reducers/login.reducer';
import { reducer as formReducer } from 'redux-form';

const combinedReducers = combineReducers({
	loginModuleReducer,
	form: formReducer,
});

export const rootReducer = function (state, action) {
	return combinedReducers(state, action);
};
