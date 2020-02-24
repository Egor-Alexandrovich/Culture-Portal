import React from 'react';
import { Link } from "react-router-dom";
import './LinksList.scss';
import { withTranslation } from 'react-i18next';

function LinksList({ list, t }) {
  const itemsArray = list.map(item => 
    <li key={ item.id }>
      <Link className='links-item' to={ item.destination }
      >
        { t(item.name) }
      </Link>
    </li>
  );

  return (
    <ul className='links-list'>
      { itemsArray }
    </ul>
  );
}

export default withTranslation()(LinksList);