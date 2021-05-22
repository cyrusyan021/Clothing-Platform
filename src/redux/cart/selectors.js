import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

// toogling cart hidden
export const cartHiddenSelector = createSelector(
  cartSelector,
  (cart) => cart.hidden
);

// cart items
export const cartItemSelector = createSelector(
  cartSelector,
  (cart) => cart.cartItems
);

// total cart items quantity
export const cartItemCountSelector = createSelector(
  cartItemSelector,
  (cartItem) => 
    cartItem.reduce(
      ((accumulatedQty, item) => accumulatedQty + item.quantity),
      0
    )
);

// total cart items price
export const cartItemPriceSelector = createSelector(
  cartItemSelector,
  (cartItem) =>
    cartItem.reduce(
      ((accumulatedPrice, item) => accumulatedPrice + (item.quantity * item.price)),
      0
    )
);