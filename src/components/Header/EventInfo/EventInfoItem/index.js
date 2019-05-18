import React from 'react';

import './style.scss';

function EventInfoItem({ children, icon, className }){
  return (
    <div className={`event-info-item ${className}`}>
      <i className="event-info-item__icon material-icons">
        { icon }
      </i>
      <span className="event-info-item__text">
        { children }
      </span>
    </div>
  );
}

export default EventInfoItem;