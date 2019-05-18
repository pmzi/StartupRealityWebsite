import React from 'react';

import Button from '../common/Button';
import NavList from './NavList';

import './style.scss';

function Nav(){
  return (
    <nav className="nav">
      <div className="nav__content">
        <Button>
          ثبت‌نام
        </Button>
        <NavList />
      </div>
    </nav>
  );
}

export default Nav;