import { all, call } from "redux-saga/effects";
import { todoSagas } from "./todo/todo.sagas";
import { authSaga } from "./auth/auth.sagas";

export default function* rootSagas() {
  yield all([call(todoSagas), call(authSaga)]);
}
