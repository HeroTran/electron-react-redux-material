import { all, takeLatest } from 'redux-saga/effects';
import actionTypes from './actionTypes';

export function* userLogin(action) {
  yield 1;
  yield action;
}

export function* watchUserLogin() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, userLogin);
}

export default function* root() {
  yield all([watchUserLogin()]);
}
