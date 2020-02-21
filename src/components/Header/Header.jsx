import React from 'react';
import LinksList from '../LinksList/LinksList'
import logo from '../../assets/icons/book.svg';
import linksList from '../../data/links';
import './Header.scss'

function Header() {
  return (
    <header className='header-container'>
      <img className='logo-img' src={logo} alt=""/>
      <h1 className='logo-name'>Writers of Belarus</h1>
      <LinksList list={ linksList }/>
    </header>
  );
}

export default Header;