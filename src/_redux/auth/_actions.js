const PREFIX = "[auth]";

export const authActionTypes = {
  //*Login
  LOGIN: `${PREFIX}LOGIN`,
  LOGIN_SUCCESS: `${PREFIX}LOGIN_SUCCESS`,
  LOGIN_FAIL: `${PREFIX}LOGIN_FAIL`,

  //*Register
  REGISTER: `${PREFIX}REGISTER`,
  REGISTER_SUCCESS: `${PREFIX}REGISTER_SUCCESS`,
  REGISTER_FAIL: `${PREFIX}REGISTER_FAIL`,

  //*Logout
  LOGOUT: `${PREFIX}LOGOUT`,
  LOGOUT_SUCCESS: `${PREFIX}LOGOUT_SUCCESS`,
  LOGOUT_FAIL: `${PREFIX}LOGOUT_FAIL`,
};

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
