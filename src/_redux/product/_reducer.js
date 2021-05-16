import { productActionTypes } from "./_actions";

const initialState = {
  loading: false,
  error: "",
  products: [],
  product: {},
};

export const productReducer =  (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCTS:
      return{
        ...state,
        loading: true,
      };
    case productActionTypes.GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        loading: false,
        products: action.payload.products
      };
    case productActionTypes.GET_PRODUCTS_FAIL:
      return{
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
