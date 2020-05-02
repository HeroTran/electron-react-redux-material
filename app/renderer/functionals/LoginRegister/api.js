import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';

export function loginUser(data) {
  const request = {
    url: API_URL.LOGIN,
    data: {
      email: data.email,
      password: data.password,
    },
  };
  return apiHelper.login(request);
}

export function logoutUser() {
  return apiHelper.logout(API_URL.LOGOUT);
}
