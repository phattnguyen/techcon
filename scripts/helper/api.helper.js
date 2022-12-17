const axios = require('axios');

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

const getDefaultHeaders = () => ({
  'Content-Type': 'application/json'
});

const fetch = (url, { method, data, headers, timeout = 300000, token, ...restParams }) => {
  const config = {
    method,
    headers: { ...getDefaultHeaders(), ...headers },
    timeout: timeout,
    withCredentials: true,
    ...restParams
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (method !== HTTP_METHODS.GET && data) {
    config.data = data;
  }

  return axios(url, config);
};

const api = {
  get: (url, options = {}) => fetch(url, { ...options, method: HTTP_METHODS.GET }),
  post: (url, options = {}) => fetch(url, { ...options, method: HTTP_METHODS.POST }),
  put: (url, options = {}) => fetch(url, { ...options, method: HTTP_METHODS.PUT }),
  patch: (url, options = {}) => fetch(url, { ...options, method: HTTP_METHODS.PATCH }),
  delete: (url, options = {}) => fetch(url, { ...options, method: HTTP_METHODS.DELETE })
};

module.exports = api;
