import React from 'react';

import './clippath.svg';

import './style.scss'
import SpeakerSocial from './SpeakerSocial/index';

function Speaker({ image, name, desc, className, linkedin }){
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
      <SpeakerSocial
        href={linkedin}
        name={name}
      />
    </div>
  );
}

export default Speaker;