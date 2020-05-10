import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { commonReducer } from './Common';
import { authReducer } from './AuthUser';
import { setting } from './Setting';
import { classList } from './ClassList';
import { openSlot } from './OpenSlot';
import { profile } from './Profile';
import { virtualClassRoom } from './VirtualClassRoom';

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    common: commonReducer,
    authReducer,
    setting,
    classList,
    openSlot,
    profile,
    virtualClassRoom,
  });
