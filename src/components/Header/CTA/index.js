import React from 'react';

import Button from '../../common/Button';

import './style.scss';

function CTA(){
  return (
    <div className="CTA">
      <Button isBig={true}>
        خرید بلیط
      </Button>
    </div>
  );
}

export default CTA;