import { fromJS } from 'immutable';

const initialState = fromJS({
  virtualClassRoom: [],
});

export default function virtualClassRoomReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
