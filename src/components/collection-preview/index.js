import React from 'react';

import './index.scss';

import CollectionItem from 'components/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <p className="title">{ title }</p>
      <div className="preview">
        { items.filter((_, idx) => idx < 4).map((item) => <CollectionItem key={ `item-${ item.id }` } item={ item } />) }
      </div>
    </div>
  )
}

export default CollectionPreview;