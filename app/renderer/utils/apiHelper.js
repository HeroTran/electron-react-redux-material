import axios from 'axios';
import { getAuthorizationHeader } from './helper';

const META_API = process.env.REACT_APP_API_URL;

const { CancelToken } = axios;
let source = CancelToken.source();

export function apiGet(request, progressCb) {
  const req = {
    url: META_API + request.url,
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
      return Promise.reject(err);
    });
}

export function post(request, cancelToken) {
  let req;
  if (cancelToken) {
    req = {
      url: META_API + request.url,
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
      url: META_API + request.url,
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
      return Promise.reject(err);
    });
}

export function postUploadFile(request, progressCb) {
  const req = {
    url: META_API + request.url + request.uuid,
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
      return Promise.reject(err);
    });
}

export function apiPut(request) {
  const req = {
    url: META_API + request.url,
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
      return Promise.reject(err);
    });
}

export function apiPatch(request) {
  const req = {
    url: META_API + request.url,
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
      return Promise.reject(err);
    });
}

export function apiDelete(request) {
  const req = {
    url: META_API + request.url,
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
      return Promise.reject(err);
    });
}

export function cancelUploadFile() {
  source.cancel('upload file was terminated');
  source = CancelToken.source();
}

export function login(request) {
  const req = {
    url: META_API + request.url,
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
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function logout(url) {
  const req = {
    url: META_API + url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthorizationHeader(),
    },
    responseType: 'json',
  };
  const postData = axios(req);
  return postData
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
