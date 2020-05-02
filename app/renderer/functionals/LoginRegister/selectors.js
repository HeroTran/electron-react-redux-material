import { createSelector } from 'reselect';

export const getAuthState = (state) => {
  return state.get('authUser');
};

export const makeSelectUserNameState = createSelector(getAuthState, (user) =>
  user.get('login').get('userName')
);
