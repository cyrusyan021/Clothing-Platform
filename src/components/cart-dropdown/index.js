import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './index.scss';

import CartItem from 'components/cart-item';
import Button from 'controls/button';

import { cartItemSelector } from 'redux/cart/selectors';
import { toogleCartHidden } from 'redux/cart/actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
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
        dispatch(toogleCartHidden());
      } }>
        Go To Checkout
      </Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));