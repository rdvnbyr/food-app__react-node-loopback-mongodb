import { authActionTypes } from "./_actionTypes";

export const authActions = {
  // Login Action
  login: {
    call: (user) => {
      return {
        type: authActionTypes.LOGIN,
        payload: {
          user,
        },
      };
    },
    success: ({ user, access }) => {
      return {
        type: authActionTypes.LOGIN_SUCCESS,
        payload: {
          user,
          access,
        },
      };
    },
    fail: (error) => {
      return {
        type: authActionTypes.LOGIN_FAIL,
        payload: {
          error,
        },
      };
    },
  },
  // Register Action
  register: {
    call: (user) => {
      return {
        type: authActionTypes.REGISTER,
        payload: {
          user,
        },
      };
    },
    success: () => {
      return {
        type: authActionTypes.REGISTER_SUCCESS,
      };
    },
    fail: (error) => {
      return {
        type: authActionTypes.REGISTER_FAIL,
        payload: {
          error,
        },
      };
    },
  },
  // Logout Action
  logout: {
    call: () => {
      return {
        type: authActionTypes.LOGOUT,
      };
    },
    success: () => {
      return {
        type: authActionTypes.LOGOUT_SUCCESS,
      };
    },
    fail: (error) => {
      return {
        type: authActionTypes.LOGOUT_FAIL,
        payload: {
          error,
        },
      };
    },
  },
};
