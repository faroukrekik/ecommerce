import {
  ADD_CART,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  DELETE_ITEM,
  GET_CART,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
  UPDATECART,
} from "../actionTypes";

const initialState = {
  cart: { items: [] },
  loading: false,
  error: null,
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return { ...state, loading: true };
    case ADD_CART_SUCCESS:
      return { ...state, loading: false, cart: payload };
    case ADD_CART_FAIL:
      return { ...state, loading: false, error: payload };
    case GET_CART:
      return { ...state, loading: true };
    case GET_CART_SUCCESS:
      return { ...state, loading: false, cart: payload };
    case GET_CART_FAIL:
      return { ...state, loading: false, error: payload };

    case DELETE_ITEM:
      return { ...state, cart: payload };

    case UPDATECART:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: payload.items,
        },
      };

    default:
      return state;
  }
};
export default CartReducer;
