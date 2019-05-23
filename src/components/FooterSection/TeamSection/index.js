import React from 'react';

import TeamMember from './TeamMember';

import './style.scss';

class TeamSection extends React.PureComponent{
  state = {
    members: [
      {
        name: 'شایان صابری',
        image: 'pouya.jpg',
        title: 'برگذارکننده رویداد',
      }
    ]
  }

  getTeamMembers(){
    const { members } = this.state;
    const reactMembers = [];
    members.forEach(({ name, image, title })=>{
      reactMembers.push(
        <TeamMember
          key={image}
          className="team-section__member"
          name={name}
          image={image}
          title={title}
        />
      );
    })
    return reactMembers;
  }

  render(){
    return (
      <section className="team-section">
        <header className="team-section__header">
          <h2 className="team-section__title">
            تیم برگذاری
          </h2>
        </header>
        <div className="team-section__members">
          { this.getTeamMembers() }
        </div>
      </section>
    );
  }
}

export default TeamSection;