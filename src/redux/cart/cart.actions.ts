import CartActionTypes from "./cart.types";

export interface toggleCartHiddenAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

// TODO: fix any type
export interface addItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: any;
}

// TODO: fix any type
export interface clearItemFromCartAction {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: any;
}

// TODO: fix any type
export interface removeItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: any;
}

export const toggleCartHidden = (): toggleCartHiddenAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// TODO: fix any type
export const addItem = (item: any): addItemAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// TODO: fix any type
export const clearItemFromCart = (item: any): clearItemFromCartAction => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

// TODO: fix any type
export const removeItem = (item: any): removeItemAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export type cartAction =
  | toggleCartHiddenAction
  | addItemAction
  | removeItemAction
  | clearItemFromCartAction;
