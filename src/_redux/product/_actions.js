import { productActionTypes } from "./_actionTypes";

export const productActions = {
  // Get Products Action
  getProducts: {
    call: () => {
      return {
        type: productActionTypes.GET_PRODUCTS,
      };
    },
    success: (products) => {
      return {
        type: productActionTypes.GET_PRODUCTS_SUCCESS,
        payload: {
          products,
        },
      };
    },
    fail: () => {
      return {
        type: productActionTypes.GET_PRODUCTS_FAIL,
        payload: {
          error: "Products fetching is failed.",
        },
      };
    },
  },
  // Get Product Action
  getProduct: {
    call: (id) => {
      return {
        type: productActionTypes.GET_PRODUCT,
        payload: {
          id,
        },
      };
    },
    success: (product) => {
      return {
        type: productActionTypes.GET_PRODUCT_SUCCESS,
        payload: {
          product,
        },
      };
    },
    fail: () => {
      return {
        type: productActionTypes.GET_PRODUCT_FAIL,
        payload: {
          error: "Product fetching is failed.",
        },
      };
    },
  },
};
