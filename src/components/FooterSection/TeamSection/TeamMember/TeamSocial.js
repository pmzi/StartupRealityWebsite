import React from 'react';

function TeamSocial({ icon, href, name }){
  if(href !== '#' && href){
    return (
      <a className="team-member__social" href={href} target="_blank">
        <img
          className="team-member__icon"
          src={`assets/${icon}.png`}
          alt={name}
        />
      </a>
    );
  }
  return null;
}

export default TeamSocial;