import { all, fork } from 'redux-saga/effects';
import { authSaga } from './LoginRegister';

export const rootSaga = function* root() {
  yield all([fork(authSaga)]);
};
