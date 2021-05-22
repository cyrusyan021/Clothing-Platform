import React from 'react';

import './index.scss';

import CollectionPreview from 'components/collection-preview';

import { useShopCollectionsSelector } from 'redux/shop/selectors';

const CollectionsOverview = () => {
  const shopCollections = useShopCollectionsSelector();

  return (
    <div className="collections-overview">
      { shopCollections.map((collection) => <CollectionPreview key={ `preview-${ collection.id }` } { ...collection } />) }
    </div>
  );
}

export default CollectionsOverview;