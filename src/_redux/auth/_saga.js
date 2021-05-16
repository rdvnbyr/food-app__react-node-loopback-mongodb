import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { authActions, authActionTypes } from "./_actions";

function* login() {
  try {
    const response = yield call(async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/clients/login");
        return res;
      } catch (error) {
        return { error };
      }
    });
    yield put(authActions.login.success(response.data));
  } catch (err) {
    const error = new Error("Login Action is not completed.");
    yield put(authActions.login.fail(error));
  }
}

export function* authSaga() {
  yield takeEvery(authActionTypes.LOGIN, login);
}
