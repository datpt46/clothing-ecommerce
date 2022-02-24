import { StoreState } from "redux/root-reducer";
import { createSelector } from "reselect";

const selectTodo = (state: StoreState) => state.todo;

export const selectListTodo = createSelector(selectTodo, (todo) => todo.todo);
export const selectTodoFetchingStatus = createSelector(selectTodo, (todo) => todo.isFetching);
export const selectTodoErrorMessage = createSelector(selectTodo, (todo) => todo.errorMessage);
