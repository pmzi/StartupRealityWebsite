import React from 'react';

import NavItem from './NavItem';

import './style.scss';

class NavList extends React.PureComponent{

  state = {
    items: [
      {
        link: '#header',
        text: 'صفحه‌اصلی',
      },
      {
        link: '#about-event',
        text: 'درباره ما',
      },
      {
        link: '#speakers-section',
        text: 'سخنرانان',
      },
      {
        link: '#conductor-section',
        text: 'زمان‌بندی',
      },
      {
        link: '#sponsors-section',
        text: 'حامیان',
      },
      {
        link: '#location-section',
        text: 'محل برگزاری',
      },
      {
        link: '#team-section',
        text: 'تیم برگزاری',
      },
      {
        link: '#socials-section',
        text: 'ارتباط با ما',
      },
    ]
  };

  getItems(){
    const reactItems = [];
    const { items } = this.state;
    items.forEach(item=>{
      reactItems.push(
        <NavItem
          key={ item.link }
          link={ item.link }
        >
          { item.text }
        </NavItem>
      );
    })

    return reactItems;
  }

  render(){
    const { isOpen } = this.props;
    const isOpenClassName = isOpen ? ' nav-list--open' : '';
    return (
      <div className={`nav-list${isOpenClassName}`}>
        {this.getItems()}
      </div>
    );
  }
}

export default NavList;