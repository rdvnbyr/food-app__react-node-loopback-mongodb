import { authActionTypes } from "./_actions";

const initialState = {
  loading: false,
  error: "",
  isLogin: false,
  user: {},
  access_token: "",
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
    default:
      return state;
  }
};
