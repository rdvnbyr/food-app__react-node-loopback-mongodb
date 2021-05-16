import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { productActions, productActionTypes } from "./_actions";

function* getProducts() {
  try {
    const response = yield call(async () => {
      try {
        const res = await axios
          .get("http://localhost:8080/api/products");
        return res;
      } catch (error) {
        return ({ error });
      }
    });
    yield put(productActions.getProducts.success(response.data));
  } catch (error) {
    yield put(productActions.getProducts.fail());
  }
}

export function* productSaga() {
  yield takeEvery(productActionTypes.GET_PRODUCTS, getProducts);
}
