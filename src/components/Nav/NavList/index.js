import React from 'react';

import NavItem from './NavItem';

import './style.scss';

class NavList extends React.PureComponent{

  state = {
    items: [
      {
        link: '#',
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
    return (
      <div className="nav-list">
        {this.getItems()}
      </div>
    );
  }
}

export default NavList;