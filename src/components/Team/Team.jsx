import React from 'react';
import Yahor from '../../assets/images/first-cat.jpg';
import Sergey from '../../assets/images/second-cat.jpg';
import Anton from '../../assets/images/third-cat.jpg';
import Ilya from '../../assets/images/fourth-cat.jpg';
import Natalia from '../../assets/images/fifth-cat.jpg';
import Artsiom from '../../assets/images/sixth-cat.jpg';

function Team() {
  return (
    <div className="about-team-wrapp d-flex align-items-center justify-content-center">
      <div className="about-team d-flex flex-column align-items-center justify-content-center">
        <h1 className="our-team">Наша команда</h1>
        <div className="team d-flex flex-wrap align-items-center justify-content-center">
          <div className="participant d-flex flex-column align-items-center">
            <img className="team-img" src={Yahor} alt = "Yahor"/>
            <h2>Yahor Shulha</h2>
          </div>
          <div className="participant">
            <img className="team-img" src={Sergey} alt = "Sergey"/>
            <h2>Sergey Potapov</h2>
          </div>
          <div className="participant">
            <img className="team-img" src={Anton} alt = "Anton"/>
            <h2>Anton Yanovskyi</h2>
          </div>
          <div className="participant">
            <img className="team-img" src={Ilya} alt = "Ilya"/>
            <h2>Ilya Androsau</h2>
          </div>
          <div className="participant">
            <img className="team-img" src={Natalia} alt = "Natalia"/>
            <h2>Natalia Zarubina</h2>
          </div>
          <div className="participant">
            <img className="team-img" src={Artsiom} alt = "Artsiom"/>
            <h2>Artsiom Lipchyk</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;