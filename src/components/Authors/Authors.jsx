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
      const { name, yearOfBirth, yearOfDeath, photo, id } = item;
      return (
        <AuthorIdentity 
        key = {id}
        name = { name }
        years = { {yearOfBirth, yearOfDeath} }
        photo = { photo }
        link = {true}
        id = { id }
      />
      );
    });
  }

  find(arr) {
    let lang = document.getElementById("lang").innerHTML;
    let value = this.searchInput.value;
    let places = arr;
    let filteredArr;
    if (lang === "ru" || lang === "ru-RU") {
      places = (places.filter(au => au.placeRu.toUpperCase().includes(value.toUpperCase())));
      filteredArr = arr.filter(au => au.ru.toUpperCase().includes(value.toUpperCase()));
      this.setState({
        list: filteredArr.concat(places.filter(function (item) {
          return filteredArr.indexOf(item) < 0;
        }))      
      });  
    }
    else if (lang === "be" || lang === "be-BE") {
      places = (places.filter(au => au.placeBe.toUpperCase().includes(value.toUpperCase())));
      filteredArr = arr.filter(au => au.be.toUpperCase().includes(value.toUpperCase()));
      this.setState({
        list: filteredArr.concat(places.filter(function (item) {
          return filteredArr.indexOf(item) < 0;
        }))      
      });
    } 
    else if (lang === "en" || lang === "en-EN") {
      places = (places.filter(au => au.placeEn.toUpperCase().includes(value.toUpperCase())));
      filteredArr = arr.filter(au => au.name.toUpperCase().includes(value.toUpperCase()));
      this.setState({
        list: filteredArr.concat(places.filter(function (item) {
          return filteredArr.indexOf(item) < 0;
        }))      
      });
    }
  }

  render () {
    const {t} = this.props;

    if (!data) {
      return (
        <div>
          <h2>{t('Writers of Belarus')}</h2>
        </div>
      )
    }

    let items = this.renderAuthors(this.state.list);
    return (
      <div className="container">
        <h2 className="text-center head-text">{t('Writers of Belarus')}</h2>
        <div className="search-wrapp">
          <input type="text" className="search" placeholder={t('Search')} ref={(input) => { this.searchInput = input }} onChange={this.find.bind(this, data)}/>
        </div>
        <div className="row">
          {items}
        </div>
      </div>
      
    )
  }
}


export default withTranslation()(withRouter(Authors));