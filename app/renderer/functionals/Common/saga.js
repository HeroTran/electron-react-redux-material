import { takeLatest, put, all } from 'redux-saga/effects';
import { loadingEnable, loadingDisable } from './actions';
import actiontypes from './actionTypes';

function* setLoadingEnable() {
  yield put(loadingEnable());
}

function* setLoadingDisable() {
  yield put(loadingDisable());
}

export default function* root() {
  yield all([
    takeLatest(actiontypes.IS_LOADING_ENABLE_REQUEST, setLoadingEnable),
    takeLatest(actiontypes.IS_LOADING_DISABLE_REQUEST, setLoadingDisable),
  ]);
}
