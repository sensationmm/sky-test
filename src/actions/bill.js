import {
  GET_BILL
} from '../config/constants';

import request from 'request';

export const getBill = (src) => dispatch => {
  request(src, (error, response, bill) => {
    dispatch({ type: GET_BILL, bill });
  });
}
