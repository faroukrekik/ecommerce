import api from "../../utils/axios";
import {
  EDITUSERS,
  EDITUSERS_Fail,
  EDITUSERS_Success,
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
    const { data } = await api.post("/user/register", newUser);
    if (data?.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response?.data || error.message,
    });
  }
};

export const loginUser = (loggedUser) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    console.log("Attempting login with:", loggedUser);
    console.log("Making request to:", "/user/login");
    const { data } = await api.post("/user/login", loggedUser);
    console.log("Login response:", data);
    localStorage.setItem("token", data.token);
    api.defaults.headers.common["Authorization"] = data.token;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Login error:", error);
    console.error("Error response:", error.response);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data || error.message,
    });
  }
};

export const send_mail = (email) => async (dispatch) => {
  dispatch({
    type: Forget_password,
  });
  try {
    const { data } = await api.post("/user/forgetPassword", { email });
    dispatch({
      type: Forget_Password_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Forget_Password_FAIL,
      payload: error.response?.data || error.message,
    });
  }
};

export const Resetpass = (id, token, password) => async (dispatch) => {
  dispatch({
    type: Reset_Password,
  });
  try {
    const { data } = await api.post(`/user/reset-password/${id}/${token}`, {
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
      payload: error.response?.data || error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    // Hit server logout for server-side cleanup
    try {
      await api.get("/user/logout");
    } catch (e) {
      /* ignore */
    }
    // Clear all client auth traces
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response?.data || error.message,
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
    const { data } = await api.get("/user/auth", config);
    dispatch({
      type: GETPROF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GETPROF_FAIL,
      payload: error.response?.data || error.message,
    });
  }
};

export const logoutuser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const modifyuser = (updateuser) => async (dispatch) => {
  dispatch({
    type: EDITUSERS,
  });
  try {
    const { data } = await api.put(
      `/user/update-user/${updateuser._id}`,
      updateuser
    );
    dispatch({
      type: EDITUSERS_Success,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDITUSERS_Fail,
      payload: error.response.data,
    });
  }
};
