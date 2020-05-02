export const logger = (store) => (next) => (action) => {
  const result = next(action);
  if (process.env.NODE_ENV !== 'production') {
    console.warn('dispatching', action.type);
    console.warn('next state', store.getState());
  }
  return result;
};

export const crashReporter = (store) => (next) => (action) => {
  try {
    // console.log('crashReporter success');
    return next(action);
  } catch (err) {
    console.error('Need to config for production Caught an exception!', err);
    const state = store.getState();
    const extra = { action, state };
    console.error('extra', extra);
    throw err;
  }
};
