import axios from "axios";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { authActions } from "./_actions";
import { authActionTypes } from "./_actionTypes";

function* login(action) {
  try {
    const response = yield call(async () => {
      return await axios.post(
        "http://localhost:8080/api/clients/login",
        action.payload.user
      );
    });
    const getUserData = yield call(async () => {
      return await axios.get(
        `http://localhost:8080/api/clients/${response.data.userId}?access_token=${response.data.id}`
      );
    });
    yield put(
      authActions.login.success({
        user: getUserData.data,
        access: response.data,
      })
    );
  } catch (err) {
    const error = "Login Action is failed.";
    yield put(authActions.login.fail(error));
  }
}

function* register(action) {
  try {
    yield call(async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/clients",
          action.payload.user
        );
        return res;
      } catch (error) {
        return { error };
      }
    });
    yield put(authActions.register.success());
  } catch (err) {
    const error = "Register Action is failed.";
    yield put(authActions.register.fail(error));
  }
}

function* logout() {
  try {
    const accessToken = yield select((state) => state.auth.accessToken);
    yield call(async () => {
      try {
        return await axios.post(
          `http://localhost:8080/api/clients/logout?access_token=${accessToken}`
        );
      } catch (error) {
        throw error;
      }
    });
    yield put(authActions.logout.success());
  } catch (err) {
    const error = "Logout Action is failed.";
    yield put(authActions.logout.fail(error));
  }
}

export function* authSaga() {
  yield takeEvery(authActionTypes.LOGIN, login);
  yield takeEvery(authActionTypes.REGISTER, register);
  yield takeEvery(authActionTypes.LOGOUT, logout);
}
