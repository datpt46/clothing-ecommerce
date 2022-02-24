// TODO: add type annotation

export const addItemToCart: any = (cartItems: any[], cartItemToAdd: any) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// TODO: add type annotation

export const clearItemFromCart: any = (cartItems: any[], id: string) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

// TODO: add type annotation

export const removeItemFromCart = (cartItems: any[], cartItemToRemove: any) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
