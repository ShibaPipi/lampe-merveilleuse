import * as constants from './constants';
import request from '../../../utils/request';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true,
});

export const login = (account, password) => {
  return (dispatch) => {
    request('login.json?account=' + account + '&password=' + password).then((res) => {
      if (res) {
        dispatch(changeLogin());
      } else {
        alert('登录失败');
      }
    })
  }
};

export const logout = () => ({
  type: constants.LOGOUT,
  value: false,
});
