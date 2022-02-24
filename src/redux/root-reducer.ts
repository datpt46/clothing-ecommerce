import { history } from "utils";
import { combineReducers } from "redux";
import { InitialStateTodo, todoReducer } from "./todo/todo.reducer";
import { InitialStateCart, cartReducer } from "./cart/cart.reducer";
import { InitialStateAuth, authReducer } from "./auth/auth.reducer";
import { connectRouter } from "connected-react-router";

export interface StoreState {
  todo: InitialStateTodo;
  cart: InitialStateCart;
  auth: InitialStateAuth;
}

export const rootReducer = combineReducers({
  router: connectRouter(history),
  todo: todoReducer,
  cart: cartReducer,
  auth: authReducer,
});
