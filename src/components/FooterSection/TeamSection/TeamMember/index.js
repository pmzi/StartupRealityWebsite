import React from 'react';

import './style.scss';

function TeamMember({className, title, name, image, linkedin}){
  return (
    <div className={`team-member ${className}`}>
      <img
        className="team-member__avatar"
        alt={name}
        src={`assets/members/${image}`}
      />
      <span className="team-member__name">
        { name }
      </span>
      <span className="team-member__desc">
        { title }
      </span>
      <a className={`team-member ${className}`} href={linkedin}>
        <img
          className="team-member__linkedin"
          src={`assets/linkedin.png`}
          alt={name}
        />
      </a>
    </div>
  );
}

export default TeamMember;