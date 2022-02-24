import { User } from "models/user";
import { authAction } from "./auth.actions";
import { AuthTypes } from "./auth.types";

export interface InitialStateAuth {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const INITIAL_STATE: InitialStateAuth = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

export const authReducer = (state = INITIAL_STATE, action: authAction) => {
  switch (action.type) {
    case AuthTypes.LOGIN_START:
      return {
        ...state,
        logging: true,
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case AuthTypes.LOGIN_FAILURE:
    case AuthTypes.REGISTER_FAILURE:
      return {
        ...state,
        logging: false,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: undefined,
      };
    default:
      return state;
  }
};
