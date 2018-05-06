import React from 'react';
import './TopNav.scss';
import logo from '../../skyscanner_RGB_loch.svg';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
    <div className='menu'></div>
  </header>
);

export default TopNav;
