import React from 'react';

import './index.scss';

import CollectionPreview from 'components/collection-preview';

import SHOP_DATA from './shop-data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-menu">
        <p className="shop-title">Collections</p>
        { collections.map((collection) => <CollectionPreview key={`preview-${ collection.id}` } { ...collection } />) }
      </div> 
    );
  }
}

export default ShopPage;