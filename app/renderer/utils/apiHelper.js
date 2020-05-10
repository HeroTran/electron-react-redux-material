import axios from 'axios';
import { authentication401 } from '../functionals/Common/actions';
import { getAuthorizationHeader } from './localStoreHelper';
import { store } from '../index';

const API_URL_HOST = process.env.API_HOST;

const { CancelToken } = axios;
let source = CancelToken.source();

export function apiGet(request, progressCb) {
  const req = {
    url: API_URL_HOST + request.url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthorizationHeader(),
    },
    responseType: 'json',
    onDownloadProgress: progressCb || [],
  };
  const fetchData = axios(req);
  return fetchData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return handleErrorUnauthorized(err);
    });
}

export function apiPost(request, cancelToken) {
  let req;
  if (cancelToken) {
    req = {
      url: API_URL_HOST + request.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: getAuthorizationHeader(),
      },
      data: JSON.stringify(request.data),
      responseType: 'json',
      cancelToken: cancelToken ? cancelToken.token : '',
    };
  } else {
    req = {
      url: API_URL_HOST + request.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: getAuthorizationHeader(),
      },
      data: JSON.stringify(request.data),
      responseType: 'json',
    };
  }
  const postData = axios(req);
  return postData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return handleErrorUnauthorized(err);
    });
}

export function postUploadFile(request, progressCb) {
  const req = {
    url: API_URL_HOST + request.url + request.uuid,
    data: request.data,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: getAuthorizationHeader(),
    },
    onUploadProgress: progressCb || [],
    cancelToken: source.token,
  };

  const postData = axios(req);
  return postData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return handleErrorUnauthorized(err);
    });
}

export function apiPut(request) {
  const req = {
    url: API_URL_HOST + request.url,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthorizationHeader(),
    },
    data: JSON.stringify(request.data),
    responseType: 'json',
  };

  const putData = axios(req);
  return putData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return handleErrorUnauthorized(err);
    });
}

export function apiPatch(request) {
  const req = {
    url: API_URL_HOST + request.url,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthorizationHeader(),
    },
    data: JSON.stringify(request.data),
    responseType: 'json',
  };
  const patchData = axios(req);
  return patchData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return handleErrorUnauthorized(err);
    });
}

export function apiDelete(request) {
  const req = {
    url: API_URL_HOST + request.url,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthorizationHeader(),
    },
    data: JSON.stringify(request.data),
    responseType: 'json',
  };
  const delData = axios(req);
  return delData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return handleErrorUnauthorized(err);
    });
}

export function cancelUploadFile() {
  source.cancel('upload file was terminated');
  source = CancelToken.source();
}

export function apiLogin(request) {
  const req = {
    url: API_URL_HOST + request.url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    data: JSON.stringify(request.data),
    responseType: 'json',
  };
  const postData = axios(req);
  return postData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((error) => {
      return Promise.reject(error.response || error);
    });
}

const URL_TIME_ZONE = process.env.TIME_ZONE_URL;
const KEY_TIME_ZONE = process.env.TIME_ZONE_KEY;

export async function getTimezone(userZone) {
  try {
    const params = {
      key: KEY_TIME_ZONE,
      format: 'json',
      zone: userZone,
    };
    const getData = await axios.get(URL_TIME_ZONE, { params });
    return getData.data.zones[0];
  } catch (error) {
    return Promise.reject(error.response || error);
  }
}

export async function getListTimezone() {
  try {
    const params = {
      key: KEY_TIME_ZONE,
      format: 'json',
    };
    const getData = await axios.get(URL_TIME_ZONE, { params });
    return getData;
  } catch (error) {
    return Promise.reject(error.response || error);
  }
}

function handleErrorUnauthorized(error) {
  const { status } = error.response;
  if (status === 401) {
    store.dispatch(authentication401(true));
    return;
  }
  return Promise.reject(error.response || error);
}
