import actionTypes from './actionTypes';

export const loadingEnable = () => {
  return {
    type: actionTypes.IS_LOADING_ENABLE,
  };
};

export const loadingDisable = () => {
  return {
    type: actionTypes.IS_LOADING_DISABLE,
  };
};
