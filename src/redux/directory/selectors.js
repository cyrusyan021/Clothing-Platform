import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const directorySelector = (state) => state.directory;

export const useDirectorySectionsSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      directorySelector,
      (directory) => directory.sections,
    )
  ), []);

  return useSelector(selector);
}