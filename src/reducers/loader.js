import {
  GET_BILL_BEGIN,
  GET_BILL_ERROR,
  GET_BILL_SUCCESS
} from '../config/constants';

const initialState = {
  isLoading: false
};

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case GET_BILL_BEGIN:
      return {
        ...initialState,
        isLoading: true,
      };

    case GET_BILL_SUCCESS:
    case GET_BILL_ERROR:
      return initialState;

    default:
      return state;
  }
};
