import React from 'react';
import './AuthorIdentity.scss';
import { Link } from "react-router-dom";

function AuthorIdentity({ name, years, photo, link, id }) {
  const linkElem = link ? <Link className='btn btn-primary' to={`/authors/${id}`}>Подробнее</Link> : null;
  return (
    <div className="card card-width">
      <img src={photo} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Годы жизни: {years}</p>
        { linkElem }
      </div>
    </div>
  )
}

export default AuthorIdentity;