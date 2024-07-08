const {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  Forget_password,
  Forget_Password_SUCCESS,
  Forget_Password_FAIL,
  Reset_Password,
  Reset_Password_Success,
  Reset_Password_Fail,
  GETPROF,
  GETPROF_SUCCESS,
  GETPROF_FAIL,
  LOGOUT,
} = require("../actionTypes");

const initialState = {
  loading: false,
  user: null,
  errors: null,
  token: null,
  isAuth: false,
  email: null,
  nvPass: null,
  passChange: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case REGISTER_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        errors: null,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, errors: payload };
    case Forget_password:
      return { ...state, loading: true };
    case Forget_Password_SUCCESS:
      return { ...state, loading: false, email: payload };
    case Forget_Password_FAIL:
      return { ...state, loading: false, errors: payload };
    case Reset_Password:
      return { ...state, loading: true };
    case Reset_Password_Success:
      return { ...state, loading: false, nvPass: payload, passChange: true };
    case Reset_Password_Fail:
      return { ...state, loading: false, errors: payload };
    case GETPROF:
      return { ...state, loading: true };
    case GETPROF_SUCCESS:
      return { ...state, loading: false, user: payload, isAuth: true };
    case GETPROF_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOGOUT:
      return { ...state, loading: false, user: null, isAuth: false };

    default:
      return state;
  }
};
export default userReducer;
