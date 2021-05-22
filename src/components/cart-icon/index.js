import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './index.scss';

import { cartItemCountSelector } from 'redux/cart/selectors';
import { toogleCartHidden } from 'redux/cart/actions';

import { ShoppingBagIcon } from 'assets/icons';

const CartIcon = ({ itemCount, toogleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={ toogleCartHidden }>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{ itemCount }</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemCountSelector,
})

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);