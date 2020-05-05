import { takeLatest, put, all } from 'redux-saga/effects';
import { loadingEnable, loadingDisable } from './actions';
import actiontypes from './actionTypes';

function* setLoadingEnable() {
  yield put(loadingEnable());
}

function* setLoadingDisable() {
  yield put(loadingDisable());
}

export const commonSaga = all([
  takeLatest(actiontypes.IS_LOADING_ENABLE, setLoadingEnable),
  takeLatest(actiontypes.IS_LOADING_DISABLE, setLoadingDisable),
]);
