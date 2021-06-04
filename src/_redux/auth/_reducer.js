import { authActionTypes } from "./_actionTypes";

const initialState = {
  loading: false,
  error: "",
  isLogin: false,
  user: {},
  accessToken: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //*LOGIN
    case authActionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        isLogin: true,
        user: action.payload.user,
        accessToken: action.payload.access.id,
      };
    case authActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //*REGISTER
    case authActionTypes.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case authActionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //*LOGOUT
    case authActionTypes.LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGOUT_SUCCESS:
      return initialState
    case authActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
