import React from 'react';

import './style.scss';

function SocialItem({ className, title, image, link }){
  return (
    <div className={`social-item ${className}`}>
      <a
        className="social-item__link"
        rel="noopener noreferrer"
        target="_blank"
        href={link}
      >
        <img
          className="social-item__image"
          alt={title}
          src={`assets/${image}`}
        />
      </a>
    </div>
  );
};

export default SocialItem;