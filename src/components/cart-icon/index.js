import React from 'react';

import './index.scss';

import { useCartItemsCountSelector } from 'redux/cart/selectors';
import { useToogleCartHiddenAction } from 'redux/cart/actions';

import { ShoppingBagIcon } from 'assets/icons';

const CartIcon = () => {
  const toogleCartHidden = useToogleCartHiddenAction();
  const cartItemsCount = useCartItemsCountSelector();

  return (
    <div className="cart-icon" onClick={ toogleCartHidden }>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{ cartItemsCount }</span>
    </div>
  );
}

export default CartIcon;