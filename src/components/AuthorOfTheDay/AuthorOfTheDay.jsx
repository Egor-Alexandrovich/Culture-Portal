import React from 'react';
import { withTranslation } from 'react-i18next';

function AuthorOfTheDay({t}) {
  return (
    <div className="author-wrapp d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <h2>{t('Author of the day')}</h2>
        <button type="button" className="btn btn-dark">{t('More')}</button>
      </div>
    </div>
  );
}

export default withTranslation()(AuthorOfTheDay);