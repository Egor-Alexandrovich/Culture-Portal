import React from 'react';

function AuthorOfTheDay() {
  return (
    <div className="author-wrapp d-flex justify-content-center">
      <div className="day-author d-flex flex-column align-items-center">
        <h2>Автор дня</h2>
        <button type="button" className="btn btn-dark">Подробнее</button>
      </div>
    </div>
  );
}

export default AuthorOfTheDay;