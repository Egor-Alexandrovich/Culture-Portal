import React from 'react';
import { Link } from "react-router-dom";
import './LinksList.scss';

function LinksList({ list }) {
const itemsArray = list.map(item => <li key={ item.id }><Link className='links-item' to={ item.destination }>{ item.name }</Link></li>);
  return (
    <ul className='links-list'>
      { itemsArray }
    </ul>
  );
}

export default LinksList;