import actionTypes from './actionTypes';

export const loadingEnable = () => {
  return {
    type: actionTypes.IS_LOADING_ENABLE_SUCCESS,
  };
};

export const loadingDisable = () => {
  return {
    type: actionTypes.IS_LOADING_DISABLE_SUCCESS,
  };
};

export const authentication401 = (isError) => {
  return {
    type: actionTypes.AUTHENTICATION_401,
    isError,
  };
};

export const resetCommon = () => {
  return {
    type: actionTypes.RESET_COMMON,
  };
};
