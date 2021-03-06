import React from 'react';

import ConductorItem from './ConductorItem';

import './style.scss';
import ConductorSep from './ConductorSep';
import TimeIdentifier from './TimeIdentifier';

class Conductor extends React.PureComponent{

  state = {
    items: [
      {
        name: 'پذیرش',
        from: '۰۹:۰۰',
        to: '۱۰:۰۰',
      },
      {
        name: 'قرآن و سرود',
        from: '۱۰:۰۰',
        to: '۱۰:۱۵',
      },
      {
        name: 'اینترو',
        from: '۱۰:۱۵',
        to: '۱۰:۳۰',
        panelists: 'سخنران',
      },
      {
        name: 'سخنرانی',
        from: '۱۰:۳۰',
        to: '۱۰:۴۰',
        panelists: 'سخنران',
      },
      {
        name: 'پخش تیزر استارت‌آپ ریلیتی',
        from: '۱۰:۴۰',
        to: '۱۰:۵۰',
      },
      {
        name: 'سخنرانی',
        from: '۱۰:۵۰',
        to: '۱۱:۱۰',
        isActive: true,
        panelists: 'سخنران',
      },
      {
        name: 'پنل',
        from: '۱۱:۱۰',
        to: '۱۱:۵۰',
        panelists: 'سخنران | سخنران',
      },
      {
        name: 'سخنرانی',
        from: '۱۱:۵۰',
        to: '۱۲:۱۰',
        panelists: 'سخنران',
      },
      {
        name: 'ناهار و نماز',
        from: '۱۲:۱۰',
        to: '۱۳:۴۰',
      },
      {
        name: 'سخنرانی',
        from: '۱۳:۴۰',
        to: '۱۴:۰۰',
        panelists: 'سخنران',
      },
      {
        name: 'پنل',
        from: '۱۴:۰۰',
        to: '۱۴:۴۰',
        panelists: 'سخنران | سخنران',
      },
      {
        name: 'سخنرانی',
        from: '۱۴:۴۰',
        to: '۱۵:۰۰',
        panelists: 'سخنران',
      },
      {
        name: 'سخنرانی',
        from: '۱۵:۰۰',
        to: '۱۵:۲۰',
        panelists: 'سخنران',
      },
      {
        name: 'استراحت و شبکه سازی',
        from: '۱۵:۲۰',
        to: '۱۵:۵۰',
      },
      {
        name: 'سخنرانی',
        from: '۱۵:۵۰',
        to: '۱۶:۱۰',
        panelists: 'سخنران',
      },
      {
        name: 'پنل',
        from: '۱۶:۱۰',
        to: '۱۶:۵۰',
        panelists: 'سخنران | سخنران',
      },
      {
        name: 'سخنرانی',
        from: '۱۶:۵۰',
        to: '۱۷:۱۰',
        panelists: 'سخنران',
      },
      {
        name: 'پذیرایی و شبکه سازی',
        from: '۱۷:۱۰',
        to: '۱۸:۳۰',
      },
    ]
  }

  getConductorItems(){
    const { items } = this.state;
    const reactItems = [
      <TimeIdentifier key="start" isStart={true}>
        ۹:۰۰
      </TimeIdentifier>,
      <ConductorSep key="sep" />
    ];
    items.forEach(({ name, from, to, panelists })=>{
      reactItems.push(
        <ConductorItem
          key={from}
          name={name}
          from={from}
          to={to}
          panelists={panelists}
        />
      );
      reactItems.push(
        <ConductorSep key={from+'sep'} />
      );
    });
    reactItems.push(
      <TimeIdentifier key="finish">
        ۱۸:۳۰
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