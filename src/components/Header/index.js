import React from 'react';

import HeaderTitle from './HeaderTitle';
import CountDown from './CountDown';
import EventInfo from './EventInfo';
import AboutEvent from './AboutEvent';

import './style.scss';

function Header(){
  return (
    <header className="header">
      <HeaderTitle />
      <CountDown time={4210000000} />
      <EventInfo />
      <AboutEvent />
    </header>
  );
}

export default Header;