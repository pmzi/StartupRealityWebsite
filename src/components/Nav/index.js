import React from 'react';

import Button from '../common/Button';
import NavList from './NavList';

import './style.scss';

class Nav extends React.PureComponent{
  state = {
    isOpen: false,
    shouldShowMenuIcon: false,
  };

  componentDidMount(){
    window.addEventListener('resize', ()=>{
      if(window.innerWidth >= 800){
        this.setState({
          isOpen: false,
          shouldShowMenuIcon: false,
        });
      }else{
        this.setState({
          shouldShowMenuIcon: true,
        });
      }
    });
    window.addEventListener('load', ()=>{
      if(window.innerWidth >= 800){
        this.setState({
          isOpen: false,
          shouldShowMenuIcon: false,
        });
      }else{
        this.setState({
          shouldShowMenuIcon: true,
        });
      }
    });
  }

  toggleMenu = ()=>{
    this.setState(({ isOpen })=>({
      isOpen: !isOpen,
    }))
  }

  render(){
    const { shouldShowMenuIcon, isOpen } = this.state;

    return (
      <nav className="nav">
        <div className="nav__wrapper">
          <div className="nav__content">
            <div className="nav__content-header">
              { 
                shouldShowMenuIcon ? 
                  <i
                    onClick={this.toggleMenu}
                    className="material-icons"
                  >
                    dehaze
                  </i> 
                : null
              }
              <Button href="http://evand.com/events/sr1398" className="nav__signup-button">
                خرید بلیت
              </Button>
            </div>
            <NavList
              isOpen={isOpen}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;