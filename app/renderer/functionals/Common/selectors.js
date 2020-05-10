import { createSelector } from 'reselect';

export const getCommonState = (state) => {
  return state.get('common');
};
export const makeSelectIsLoading = createSelector(getCommonState, (common) =>
  common.get('isLoading')
);

export const makeSelectIsAuthentication = createSelector(
  getCommonState,
  (common) => common.get('isAuthentication401')
);
