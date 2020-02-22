import React from 'react';

function TeamMember(id, photo, name, gitHub, contribution) {
  return (
    <div className="about-team-wrapp d-flex align-items-center justify-content-center">
      <div className="about-team d-flex flex-column align-items-center justify-content-center">
        <h2 className="our-team">Наша команда</h2>
        <div className="team d-flex flex-wrap align-items-center justify-content-center">
          <div className="participant d-flex flex-column align-items-center">
            <img className="team-img" src={Yahor} alt = "Yahor"/>
            <h3>Yahor Shulha</h3>
          </div>
          <div className="participant">
            <img className="team-img" src={Sergey} alt = "Sergey"/>
            <h3>Sergey Potapov</h3>
          </div>
          <div className="participant">
            <img className="team-img" src={Anton} alt = "Anton"/>
            <h3>Anton Yanovskyi</h3>
          </div>
          <div className="participant">
            <img className="team-img" src={Ilya} alt = "Ilya"/>
            <h3>Ilya Androsau</h3>
          </div>
          <div className="participant">
            <img className="team-img" src={Natalia} alt = "Natalia"/>
            <h3>Natalia Zarubina</h3>
          </div>
          <div className="participant">
            <img className="team-img" src={Artsiom} alt = "Artsiom"/>
            <h3>Artsiom Lipchyk</h3>
          </div>
        </div>
      </div>
    </div>);
}

export default TeamMember;