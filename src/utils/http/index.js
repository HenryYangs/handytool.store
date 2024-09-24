import axios from 'axios';
import { parseJSON, queryStringify } from '../object';
import { parseSearch } from '../url';
import { STORAGE_LOGIN_INFO } from '../../constant/storage';
import { CODE } from '../../constant/response';
import { URL_AUTH_WHITE_LIST } from './config';
import event from '../event';
import { EVENTS } from '../../constant/events';
import { ALERT_STATUS } from '../../constant/status';

const instance = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data);
    },
  ],

  transformResponse: [
    function (data) {
      return parseJSON(data);
    },
  ],
});

instance.interceptors.request.use(
  function (config) {
    config.url = `${import.meta.env.VITE_SERVER_AUTH}${config.url}`;

    if (config.method === 'get') {
      const [, url, search] = config.url?.match(/(.*)(\?.*)/) || [];
      const result = {};

      if (search) {
        Object.entries(parseSearch(search)).forEach(([key, value]) => {
          if (value !== 'undefined') {
            result[key] = value;
          }
        });
  
        config.url = `${url}?${queryStringify(result)}`;
      }
    }

    if (URL_AUTH_WHITE_LIST.find(url => config.url?.startsWith(url))) {
      return config;
    }

    const { token } = parseJSON(localStorage.getItem(STORAGE_LOGIN_INFO) || '');

    return {
      ...config,
      headers: {
        ...config.headers,
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      }
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // request success
    if (response.status === CODE.REQUEST_STATUS.SUCCESS && response.data.code === CODE.LOGIC_STATUS.SUCCESS) {
      return Promise.resolve(response.data.data);
    }

    if (response.data.code === CODE.LOGIC_STATUS.BIZ_ERROR.AUTH_FAIL) {
      event.emit(EVENTS.AUTH_SHOW);
      event.emit(EVENTS.ALERT, {
        show: true,
        status: ALERT_STATUS.ERROR,
        message: 'Please login',
      });

      return Promise.reject();
    }

    return Promise.reject(response.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

const http = (options, extra = {}) => {
  return new Promise((resolve, reject) => {
    instance.request(options)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        // error is empty, means no need to display alert
        if (error && extra.showErrorToast !== false) {
          event.emit(EVENTS.ALERT, {
            show: true,
            status: ALERT_STATUS.ERROR,
            message: error.message,
          });
        }

        reject(error);
      })
  });
}

export default http;