import { Todo } from "models/todo";
import { TodoTypes } from "./todo.types";

export interface FetchListTodoStartAction {
  type: TodoTypes.FETCH_LIST_TODO_START;
}

export interface FetchListTodoSuccessAction {
  type: TodoTypes.FETCH_LIST_TODO_SUCCESS;
  payload: Todo[];
}

export interface FetchListTodoFailureAction {
  type: TodoTypes.FETCH_LIST_TODO_FAILURE;
  payload: string;
}

export const fetchListTodo = (): FetchListTodoStartAction => ({
  type: TodoTypes.FETCH_LIST_TODO_START,
});

export const fetchListTodoSuccess = (todoList: Todo[]): FetchListTodoSuccessAction => ({
  type: TodoTypes.FETCH_LIST_TODO_SUCCESS,
  payload: todoList,
});

export const fetchListTodoFailure = (errorMessage: string): FetchListTodoFailureAction => ({
  type: TodoTypes.FETCH_LIST_TODO_FAILURE,
  payload: errorMessage,
});

export type todoAction =
  | FetchListTodoStartAction
  | FetchListTodoSuccessAction
  | FetchListTodoFailureAction;
