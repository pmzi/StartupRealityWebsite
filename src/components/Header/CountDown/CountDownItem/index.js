import React from 'react';

import './style.scss'

function CountDownItem({ value, children }){
  return (
    <div className="count-down-item">
      <span className="count-down-item__value">
        { value }
      </span>
      <span className="count-down-item__text">
        { children }
      </span>
    </div>
  );
}

export default CountDownItem;