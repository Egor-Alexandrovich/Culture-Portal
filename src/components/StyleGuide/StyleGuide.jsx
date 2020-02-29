import React, { Fragment } from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import logo from '../../assets/icons/book.svg';
import gitIco from '../../assets/icons/github.svg';
import '../LanguageSelector/LanguageSelector.scss';
import '../WorksList/WorksList.scss';
import './StyleGuide.scss';
import '../Authors/Authors';
import '../LinksList/LinksList.scss';

function StyleGuide({t}) {
  return (
    <Fragment>
      <h2 className="style-guide-logo">Style guide</h2>
      <div className="style-guide-sections">
        <div className="style-guide-section">
          <h3 className="section-name">Colors:</h3>
          <ul className="colors-list">
            <li className="colors-list__item">
              <div className="colors-list__item_clr" id="color-1"></div>
              <span className="color-description">(#212529) Primary dark color</span>
            </li>
            <li className="colors-list__item">
              <div className="colors-list__item_clr" id="color-2"></div>
              <span className="color-description">(#fff) Primary light color</span>
            </li>
            <li className="colors-list__item">
              <div className="colors-list__item_clr" id="color-3"></div>
              <span className="color-description">(#eaf188) Secondary light color</span>
            </li>
            <li className="colors-list__item">
              <div className="colors-list__item_clr" id="color-4"></div>
              <span className="color-description">(#e86971) Color for timeline</span>
            </li>
            <li className="colors-list__item">
              <div className="colors-list__item_clr" id="color-5"></div>
              <span className="color-description">(#e86972be) Grid head color</span>
            </li>
            <li className="colors-list__item">
              <div className="colors-list__item_clr" id="color-6"></div>
              <span className="color-description">(#eaf18854) Grid row color</span>
            </li>
          </ul>
        </div>
        <div className="style-guide-section">
          <h3 className="section-name">Typography:</h3>
          <table className="table colored-rows table-bordered">
            <thead className="thead-color">
              <tr>
                <th scope="col">Font name</th>
                <th scope="col">Example</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dancing Script</td>
                <td id="dancing-script">Lorem ipsum</td>
                <td>Headers in latin</td>
              </tr>
              <tr>
                <td>Marck Script</td>
                <td id="marck-script">Пример заголовка</td>
                <td>Headers in cyrillic</td>
              </tr>
              <tr>
                <td>Caveat</td>
                <td id="caveat">Lorem ipsum dolor</td>
                <td>Other text</td>
              </tr>
              <tr>
                <td>Cursive</td>
                <td id="cursive">Lorem ipsum dolor sit amet</td>
                <td>Used in case of incompatibility</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="style-guide-section">
          <h3 className="section-name">Control elements:</h3>
          <ul className="elements-list">
            <li className="elements-list__item">
              <div className="search-wrapp">
                <input type="text" className="search" placeholder={t('Search')}/>
              </div>
            </li>
            <li className="elements-list__item">
              <DropdownButton title="Example" className="language-selector" variant="outline-dark">
                <Dropdown.Item as="button">Example</Dropdown.Item>
                <Dropdown.Item as="button">Example</Dropdown.Item>
                <Dropdown.Item as="button">Example</Dropdown.Item>
              </DropdownButton>
            </li>
            <li className="elements-list__item">
              <Link className='btn btn-dark btn-font'>{t('Button')}</Link>
            </li>
            <li className="elements-list__item">
              <Link className='links-item'>
                { t("Link") }
              </Link>
            </li>
          </ul>
        </div>
        <div className="style-guide-section">
          <h3 className="section-name">Icons:</h3>
          <ul className="icons-list">
            <li className="icons-list__item"><img src={logo} alt=""/></li>
            <li className="icons-list__item"><img src={gitIco} alt=""/></li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default withTranslation()(StyleGuide);