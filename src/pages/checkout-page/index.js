import React from 'react';

import './index.scss';

import CheckoutItem from 'components/checkout-item';

import { useCartItemsSelector, useCartItemsPriceSelector } from 'redux/cart/selectors';

const CheckoutPage = () => {
  const cartItems = useCartItemsSelector();
  const cartItemsPrice = useCartItemsPriceSelector();

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      { cartItems.map((cartItem) => (
        <CheckoutItem key={`cartItem-${ cartItem.id }` } cartItem={ cartItem } />
      )) }
      
      <div className="total">
        <span>TOTAL: ${ cartItemsPrice }</span>
      </div>
    </div>
  )
}

export default CheckoutPage;