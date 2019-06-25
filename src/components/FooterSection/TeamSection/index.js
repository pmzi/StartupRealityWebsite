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
        instagram: 'https://instagram.com/sh.sabery/',
        twitter: 'https://twitter.com/sh_sabery/',
      },
      {
        name: 'محمد جیریان',
        image: 'mohammad.jpg',
        title: '',
        linkedin: 'https://linkedin.com/in/mjiryan/',
        instagram: 'https://instagram.com/mjiryan/',
        twitter: 'https://twitter.com/mjiryn/',
      },
      {
        name: 'میلاد فکوریان',
        image: 'miladf.jpg',
        title: '',
        linkedin: 'https://linkedin.com/in/fakurian/',
        instagram: 'https://instagram.com/m.fkn/',
        twitter: 'https://twitter.com/miladfakurian/',
      },
      {
        name: 'نوید میرزایی',
        image: 'navid.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/navid-abdolalizadeh/',
        instagram: 'https://instagram.com/navid_az/',
        twitter: 'https://twitter.com/navid__az/',
      },
      {
        name: 'خشایار خوش‌آرای',
        image: 'khashayar.jpg',
        title: '',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
      {
        name: 'میلاد موسوی',
        image: 'miladm.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/milad-moosavi/',
        instagram: 'https://www.instagram.com/miladmoosavi77/',
        twitter: 'https://twitter.com/moosavi_milad',
      },
      {
        name: 'پویا مظفرمقام',
        image: 'pouya.jpg',
        title: '',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
      {
        name: 'الهام اسماعیلی',
        image: 'elham.jpg',
        title: '',
        instagram: 'https://instagram.com/es.elhaam/',
      },
      {
        name: 'محسن منسومی',
        image: 'mohsen.jpg',
        title: '',
        instagram: 'https://instagram.com/mohsen_mansomi/',
        twitter: 'https://twitter.com/moh3nmansomi/',
      },
      {
        name: 'آوا ترابلی',
        image: 'ava.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/ava-torabli-945769157/',
        instagram: 'https://www.instagram.com/avaa.tr/',
      },
      {
        name: 'محسن راعی',
        image: 'mohsenr.jpg',
        title: '',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
      {
        name: 'علی اسمعیلی',
        image: 'ali.jpg',
        title: '',
        linkedin: 'https://www.linkedin.com/in/realxoman/',
        instagram: 'https://instagram.com/ali.___.esmaeili/',
        twitter: 'https://twitter.com/realxoman/',
      },
    ]
  }

  getTeamMembers(){
    const { members } = this.state;
    const reactMembers = [];
    members.forEach(({ name, image, title, linkedin, instagram, twitter })=>{
      reactMembers.push(
        <TeamMember
          key={image}
          className="team-section__member"
          name={name}
          image={image}
          title={title}
          linkedin={linkedin}
          instagram={instagram}
          twitter={twitter}
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