import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const initialState = fromJS({
  isLoading: false,
});

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IS_LOADING_ENABLE:
      return state.set('isLoading', true);
    case actionTypes.IS_LOADING_DISABLE:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
