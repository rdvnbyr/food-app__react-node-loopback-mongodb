const PREFIX = "[auth]__";

export const authActionTypes = {
  //*Get Products
  LOGIN: `${PREFIX}LOGIN`,
  LOGIN_SUCCESS: `${PREFIX}LOGIN_SUCCESS`,
  LOGIN_FAIL: `${PREFIX}LOGIN_FAIL`,

  //*Get Product
  REGISTER: `${PREFIX}REGISTER`,
  REGISTER_SUCCESS: `${PREFIX}REGISTER_SUCCESS`,
  REGISTER_FAIL: `${PREFIX}REGISTER_FAIL`,
};

export const authActions = {
  // Get Products Action
  login: {
    call: (email, password) => {
      return {
        type: authActionTypes.LOGIN,
        payload: {
          email,
          password,
        },
      };
    },
    success: () => {
      return {
        type: authActionTypes.LOGIN_SUCCESS,
      };
    },
    fail: () => {
      return {
        type: authActionTypes.LOGIN_FAIL,
        payload: {
          error: "Products fetching is failed.",
        },
      };
    },
  },
  // Get Product Action
  register: {
    call: (user) => {
      return {
        type: authActionTypes.REGISTER,
        payload: {
          user,
        },
      };
    },
    success: (product) => {
      return {
        type: authActionTypes.REGISTER_SUCCESS,
      };
    },
    fail: () => {
      return {
        type: authActionTypes.REGISTER_FAIL,
        payload: {
          error: "Product fetching is failed.",
        },
      };
    },
  },
};
