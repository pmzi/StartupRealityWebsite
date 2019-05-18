import React from 'react';

import './style.scss'

function Speaker({ image, name, desc, className }){
  return (
    <div className={`speaker ${className}`}>
      <header className="speaker__header">
        <img
          className="speaker__image"
          src={`assets/speakers/${image}`}
          alt={name}
        />
        <span className="speaker__name">
          { name }
        </span>
      </header>
      <span className="speaker__desc">
        { desc }
      </span>
    </div>
  );
}

export default Speaker;