import React from 'react';

import './style.scss';

function Sponsor({ image, title, className }){
  return (
    <img
      className={`sponsor ${className}`}
      alt={title}
      src={`assets/sponsors/${image}`}
    />
  );
}

export default Sponsor;