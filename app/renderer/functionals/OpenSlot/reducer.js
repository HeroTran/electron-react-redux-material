import { fromJS } from 'immutable';

const initialState = fromJS({
  openSlot: [],
});

export default function openSlotReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
