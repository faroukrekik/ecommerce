import api from "../../utils/axios";

export const getProd = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  try {
    const response = await api.get("/Products/getProducts");
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAIL", payload: error.message });
  }
};

// New action to get products by category
export const getProductsByCategory = (category) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  try {
    const response = await api.get(`/Products/category/${category}`);
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAIL", payload: error.message });
  }
};

// New action to get all categories
export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: "GET_CATEGORIES_REQUEST" });
  try {
    const response = await api.get("/Products/categories");
    dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIES_FAIL", payload: error.message });
  }
};
