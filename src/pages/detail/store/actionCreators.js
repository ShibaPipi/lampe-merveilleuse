import * as constants from "./constants";
import request from "../../../utils/request";
import 'antd/dist/antd.css';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content,
});

export const getDetail = (id) => {
  return (dispatch) => {
    request('posts/' + id)
      .then((res) => {
        dispatch(changeDetail(res.title, res.content))
      });
  }
};
