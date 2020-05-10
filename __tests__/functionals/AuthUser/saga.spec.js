import { put } from 'redux-saga/effects';
import * as api from '../../../app/renderer/functionals/AuthUser/api';
import { login } from '../../../app/renderer/functionals/AuthUser/saga';

describe('login()', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  const data = {
  };

  it('Login success', () => {
    const action = {
      email: 'herotran210_desktop_app@english.vn',
      password: '12345',
    };
    const gen = login(action);
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_ENABLE_SUCCESS' })
    );
    const response = { data: { data } };
    expect(gen.next().value).toEqual(
      api.loginUser(action.email, action.password)
    );
    expect(gen.next(response).value.payload.action.type).toContain(
      'LOGIN_SUCCESS'
    );
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_DISABLE_SUCCESS' })
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
  it('Login fail', () => {
    const action = {
      email: 'hungteacher@herotran210_desktop_appenglish.vn',
      password: '123456',
    };
    const gen = login(action);
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_ENABLE_SUCCESS' })
    );
    expect(gen.next().value).toEqual(
      api.loginUser(action.email, action.password)
    );
    const response = {};
    expect(gen.next(response).value).toEqual(
      put({ type: 'IS_LOADING_DISABLE_SUCCESS' })
    );
    expect(gen.next(response).value.payload.action.type).toContain(
      'LOGIN_FAILURE'
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
