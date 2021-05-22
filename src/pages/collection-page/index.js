import React from 'react';

import './index.scss';

import CollectionItem from 'components/collection-item';

import { useSelectCollectionSelector } from 'redux/shop/selectors';

const CollectionPage = ({ match }) => {
  const selectedCollection = useSelectCollectionSelector(match?.params?.collectionId);

  return (
    <div className="collection-page">
      <h2 className="title">{ selectedCollection.title }</h2>
      <div className="items">
        { selectedCollection.items.map(item => (
          <CollectionItem key={ `item-${ item.id }` } item={ item } />
        )) }
      </div>
    </div>
  );
}

export default CollectionPage;