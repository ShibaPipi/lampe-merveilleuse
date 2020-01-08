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


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} [url] The URL we want to request
 * @param  {object} [_options] The options we want to pass to 'fetch'
 * @return {axios}
 */
const request = async (url, _options) => {
  // 默认GET方法

  return axios({
    url,
    ...getAuthHeader(localStorage.getItem('jwToken')),
    ..._options
  })
};

/**
 * 封装get请求
 * @param { String } url 请求路径
 * @param { Object } _options 请求参数
 * @param _options GET请求参数，对象形式
 */
const get = (url, _options) => {
  return request(url,  ..._options)
};

/**
 * 封装post请求
 * @param { String } url 请求路径
 * @param _options POST请求请求参数，对象形式
 */
const post = (url, _options) => {
  return request(url, ..._options)
};

export { get, post };

export default request;
