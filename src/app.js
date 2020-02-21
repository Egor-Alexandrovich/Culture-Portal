import React, { Component } from 'react';
import './App.css';
import Authors from './Authors';
import Main from './Main';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <section>
            <Switch>
              <Route path="/">
                <Main />
              </Route>
              <Route path="/authors">
                <Authors />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>  
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="head-wrapp d-flex justify-content-center">
        <div className="head d-flex flex-column align-items-center justify-content-center">
          <nav className="lang d-flex align-items-center justify-content-center">
            <div className="main">
              <ul className="list">
                <li className="item">RU
                  <ul className="sub-list">
                    <li className="sub-item">ENG</li>
                    <li className="sub-item">BLR</li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div className="app-name"><span>Писатели Беларуси</span></div>
          <div className="head-buttons-block">
            <button type="button" className="btn btn-dark head-buttons">На главную</button>
            <Link to={`/authors`} type="button" className="btn btn-dark head-buttons">Список писателей</Link>          
          </div>
        </div>  
      </header>
    )
  }
}
    