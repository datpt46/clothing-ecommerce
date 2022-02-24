import { ResponseGenerator } from "models";
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchListTodoFailure, fetchListTodoSuccess } from "./todo.actions";
import { TodoTypes } from "./todo.types";

export function* fetchListTodoAsync() {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response: ResponseGenerator<any> = yield axios.get(url);
    yield put(fetchListTodoSuccess(response.data));
  } catch (error: any) {
    yield put(fetchListTodoFailure(error.message));
  }
}

export function* fetchListTodoStart() {
  yield takeLatest(TodoTypes.FETCH_LIST_TODO_START, fetchListTodoAsync);
}

export function* todoSagas() {
  yield all([call(fetchListTodoStart)]);
}
