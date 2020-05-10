import { all, fork } from 'redux-saga/effects';
import { authSaga } from './AuthUser';
import { commonSaga } from './Common';

export const rootSaga = function* root() {
  yield all([fork(authSaga), fork(commonSaga)]);
};
