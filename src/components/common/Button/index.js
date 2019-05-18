import React from 'react';

import './style.scss';

function Button({ href, children }){
  return (
    <a href={href} className="button">
      { children }
    </a>
  );
}

export default Button;