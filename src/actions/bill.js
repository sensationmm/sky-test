import {
  GET_BILL_BEGIN,
  GET_BILL_SUCCESS
} from '../config/constants';

import request from 'request';

export const getBill = (src) => dispatch => {
  dispatch({ type: GET_BILL_BEGIN });

  request(src, (error, response, bill) => {
    dispatch({ type: GET_BILL_SUCCESS, bill });
  });
}
