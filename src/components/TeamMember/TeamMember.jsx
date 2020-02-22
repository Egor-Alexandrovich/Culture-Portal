import React from 'react';
import gitIco from '../../assets/icons/github.svg';

function TeamMember({ name, photo, gitHub, contribution }) {
  const contributionList = contribution.map((item, index) => <li key={ index }>{ item }</li>);
  return (
    <div className="participant d-flex flex-column align-items-center">
      <h3>{ name }</h3>
      <img className="team-img" src={ photo } alt =""/>
      <a href={ gitHub }><img src={ gitIco } alt=""/></a>
      <h3>Вклад:</h3>
      <ul>{ contributionList }</ul>
    </div>
  );
}

export default TeamMember;