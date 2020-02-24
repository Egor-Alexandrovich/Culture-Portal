import React from 'react';
import './AuthorIdentity.scss';

function AuthorIdentity({ name, years, photo }) {
  return (
    <div className="card card-width">
      <img src={photo} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Годы жизни: {years}</p>
      </div>
    </div>
  )
}

export default AuthorIdentity;