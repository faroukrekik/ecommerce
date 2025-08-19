import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GETPROF,
  GETPROF_SUCCESS,
  GETPROF_FAIL,
} from "../../redux/actionTypes";
import api from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const OAuthSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      try {
        const { data } = await api.get("/user/oauth/success", {
          withCredentials: true,
        });
        localStorage.setItem("token", data.token);
        api.defaults.headers.common["Authorization"] = data.token;
        // load profile into store immediately
        dispatch({ type: GETPROF });
        dispatch({ type: GETPROF_SUCCESS, payload: data.user });
        navigate("/profile", { replace: true });
      } catch (err) {
        dispatch({
          type: GETPROF_FAIL,
          payload: err.response?.data || err.message,
        });
        navigate("/login", { replace: true });
      }
    };
    run();
  }, [dispatch, navigate]);

  return null;
};

export default OAuthSuccess;



