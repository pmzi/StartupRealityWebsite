import React from 'react';

import TeamMember from './TeamMember';

import './style.scss';

class TeamSection extends React.PureComponent{
  state = {
    members: [
      {
        name: 'شایان صابری',
        image: 'shayan.jpg',
        title: '',
      },
      {
        name: 'محمد جیریان',
        image: 'mohammad.jpg',
        title: '',
      },
      {
        name: 'میلاد فکوریان',
        image: 'miladf.jpg',
        title: '',
      },
      {
        name: 'نوید علیزاده',
        image: 'navid.jpg',
        title: '',
      },
      {
        name: 'خشایار خوش‌آرای',
        image: 'khashayar.jpg',
        title: '',
      },
      {
        name: 'میلاد موسوی',
        image: 'miladm.jpg',
        title: '',
      },
      {
        name: 'پویا مظفرمقام',
        image: 'pouya.jpg',
        title: '',
      },
      {
        name: 'محسن منسومی',
        image: 'mohsen.jpg',
        title: '',
      },
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
            تیم برگزاری
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