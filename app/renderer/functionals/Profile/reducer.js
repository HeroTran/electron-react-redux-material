import { fromJS } from 'immutable';

const initialState = fromJS({
  profile: [],
});

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
