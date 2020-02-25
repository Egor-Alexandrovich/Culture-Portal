import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import data from '../../data/testAuthors.js';
import AuthorIdentity from '../AuthorIdentity/AuthorIdentity';

import { withRouter } from 'react-router-dom';

class Authors extends Component {
  renderAuthors(arr) {
    return arr.map((item) => {
      const { name, years, photo, id } = item;
      return (
        <AuthorIdentity 
        key = {id}
        name = { name }
        years = { years }
        photo = { photo }
        link = {true}
        id = { id }
      />
      );
    });
  }
  render () {
    if (!data) {
      return (
        <div>
        <h2>Писатели Беларуси</h2>
      </div>
      )
    }

    const items = this.renderAuthors(data);
    return (
      <div className="container">
        <h2 className="text-center">Писатели Беларуси</h2>
        <div className="row">
          {items}
          {items}
          {items}
        </div>
      </div>
      
    )
  }
}


export default withTranslation()(withRouter(Authors));