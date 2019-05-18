import React from 'react';

import './style.scss';

function NavItem({ link, children }){
  return (
    <div className="nav-item">
      <a href={link} className="nav-item__link">
        { children }
      </a>
    </div>
  );
}

export default NavItem;