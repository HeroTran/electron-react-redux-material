import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { commonReducer } from './Common';
import { authUser } from './LoginRegister';
import { setting } from './Setting';
import { classList } from './ClassList';
import { openSlot } from './OpenSlot';
import { profile } from './Profile';
import { virtualClassRoom } from './VirtualClassRoom';

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    common: commonReducer,
    authUser,
    setting,
    classList,
    openSlot,
    profile,
    virtualClassRoom,
  });
