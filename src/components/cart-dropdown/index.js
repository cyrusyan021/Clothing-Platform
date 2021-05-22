import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss';

import CartItem from 'components/cart-item';
import Button from 'controls/button';

import { useCartItemsSelector } from 'redux/cart/selectors';
import { useToogleCartHiddenAction } from 'redux/cart/actions';

const CartDropdown = ({ history }) => {
  const cartItems = useCartItemsSelector();
  const toogleCartHidden = useToogleCartHiddenAction();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={ `cartItem-${ cartItem.id }` } item={ cartItem } />)
          )
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        ) }
      </div>
      <Button onClick={ () => {
        history.push("/checkout");
        toogleCartHidden();
      } }>
        Go To Checkout
      </Button>
    </div>
  )
}

export default withRouter(CartDropdown);