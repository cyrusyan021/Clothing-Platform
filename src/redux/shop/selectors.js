import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const COLLECTION_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const shopSelector = (state) => state.shop;
const shopCollectionsSelector = createSelector(shopSelector, (shop) => shop.collections);

export const useShopCollectionsSelector = () => {
  const selector = useMemo(() => shopCollectionsSelector, []);

  return useSelector(selector);
}

export const useSelectCollectionSelector = (shopUrlParam) => {
  const selector = useMemo(() => (
    createSelector(
      shopCollectionsSelector,
      (collections) => (collections.find(c => c.id === COLLECTION_ID[shopUrlParam]) || collections.find(c => c.id === COLLECTION_ID.hats)),
    )
  ), [shopUrlParam]);

  return useSelector(selector);
}