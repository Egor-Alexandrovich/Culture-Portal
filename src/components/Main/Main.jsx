import React from 'react';
import About from '../About/About';
import AuthorIdentity from '../AuthorIdentity/AuthorIdentity';
import Team from '../Team/Team';
import data from '../../data/AuthorsData';
import './Main.scss';
import { withTranslation } from 'react-i18next';

function Main({id, t}) {
  let AuthorElem = null;
  if(id) {
    const index = data.findIndex((elem) => elem.id === id );
    const { name, years, photo } = data[index];
    AuthorElem = <AuthorIdentity name = { name } years = { years } photo = { photo } link = {true} id = { id }/>;
  }
  return (
    <div>
      <About />
      <div className="day-author d-flex flex-column align-items-center">
        <h2 className="author-of-the-day">{t('Author of the day')}</h2>
        {AuthorElem}
      </div>
      <Team />
    </div>
  );
}

export default withTranslation()(Main);