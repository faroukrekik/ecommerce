import axios from "axios";
import {
  Forget_Password_FAIL,
  Forget_Password_SUCCESS,
  Forget_password,
  GETPROF,
  GETPROF_FAIL,
  GETPROF_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  Reset_Password,
  Reset_Password_Fail,
  Reset_Password_Success,
} from "../actionTypes";

export const registerUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    const { data } = await axios.post("user/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const loginUser = (loggedUser) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const { data } = await axios.post("/user/login", loggedUser);
    console.log(data);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const send_mail = (email) => async (dispatch) => {
  dispatch({
    type: Forget_password,
  });
  try {
    const { data } = await axios.post("/user/forgetPassword", { email });
    dispatch({
      type: Forget_Password_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Forget_Password_FAIL,
      payload: error.response.data,
    });
  }
};

export const Resetpass = (id, token, password) => async (dispatch) => {
  dispatch({
    type: Reset_Password,
  });
  try {
    const { data } = await axios.post(`/user/reset-password/${id}/${token}`, {
      password,
    });
    console.log(data);
    dispatch({
      type: Reset_Password_Success,
      payload: data.password,
    });
  } catch (error) {
    dispatch({
      type: Reset_Password_Fail,
      payload: error.response.data,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  try {
    const { data } = await axios.get("/user/logout");
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GETPROF,
  });
  try {
    const { data } = await axios.get("/user/auth", config);
    dispatch({
      type: GETPROF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GETPROF_FAIL,
      payload: error.response.data,
    });
  }
};

export const logoutuser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
