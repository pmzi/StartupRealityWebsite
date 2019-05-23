import React from 'react';

import SocialItem from './SocialItem';

import './style.scss';

class SocialsSection extends React.PureComponent{
  state = {
    items: [
      {
        title: 'Instagram',
        link: '#',
        image: 'instagram.png',
      },
      {
        title: 'Telegram',
        link: '#',
        image: 'telegram.png',
      },
      {
        title: 'Twitter',
        link: '#',
        image: 'twitter.png',
      }
    ]
  };

  getSocials(){
    const { items } = this.state;
    const reactItems = [];
    items.forEach(({ title, link, image })=>{
      reactItems.push(
        <SocialItem
          className="socials-section__item"
          key={image}
          title={title}
          link={link}
          image={image}
        />
      );
    });
    return reactItems;
  }

  render(){
    return (
      <section className="socials-section">
        <header className="socials-section__header">
          <h2 className="socials-section__title">
            ارتباط با ما
          </h2>
        </header>
        <div className="socials-section__content">
          { this.getSocials() }
        </div>
      </section>
    );
  }
}

export default SocialsSection;