import React from 'react';

import NavItem from './NavItem';

import './style.scss';

class NavList extends React.PureComponent{

  state = {
    items: [
      {
        link: '#about-event',
        text: 'صفحه‌اصلی',
      },
      {
        link: '#1',
        text: 'صفحه‌اصلی',
      },
      {
        link: '#2',
        text: 'صفحه‌اصلی',
      },
      {
        link: '#3',
        text: 'صفحه‌اصلی',
      }
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