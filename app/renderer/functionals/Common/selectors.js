import { createSelector } from 'reselect';

export const getCommonState = (state) => {
  return state.get('common');
};
export const makeSelectIsLoading = createSelector(getCommonState, (common) =>
  common.get('isLoading')
);
