import React from 'react';
import './AuthorIdentity.scss';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

function AuthorIdentity({ name, years, photo, link, id, t }) {
  const linkElem = link ? <Link className='btn btn-dark' to={`/authors/${id}`}>{t('More')}</Link> : null;
  return (
    <div className="card card-width">
      <img src={photo} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{t(name)}</h5>
        <p className="card-text">{t('Years of life')}: {years}</p>
        { linkElem }
      </div>
    </div>
  )
}

export default withTranslation()(AuthorIdentity);