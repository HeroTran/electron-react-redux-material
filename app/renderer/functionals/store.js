import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import * as Immutable from 'immutable';
import { logger } from '../middleware';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const initImmutable = Immutable.Map();
const initial = {
  language: {},
  router: {},
  authUser: {},
};

const preloadedState = initImmutable.map(Immutable.fromJS(initial));
const actionSanitizer = (action) => {
  if (action.payload) {
    return {
      ...action,
    };
  }
  return action;
};

const stateSanitizer = (state) => {
  const parseState = state.toJS();
  if (parseState) {
    return Immutable.fromJS(parseState);
  }
  return state;
};
export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(
    sagaMiddleware,
    logger,
    routerMiddleware(history)
  );
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = composeWithDevTools({
      actionSanitizer,
      stateSanitizer,
    });
    middleware = composeEnhancers(middleware);
  }

  const store = createStore(rootReducer(history), preloadedState, middleware);
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer(history));
    });
  }
  sagaMiddleware.run(rootSaga);
  window.store = store;
  return store;
}
