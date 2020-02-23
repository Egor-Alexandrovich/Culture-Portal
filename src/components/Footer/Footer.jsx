import React from 'react';
import { withTranslation } from 'react-i18next';

function Footer({t}) {
  return(
    <div className="footer-wrapp d-flex justify-content-center">
      <footer className="footer d-flex justify-content-center">
        {t('Website developed by')} GROUP-20, RS 2019Q3
      </footer>
    </div>
  )
}

export default withTranslation()(Footer);