import { all, takeLatest, put } from 'redux-saga/effects';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './actions';
import { LOCAL_STORAGE_KEY, ROLE } from '../Common/constants';
import { setLocalStore } from '../../utils/localStoreHelper';
import { loadingEnable, loadingDisable, resetCommon } from '../Common/actions';
import { loginUser, logoutUser } from './api';
import { getTimezone } from '../../utils/apiHelper';
import actiontypes from './actionTypes';

export function* login(action) {
  try {
    yield put(loadingEnable());
    const res = yield loginUser(action.email, action.password);
    const { data } = res.data;
    if (data.role === ROLE.ROLE_TEACHER) {
      yield setLocalStore(LOCAL_STORAGE_KEY.CURRENT_USER, data);
      const zones = yield getTimezone(data.timezone);
      if (zones) {
        localStorage.setItem(
          LOCAL_STORAGE_KEY.USER_TIMEZONE,
          JSON.stringify(zones)
        );
      }
    }
    yield put(loginSuccess(data));
    yield put(loadingDisable());
  } catch (err) {
    yield put(loadingDisable());
    yield put(loginFailure(err));
  }
}
export function* logout() {
  try {
    yield logoutUser();
    yield put(resetCommon());
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(actiontypes.LOGIN_REQUEST, login),
    takeLatest(actiontypes.LOGOUT_REQUEST, logout),
  ]);
}
