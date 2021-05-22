import { useCallback } from 'react';
import { useDispatch } from 'react-redux'

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';

export const useToogleCartHiddenAction = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch({ type: TOGGLE_CART_HIDDEN }), [dispatch]);
};

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM,
  payload: item,
});