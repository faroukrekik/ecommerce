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
import api from "../../utils/axios";

export const addcart = (productId, quantity, userId) => async (dispatch) => {
  dispatch({
    type: ADD_CART,
  });

  try {
    const { data } = await api.post(`/Carts/add_cart/${userId}/${productId}`, {
      quantity: Number(quantity) || 1,
    });

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
    const { data } = await api.get(`/Carts/get_cart/${userId}`);
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
    const { data } = await api.delete(
      `/Carts/delete_cart/${userId}/${productId}`
    );
    dispatch({ type: DELETE_ITEM, payload: data });
    alert("item deleted");
  } catch (error) {
    alert("item  not deleted");
  }
};

export const editqunt = (userId, productId, quantity) => async (dispatch) => {
  try {
    const { data } = await api.put(
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
