import React from 'react';

import './style.scss';

function Button({ href, children, className }){
  return (
    <a href={href} target="_blank" className={`button ${className}`}>
      { children }
    </a>
  );
}

export default Button;