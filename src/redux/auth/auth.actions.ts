import { User } from "models";
import { AuthTypes } from "./auth.types";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
  email: string;
  phone: string;
}

interface RegisterStartAction {
  type: AuthTypes.REGISTER_START;
  payload: RegisterPayload;
}

interface RegisterSuccessAction {
  type: AuthTypes.REGISTER_SUCCESS;
  payload: User;
}

interface RegisterFailureAction {
  type: AuthTypes.REGISTER_FAILURE;
  payload: string;
}

interface LoginStartAction {
  type: AuthTypes.LOGIN_START;
  payload: LoginPayload;
}

interface LoginSuccessAction {
  type: AuthTypes.LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailureAction {
  type: AuthTypes.LOGIN_FAILURE;
  payload: any;
}

interface LogoutAction {
  type: AuthTypes.LOGOUT;
}

export const registerStart = (credentials: RegisterPayload): RegisterStartAction => ({
  type: AuthTypes.REGISTER_START,
  payload: credentials,
});

export const registerSuccess = (user: User): RegisterSuccessAction => ({
  type: AuthTypes.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error?: any): RegisterFailureAction => ({
  type: AuthTypes.REGISTER_FAILURE,
  payload: error,
});

export const loginStart = (credentials: LoginPayload): LoginStartAction => ({
  type: AuthTypes.LOGIN_START,
  payload: credentials,
});

export const loginSuccess = (user: any): LoginSuccessAction => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error?: any): LoginFailureAction => ({
  type: AuthTypes.LOGIN_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: AuthTypes.LOGOUT,
});

export type authAction =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | RegisterStartAction
  | RegisterSuccessAction
  | RegisterFailureAction;
