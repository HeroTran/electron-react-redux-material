import { createSelector } from 'reselect';

export const getAuthState = (state) => {
  return state.get('authReducer');
};

export const makeSelectUserState = createSelector(getAuthState, (user) => {
  const currentUser = user.get('auth').get('currentUser');
  return currentUser && currentUser.toJS();
});

export const makeSelectErrorLoginState = createSelector(
  getAuthState,
  (user) => {
    const error = user.get('auth').get('error');
    return error ? error.toJS() : '';
  }
);
