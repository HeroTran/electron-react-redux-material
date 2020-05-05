import { fromJS } from 'immutable';

const initialState = fromJS({
  classList: [],
});

export default function classListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
