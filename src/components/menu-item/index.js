import React from 'react';

import './index.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  
  return  (
    <div className={ `menu-item ${ size }` }>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${ imageUrl })` }}
      />
      <div className="content">
        <div className="title">{ title.toUpperCase() }</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  )
}

export default MenuItem;