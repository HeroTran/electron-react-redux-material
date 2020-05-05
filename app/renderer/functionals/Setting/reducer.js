import { fromJS } from 'immutable';

const initialState = fromJS({
  setting: '',
});

export default function settingReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
