import actionTypes from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
}

export function loginFailure(error) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error,
  };
}

export function logoutRequest() {
  return {
    type: actionTypes.LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
}

export function logoutFailure(error) {
  return {
    type: actionTypes.LOGOUT_FAILURE,
    error,
  };
}
