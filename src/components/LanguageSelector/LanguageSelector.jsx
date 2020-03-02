import React from 'react';
import { withTranslation } from 'react-i18next';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import './LanguageSelector.scss';

const languages = ['en', 'ru', 'be'];
let lang;


function LanguageSelector({i18n}) {
  return (
    <DropdownButton
      id="lang"
      className="language-selector"
      title={i18n.language}
      variant="outline-dark"
    >
      {
        languages.map((language) => {
          return (
            <Dropdown.Item
              as="button"
              onClick={() => i18n.changeLanguage(language)}
              key={language}
            >
              {language}
            </Dropdown.Item>)
        })
      }
    </DropdownButton>
  );
}

export default withTranslation()(LanguageSelector);
