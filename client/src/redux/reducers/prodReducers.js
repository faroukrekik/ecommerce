const {
  GET_ALLPRODUCTS,
  GET_ALLPRODUCTS_SUCCESS,
  GET_ALLPRODUCTS_FAIL,
} = require("../actionTypes");

const initialState = {
  loading: false,
  Product: [],
  errors: null,
};
const prodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLPRODUCTS:
      return { ...state, loading: true };
    case GET_ALLPRODUCTS_SUCCESS:
      return { ...state, loading: false, Product: payload };
    case GET_ALLPRODUCTS_FAIL:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};
export default prodReducer;
