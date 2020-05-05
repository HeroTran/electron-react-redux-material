import { createSelector } from 'reselect';

export const getUserState = (state) => {
  return state.get('user');
};
export const makeSelectUserList = createSelector(getUserState, (user) =>
  user.get('userList')
);
