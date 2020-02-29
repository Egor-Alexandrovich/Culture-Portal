import React from 'react';
import gitIco from '../../assets/icons/github.svg';
import './TeamMember.scss';
import { withTranslation } from 'react-i18next';

function TeamMember({ name, photo, gitHub, contribution, t}) {
  const contributionList = contribution.map((item, index) => <li key={ index }>{ item.feature }</li>);
  return (
    <div className="participant d-flex flex-column align-items-center">
      <div className="name-wrapper">
        <h3 className="participant-name">{ name }</h3>
        <a className="git-link" href={ gitHub }><img src={ gitIco } alt=""/></a>
      </div>
      <img className="team-img" src={ photo } alt =""/>
      <h3>{t('Contribution')}:</h3>
      <ul>{ contributionList }</ul>
    </div>
  );
}

export default withTranslation()(TeamMember);