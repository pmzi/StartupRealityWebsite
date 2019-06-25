import React from 'react';

import Button from '../../common/Button';

import './style.scss';

function CTA(){
  return (
    <div className="CTA">
      <Button href="http://evand.com/events/sr1398" isBig={true}>
        خرید بلیت
      </Button>
    </div>
  );
}

export default CTA;