import axios from 'axios';
import { message } from 'antd';
import { log } from './helper';
import { getAuthHeader, redirectLogin } from './auth';
import { BASE_URL_PREFIX } from './constants';

axios.defaults.baseURL = BASE_URL_PREFIX;
axios.defaults.headers = getAuthHeader(localStorage.getItem('jwToken'));
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

// request 拦截器
axios.interceptors.request.use(config => {
  return config;
}, err => {
  message.error('请求超时');
  return Promise.resolve(err);
});

// response 拦截器
axios.interceptors.response.use(
  response => {
    log(JSON.stringify(response)); // for debug
    const { data } = response;

    if (200 !== response.status || 'error' === data.status) {
      message.error(response.data.message);

      return Promise.reject(response);
    } else {
      return data.data;
    }
  },
  error => {
    log(JSON.stringify(error)); // for debug
    log(JSON.stringify(error.response)); // for debug
    const {
      response: {
        status,
        data: {
          message: msg = '服务器发生错误，请检查服务器。'
        }
      }
    } = error;

    if (401 === status) {
      redirectLogin();
    }

    message.error(msg);

    return Promise.reject(error)
  }
);
