import React from 'react';

import './style.scss';

function Button({ href, children, className, isBig = false }){
  const isBigClass = isBig ? 'button--big' : '';
  return (
    <a href={href} target="_blank" className={`button ${isBigClass} ${className}`}>
      { children }
    </a>
  );
}

export default Button;