import React from 'react';

import ConductorItem from './ConductorItem';

import './style.scss';
import ConductorSep from './ConductorSep';
import TimeIdentifier from './TimeIdentifier';

class Conductor extends React.PureComponent{

  state = {
    items: [
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: true,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
      {
        name: 'اینترو',
        from: '18:30',
        to: '20:00',
        isActive: false,
        panelists: 'فلانی | فلانی',
      },
    ]
  }

  getConductorItems(){
    const { items } = this.state;
    const reactItems = [
      <TimeIdentifier isStart={true}>
        9:00
      </TimeIdentifier>,
      <ConductorSep />
    ];
    items.forEach(({ name, from, to, isActive, panelists })=>{
      reactItems.push(
        <ConductorItem
          key={name}
          name={name}
          from={from}
          to={to}
          isActive={isActive}
          panelists={panelists}
        />
      );
      reactItems.push(
        <ConductorSep />
      );
    });
    reactItems.push(
      <TimeIdentifier>
        18:00
      </TimeIdentifier>
    );
    return reactItems;
  }

  render(){
    return (
      <div className="conductor">
        { this.getConductorItems() }
      </div>
    );
  }

}

export default Conductor;