import { Todo } from "models/todo";
import { todoAction } from "./todo.actions";
import { TodoTypes } from "./todo.types";

export interface InitialStateTodo {
  todo: Todo[];
  isFetching: boolean;
  errorMessage: string;
}

const INITIAL_STATE = {
  todo: [],
  isFetching: false,
  errorMessage: "",
};

export const todoReducer = (state: InitialStateTodo = INITIAL_STATE, action: todoAction) => {
  switch (action.type) {
    case TodoTypes.FETCH_LIST_TODO_START:
      return {
        ...state,
        isFetching: true,
      };
    case TodoTypes.FETCH_LIST_TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        isFetching: false,
      };
    case TodoTypes.FETCH_LIST_TODO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
