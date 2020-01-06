import axios from 'axios'

import './requestConfig'
import { log } from './helper';
import { getAuthHeader } from './auth';

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
