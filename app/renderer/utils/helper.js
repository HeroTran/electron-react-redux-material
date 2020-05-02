import { ACCESS_TOKEN_KEY } from '../functionals/LoginRegister/constants';

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
      .toUpperCase();
  }
  return `${s4() + s4()} - ${s4() + s4()} - ${s4() + s4()} - ${s4() + s4()}`;
};
export const trimURLProtocolAndDomain = (url) => {
  if (
    url.match(/\/\/[^\/]+\/([^\.]+)/) &&
    url.match(/\/\/[^\/]+\/([^\.]+)/).length
  ) {
    return url.match(/\/\/[^\/]+\/([^\.]+)/)[1];
  }
  return url;
};

export function setLocalStore(key, val) {
  window.localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStore(key) {
  const data = window.localStorage.getItem(key);
  if (data != null) {
    return JSON.parse(data);
  }
  return null;
}

export function removeLocalStore(key) {
  window.localStorage.removeItem(key);
}

export function getAccessToken() {
  const user = getLocalStore(ACCESS_TOKEN_KEY);
  if (user != null) {
    return user;
  }
  return '';
}

export function getAuthorizationHeader() {
  return `${getAccessToken()}`;
}

export const loginFB = () => {
  return `${process.env.REACT_APP_API_URL}/api/auth/facebook`;
};
