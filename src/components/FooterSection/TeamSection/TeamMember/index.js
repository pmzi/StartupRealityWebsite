import React from 'react';

import './style.scss';
import TeamSocial from './TeamSocial';

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
        <TeamSocial
          icon="linkedin"
          href={linkedin}
          name={name}
        />
        <TeamSocial
          icon="instagram"
          href={instagram}
          name={name}
        />
        <TeamSocial
          icon="twitter"
          href={twitter}
          name={name}
        />
      </div>
    </div>
  );
}

export default TeamMember;