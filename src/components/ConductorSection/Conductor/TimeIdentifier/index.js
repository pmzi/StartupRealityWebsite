import React from 'react';

import './style.scss';

function TimeIdentifier({ children, isStart = false }){

  const isStartClassName = isStart ? ' time-identifier--start' : '';

  return (
    <div className={`time-identifier${isStartClassName}`}>
      <div className="time-identifier__dot" />
      <span className="time-identifier__value">
        { children }
      </span>
    </div>
  );
}

export default TimeIdentifier;