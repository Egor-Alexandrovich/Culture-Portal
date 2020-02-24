import React from 'react';
import { withTranslation } from 'react-i18next';
import LinksList from '../LinksList/LinksList'
import logo from '../../assets/icons/book.svg';
import linksList from '../../data/links';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Header.scss'

function Header({t}) {
  return (
    <header className='header-container'>
      <img className='logo-img' src={logo} alt=""/>
      <h1 className='logo-name'>{t('Writers of Belarus')}</h1>
      <LinksList list={ linksList }/>
      <LanguageSelector/>
    </header>
  );
}

export default withTranslation()(Header);