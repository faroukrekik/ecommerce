const initialState = {
  loading: false,
  Product: [],
  categories: [],
  categoriesLoading: false,
  errors: null,
};

const prodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS_REQUEST":
      return { ...state, loading: true };
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, loading: false, Product: payload };
    case "GET_PRODUCTS_FAIL":
      return { ...state, loading: false, errors: payload };

    case "GET_CATEGORIES_REQUEST":
      return { ...state, categoriesLoading: true };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, categoriesLoading: false, categories: payload };
    case "GET_CATEGORIES_FAIL":
      return { ...state, categoriesLoading: false, errors: payload };

    default:
      return state;
  }
};

export default prodReducer;
