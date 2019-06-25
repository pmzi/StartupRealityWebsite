import React from 'react';

import './style.scss';

function SpeakerSocial({ href, name }){
  if(href !== '#' && href){
    return (
      <div className="speaker-socials">
        <a className="speaker-socials__link" href={href} target="_blank">
          <img
            className="speaker-socials__icon"
            src={`assets/linkedin.png`}
            alt={name}
          />
        </a>
      </div>
    );
  }
  return null;
}

export default SpeakerSocial;