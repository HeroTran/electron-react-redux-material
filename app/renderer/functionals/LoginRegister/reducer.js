import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const initialLoginState = fromJS({
  userName: 'huyhung',
  password: '12345',
});

export function loginReducer(state = initialLoginState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      const data = fromJS(action.data);
      return state
        .set('userName', data.userName)
        .set('password', data.password);
    default:
      return state;
  }
}
export default combineReducers({
  login: loginReducer,
});
