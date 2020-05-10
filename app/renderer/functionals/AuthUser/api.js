import * as apiHelper from '../../utils/apiHelper';
import { removeAllLocalStore } from '../../utils/localStoreHelper';
import { API_URL } from './constants';

export function loginUser(email, password) {
  const request = {
    url: API_URL.LOGIN,
    data: {
      username: email,
      password,
    },
  };
  return apiHelper.apiLogin(request);
}

export function logoutUser() {
  removeAllLocalStore();
}
