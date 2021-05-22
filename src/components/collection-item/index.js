import React from 'react';
import { connect } from 'react-redux'

import './index.scss';

import Button from 'controls/button';

import { addItem } from 'redux/cart/actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div 
        className="image"
        style={{ backgroundImage: `url(${ imageUrl })` }}
      />
      <div className="collection-footer">
        <p className="name">{ name }</p>
        <p className="price">${ price }</p>
      </div>
      <Button onClick={ () => addItem(item) } inverted>Add To Cart</Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);