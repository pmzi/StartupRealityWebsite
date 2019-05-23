import React from 'react';

import './style.scss';

function Button({ href, children, className }){
  return (
    <a href={href} className={`button ${className}`}>
      { children }
    </a>
  );
}

export default Button;