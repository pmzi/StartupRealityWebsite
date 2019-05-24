import React from 'react';

import './style.scss';

function Sponsor({ image, title, className, link }){
  return (
    <a className={`sponsor ${className}`} href={link}>
      <img
        className="sponsor__image"
        alt={title}
        src={`assets/sponsors/${image}`}
      />
    </a>
  );
}

export default Sponsor;