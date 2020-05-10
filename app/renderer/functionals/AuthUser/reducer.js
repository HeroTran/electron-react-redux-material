import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { currentUser } from './types';
import actionTypes from './actionTypes';

const initialLoginState = fromJS({
  currentUser,
  error: null,
});

export function authReducer(state = initialLoginState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      const data = fromJS(action.data);
      return state.set('currentUser', data).set('error', null);
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
      const error = fromJS(action.error);
      return state.set('error', error);
    case actionTypes.LOGOUT_SUCCESS:
      return initialLoginState;
    default:
      return state;
  }
}
export default combineReducers({
  auth: authReducer,
});
