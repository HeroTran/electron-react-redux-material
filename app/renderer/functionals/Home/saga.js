import { takeLatest, all } from 'redux-saga/effects';
import actiontypes from './actionTypes';

export function* watchGetHomeInfo() {
  yield takeLatest(actiontypes.GET_ALL_INFO_HOME, {});
}

export default function* root() {
  yield all([watchGetHomeInfo()]);
}
