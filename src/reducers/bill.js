import {
  GET_BILL_SUCCESS
} from '../config/constants';

const initialState = {
  statement: {
    generated: null,
    due: null,
    period: {
      from: null,
      to: null
    }
  },
  total: null,
  package: {
    subscriptions: [],
    total: null
  },
  callCharges: {
    calls: [],
    total: null
  },
  skyStore: {
    rentals: [],
    buyAndKeep: [],
    total: null
  }
};

export const bill = (state = initialState, action) => {
  switch (action.type) {
    case GET_BILL_SUCCESS: {
      const { bill } = action;

      const billObject = JSON.parse(bill);

      const newBill = { 
        ...billObject
      };

      return newBill;

    }

    default:
      return state;
  }
};
