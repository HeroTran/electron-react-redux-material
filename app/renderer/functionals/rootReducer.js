import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { language } from './Language';
import { authUser } from './LoginRegister';

export const rootReducer = (history) =>
  combineReducers({
    language,
    router: connectRouter(history),
    authUser,
  });
