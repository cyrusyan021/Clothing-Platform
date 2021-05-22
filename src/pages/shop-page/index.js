import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.scss';

import CollectionsOverview from 'components/collections-overview';
import CollectionPage from 'pages/collection-page';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-menu">
      <Switch>
        <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
        <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
      </Switch>
    </div>
  );
}

export default ShopPage;