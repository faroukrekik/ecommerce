import {
  GET_ALLPRODUCTS,
  GET_ALLPRODUCTS_FAIL,
  GET_ALLPRODUCTS_SUCCESS,
} from "../actionTypes";
import axios from "axios";

export const getProd = () => async (dispatch) => {
  dispatch({
    type: GET_ALLPRODUCTS,
  });
  try {
    const { data } = await axios.get("/Products/getProducts");
    dispatch({
      type: GET_ALLPRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALLPRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};
