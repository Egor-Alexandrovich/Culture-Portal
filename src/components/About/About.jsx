import React from 'react';
import { withTranslation } from 'react-i18next';
import './About.scss'

function About({t}) {
  return (
    <div className="about-wrapp d-flex align-items-center justify-content-center">
      <div className="about d-flex flex-column align-items-center justify-content-center">
        <h2>{t('About portal')}</h2>
        <p>
          {t('About portal extended')}
        </p>
      </div>
    </div>  
  )
}

export default withTranslation()(About);