import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.utils";
import { cartAction } from "./cart.actions";
import CartActionTypes from "./cart.types";

// TODO: add type annotation
export interface InitialStateCart {
  hidden: boolean;
  cartItems: any[];
}

const INITIAL_STATE: InitialStateCart = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: cartAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload.id),
      };
    default:
      return state;
  }
};
