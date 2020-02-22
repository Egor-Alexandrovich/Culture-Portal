import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import membersArray from '../../data/members';

function Team() {
  const membersList = membersArray.map(item => {
    const { name, photo } = item;
    return <li>
      <TeamMember 
        name = { name }
        photo = { photo }
      />    
    </li>
  });
  return (
    <ul>
      {membersList}
    </ul>
  )
}

export default Team;