import React from 'react';

import './index.scss';

import MenuItem from 'components/menu-item';

import { useDirectorySectionsSelector } from 'redux/directory/selectors';

const Directory = () => {
  const directorySections = useDirectorySectionsSelector();

  return (
    <div className="directory-menu">
      { directorySections.map((section) => {
        return (
          <MenuItem key={ `menu-${section.id}` } { ...section } />
        )
      }) }
    </div>
  );
}

export default Directory;