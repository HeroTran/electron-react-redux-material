import { actionTypes } from './actionTypes';

const initialState = {};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOCALE:
      return state.set('locale', action.payload || '');
    default:
      return state;
  }
}
