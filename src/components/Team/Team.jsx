import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import membersArray from '../../data/members';
import { withTranslation } from 'react-i18next';
import "./Team.scss"

function Team({t}) {
  const membersList = membersArray.map(item => {
    const { id, names, photo, gitHub, contribution } = item;
    return <TeamMember
      key = { id }
      name = { names }
      photo = { photo }
      gitHub = { gitHub }
      contribution = { contribution }
    />
  });
  return (
    <div className="about-team-wrapp d-flex align-items-center justify-content-center">
      <div className="about-team d-flex flex-column align-items-center justify-content-center">
        <h2 className="our-team">{t('Our team')}</h2>
        <div className="team d-flex flex-wrap align-items-center justify-content-center">
          { membersList }
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Team);