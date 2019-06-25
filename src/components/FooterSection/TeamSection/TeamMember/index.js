import React from 'react';

import './style.scss';

function TeamMember({className, title, name, image, linkedin, instagram, twitter}){
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
      <div className="team-member__socials">
        <a className="team-member__social" href={linkedin} target="_blank">
          <img
            className="team-member__linkedin"
            src={`assets/linkedin.png`}
            alt={name}
          />
       </a>
       <a className="team-member__social" href={instagram} target="_blank">
          <img
            className="team-member__instagram"
            src={`assets/instagram.png`}
           alt={name}
          />
        </a>
        <a className="team-member__social" href={twitter} target="_blank">
          <img
            className="team-member__twitter"
            src={`assets/twitter.png`}
           alt={name}
          />
        </a>
      </div>
    </div>
  );
}

export default TeamMember;