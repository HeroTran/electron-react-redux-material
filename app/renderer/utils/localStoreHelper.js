import { LOCAL_STORAGE_KEY } from '../functionals/Common/constants';

export function setLocalStore(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStore(key) {
  const data = localStorage.getItem(key);
  if (data != null) {
    return JSON.parse(data);
  }
  return null;
}

export function removeLocalStore(key) {
  localStorage.removeItem(key);
}

export function getAccessToken() {
  const currentUser = getLocalStore(LOCAL_STORAGE_KEY.CURRENT_USER);
  if (currentUser != null) {
    return currentUser.token;
  }
  return '';
}

export function getAuthorizationHeader() {
  return `Bearer ${getAccessToken()}`;
}

export function getCurrentUser() {
  const currentUser = getLocalStore(LOCAL_STORAGE_KEY.CURRENT_USER);
  if (currentUser != null) {
    return currentUser;
  }
  return '';
}

export function removeAllLocalStore() {
  localStorage.removeItem(LOCAL_STORAGE_KEY.CURRENT_USER);
  localStorage.removeItem(LOCAL_STORAGE_KEY.USER_TIMEZONE);
  localStorage.removeItem(LOCAL_STORAGE_KEY.LEARNER_SELECTED_ID);
}
// CURRENT_USER
// {"id":2671,"teacher_id":90,"teacher_code":"T00090","username":"test_desktop@gmail.com","email":"test_desktop@gmail.com","fullname":"Teacher One","avatar_url":"","gender":0,"dob":"1993-02-03","user_type":2,"role":"ROLE_TEACHER","timezone":"Asia/Ho_Chi_Minh","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxMTU5NTAsIm5iZiI6MTU4OTExNTk1MCwianRpIjoiNDU0M2QzNWQtNDc3Zi00NWFmLWI1NzAtNmY1NDY5OWJiMWRmIiwiZXhwIjoxNTg5MjAyMzUwLCJpZGVudGl0eSI6eyJpZCI6MjY3MSwidXNlcm5hbWUiOiJ0ZWFjaGVyMUBnbWFpbC5jb20iLCJlbWFpbCI6InRlYWNoZXIxQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6Miwicm9sZSI6IlJPTEVfVEVBQ0hFUiIsInRpbWV6b25lIjoiQXNpYS9Ib19DaGlfTWluaCJ9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.IIfCJ6OCEi5TTZqQnOdxBZt4gE3dxbONcHHXF4uwLPI"}
export function isCheckAuth() {
  return getCurrentUser() !== '';
}
