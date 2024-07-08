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
import axios from "axios";

export const addcart = (productId, quantity, userId) => async (dispatch) => {
  dispatch({
    type: ADD_CART,
  });

  try {
    const { data } = await axios.post(
      `/Carts/add_cart/${userId}/${productId}`,
      {
        quantity,
      }
    );

    dispatch({
      type: ADD_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CART_FAIL,
      payload: error.response.data,
    });
  }
};

export const getCart = (userId) => async (dispatch) => {
  dispatch({
    type: GET_CART,
  });
  try {
    const { data } = await axios.get(`/Carts/get_cart/${userId}`);
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAIL,
      payload: error.response.data,
    });
  }
};

export const removeitem = (userId, productId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/Carts/delete_cart/${userId}/${productId}`
    );
    dispatch({
      type: DELETE_ITEM,
      payload: data,
    });
    alert("item deleted");
  } catch (error) {
    alert("item  not deleted");
  }
};

export const editqunt = (userId, productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/Carts/editquantity/${userId}/${productId}`,
      {
        quantity,
      }
    );
    dispatch({
      type: UPDATECART,
      payload: data,
    });
  } catch (error) {
    alert("error update carte");
  }
};
