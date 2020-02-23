import React from 'react';
import { withTranslation } from 'react-i18next';

function Authors({t}) {
  return (
    <div>
        <h2>{t('Writers of Belarus')}</h2>
    </div>
  );
}

export default withTranslation()(Authors);