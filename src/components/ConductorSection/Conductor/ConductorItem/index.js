import React from 'react';

import './style.scss';

function CoductorItem({ name, from, to, isActive, panelists }){
  return (
    <div className="conductor-item">
      <div className="conductor-item__content">
        <div className="conductor-item__timing">
          <div className="conductor-item__timing-item">
            { from }
          </div>
          <div className="conductor-item__timing-item">
            { to }
          </div>
        </div>
        <div className="conductor-item__name">
          { name }
        </div>
      </div>
      <div className="conductor-item__dot" />
      <div className="conductor-item__panelists">
        { panelists }
      </div>
    </div>
  );
}

export default CoductorItem;