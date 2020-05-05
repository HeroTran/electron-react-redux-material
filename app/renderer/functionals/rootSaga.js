import { all } from 'redux-saga/effects';
import { authSaga } from './LoginRegister';
import { commonSaga } from './Common';
import { homeSaga } from './Home';
import { classListSaga } from './ClassList';
import { openSlotSaga } from './OpenSlot';
import { profileSaga } from './Profile';
import { settingSaga } from './Setting';
import { virtualClassRoomSaga } from './VirtualClassRoom';

export const rootSaga = function* root() {
  yield all([
    authSaga,
    commonSaga,
    homeSaga,
    classListSaga,
    openSlotSaga,
    profileSaga,
    settingSaga,
    virtualClassRoomSaga,
  ]);
};
