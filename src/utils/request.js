import fetch from 'axios';
import { getAuthHeader, redirectLogin } from './auth';
import { message } from 'antd';

function checkStatus(response) {
  if (401 === response.code) {
    redirectLogin();
  }

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }

  const msg = response.data.message ? response.data.message : '接口格式返回错误';
  message.error(msg);

  throw Object.assign(new Error(`${response.statusText}:${msg}`), {
    response
  });
  // const { status, message } = responseJson;
  // if ('error' === status) {
  //   throw new Error(message);
  // }
  //
  // return responseJson;
}

function checkData(response) {
  if (true === response.success) {
    return response;
  }

  if (response.message) {
    message.error(response.message);
  } else {
    throw Object.assign(new Error(response.message || '请求失败'), {
      response
    });
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  // const authHeader = getAuthHeader(localStorage.getItem('jwToken'));
  // const response = await fetch(url, { ...options, ...authHeader });
  //
  // checkStatus(response);
  //
  // return response;
  return await fetch(url, { ...getAuthHeader(localStorage.getItem('jwToken')), ...options })
    .then(checkStatus)
    .then(checkData)
    .then(data => ({ ...data }))
    .catch((error) => {
      throw error
    });
}
