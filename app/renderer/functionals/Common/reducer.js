import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const initialState = fromJS({
  isLoading: false,
  isAuthentication401: false,
});

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IS_LOADING_ENABLE_SUCCESS:
      return state.set('isLoading', true);
    case actionTypes.IS_LOADING_DISABLE_SUCCESS:
      return state.set('isLoading', false);
    case actionTypes.AUTHENTICATION_401:
      return state.set('isAuthentication401', action.isError);
    case actionTypes.RESET_COMMON:
      return initialState;
    default:
      return state;
  }
}
