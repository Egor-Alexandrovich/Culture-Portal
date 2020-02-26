import React, { Component } from 'react';
import './Authors.scss';
import { withTranslation } from 'react-i18next';
import data from '../../data/AuthorsData';
import AuthorIdentity from '../AuthorIdentity/AuthorIdentity';

import { withRouter } from 'react-router-dom';

class Authors extends Component {
  constructor() {
    super();

    this.state = {
      list: data,
    };
  }

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

  find(arr) {
    let value = this.searchInput.value;
    this.setState({
      list: arr.filter(au => au.name.toUpperCase().includes(value.toUpperCase())),
    });  
  }

  render () {
    if (!data) {
      return (
        <div className = "main-background" >
        <h2>Писатели Беларуси</h2>
      </div>
      )
    }

    let items = this.renderAuthors(this.state.list);
    return (
      <div className="container main-background">
        <h2 className="text-center">Писатели Беларуси</h2>
        <input type="text" ref={(input) => { this.searchInput = input }} onChange={this.find.bind(this, data)}/>
        <div className="row">
          {items}
        </div>
      </div>
      
    )
  }
}


export default withTranslation()(withRouter(Authors));