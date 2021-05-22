import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// base selectors
const cartSelector = (state) => state.cart;
const cartItemsSelector = createSelector(cartSelector, (cart) => cart.cartItems);

// toogling cart hidden
export const useCartHiddenSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      cartSelector,
      (cart) => cart.hidden
    )
  ), []);

  return useSelector(selector);
}

// cart items
export const useCartItemsSelector = () => {
  const selector = useMemo(() => cartItemsSelector, []);

  return useSelector(selector);
}

// total cart items quantity
export const useCartItemsCountSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      cartItemsSelector,
      (cartItem) => cartItem.reduce((accumulatedQty, item) => accumulatedQty + item.quantity, 0)
    )
  ), []);

  return useSelector(selector);
}

// total cart items price
export const useCartItemsPriceSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      cartItemsSelector,
      (cartItem) => cartItem.reduce((accumulatedPrice, item) => accumulatedPrice + (item.quantity * item.price), 0)
    )
  ), []);

  return useSelector(selector);
}