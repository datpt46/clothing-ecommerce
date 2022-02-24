import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { push } from "connected-react-router";
import { LoginData, RegisterData, ResponseSagaCallGenerator } from "models";
import { toast } from "react-toastify";
import { all, call, fork, put, take } from "redux-saga/effects";
import { safe } from "utils";
import {
  loginFailure,
  LoginPayload,
  loginSuccess,
  registerFailure,
  RegisterPayload,
} from "./auth.actions";
import { AuthTypes } from "./auth.types";

function* handleRegister(payload: RegisterPayload) {
  const { username, password, email, phone } = payload;
  const { response, error }: ResponseSagaCallGenerator<RegisterData> = yield safe(
    call(authApi.register, username, password, email, phone)
  );

  if (response) {
    toast.success("Register success");
    // TODO: auto login after register
  } else {
    toast.warn(error.response.data.message);
    yield put(registerFailure());
  }
}

function* handleLogin(payload: LoginPayload) {
  const { username, password } = payload;
  const { response, error }: ResponseSagaCallGenerator<LoginData> = yield safe(
    call(authApi.login, username, password)
  );

  if (response) {
    const {
      data: { refresh_token, token, user_info },
    } = response;
    localStorage.setItem("access_token", token);
    yield put(loginSuccess(user_info));
    // redirect to home page
    yield put(push("/"));
    return true;
  } else {
    toast.warn(error.response.data.message);
    yield put(loginFailure());
    return false;
  }
}

function* handleLogout() {
  // TODO: delete access_token from local storage
  localStorage.removeItem("access_token");
  // TODO: redirect to login page
  yield put(push("/login"));
}

function* watchLoginFlow() {
  // TODO: if already logged in (access_token in local storage and expired time is valid in local storage), else watch logout
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(AuthTypes.LOGIN_START);
    yield fork(handleLogin, action.payload);
  }
}

function* watchLogoutFlow() {
  yield take(AuthTypes.LOGOUT);
  yield call(handleLogout);
}

function* watchRegisterFlow() {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (!isLoggedIn) {
    const action: PayloadAction<RegisterPayload> = yield take(AuthTypes.REGISTER_START);
    yield call(handleRegister, action.payload);
  }
}

export function* authSaga() {
  yield all([fork(watchLoginFlow), fork(watchLogoutFlow), fork(watchRegisterFlow)]);
}
