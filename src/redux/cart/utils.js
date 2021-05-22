export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === itemToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItemQty = cartItems.find((item) => item.id === itemToRemove.id && item.quantity > 1);

  if (existingItemQty) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === itemToRemove.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      } else {
        return cartItem;
      }
    });
  }

  return clearItemFromCart(cartItems, itemToRemove);
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
}