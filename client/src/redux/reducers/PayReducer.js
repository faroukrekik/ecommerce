import {
  ADD_CART_FAIL,
  ADD_PAYMENT,
  ADD_PAYMENT_Success,
} from "../actionTypes";

const initialState = {
  checkout: null,
  loading: false,
  error: null,
};

const PayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PAYMENT:
      return { ...state, loading: true };
    case ADD_PAYMENT_Success:
      return { ...state, loading: false, checkout: payload };
    case ADD_CART_FAIL:
      return { ...state, laoding: false, error: payload };

    default:
      return state;
  }
};

export default PayReducer;
