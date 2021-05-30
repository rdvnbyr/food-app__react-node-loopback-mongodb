import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer, authSaga } from "./auth";
import { productSaga, productReducer } from "./product";

export const rootReducer = combineReducers({
  auth: persistReducer(
    {
      storage,
      key: "food-app-react-auth",
      whitelist: ["isLogin", "access_token", "user"],
    },
    authReducer
  ),
  product: persistReducer(
    {
      storage,
      key: "food-app-react-product",
      whitelist: ["products", "product"],
    },
    productReducer
  ),
});

export function* rootSaga() {
  yield all([productSaga(), authSaga()]);
}
