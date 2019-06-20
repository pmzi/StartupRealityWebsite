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
        linkedin: 'https://linkedin.com/in/sh-sabery/',
      },
      {
        name: 'محمد جیریان',
        image: 'mohammad.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'میلاد فکوریان',
        image: 'miladf.jpg',
        title: '',
        linkedin: 'https://linkedin.com/in/fakurian/',
      },
      {
        name: 'نوید میرزایی',
        image: 'navid.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/navid-abdolalizadeh/',
      },
      {
        name: 'خشایار خوش‌آرای',
        image: 'khashayar.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'میلاد موسوی',
        image: 'miladm.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'پویا مظفرمقام',
        image: 'pouya.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'الهام اسماعیلی',
        image: 'elham.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'محسن منسومی',
        image: 'mohsen.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'آوا ترابلی',
        image: 'ava.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/ava-torabli-945769157/',
      },
      {
        name: 'محسن راعی',
        image: 'mohsenr.jpg',
        title: '',
        linkedin: '#',
      },
      {
        name: 'علی اسمعیلی',
        image: 'ali.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/realxoman/',
      },
    ]
  }

  getTeamMembers(){
    const { members } = this.state;
    const reactMembers = [];
    members.forEach(({ name, image, title, linkedin })=>{
      reactMembers.push(
        <TeamMember
          key={image}
          className="team-section__member"
          name={name}
          image={image}
          title={title}
          linkedin={linkedin}
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