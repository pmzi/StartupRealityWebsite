import React from 'react';

import './style.scss';

function TeamMember({className, title, name, image}){
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
    </div>
  );
}

export default TeamMember;